import { useEffect, useRef, useState } from 'react';
import { Renderer, Program, Mesh, Triangle, Color } from 'ogl';

import './Threads.css';

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = 40;
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength
                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );

    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );

    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
        0.0,
        1.0
    );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = 1.0 - line_strength;
    vec3 bgColor = vec3(0.051, 0.051, 0.059); // #0D0D0F brand-black
    vec3 finalColor = mix(bgColor, uColor, colorVal);
    fragColor = vec4(finalColor, 1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
  [key: string]: any;
}

// Helper function to check WebGL support
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (!gl) return false;

    // Check if it's a software renderer (often indicates poor performance)
    const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      const renderer = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      // Avoid software renderers like SwiftShader
      if (renderer && typeof renderer === 'string' && renderer.toLowerCase().includes('swift')) return false;
    }

    return true;
  } catch (e) {
    return false;
  }
}

// Check if device is low-end (disable WebGL on very low-end devices)
function isLowEndDevice(): boolean {
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;

  // Check device memory (if available)
  const memory = (navigator as any).deviceMemory;
  if (memory && memory < 4) return true;

  // Check hardware concurrency (CPU cores)
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return true;

  return false;
}

const Threads: React.FC<ThreadsProps> = ({
  color = [1, 1, 1],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | undefined>(undefined);
  const [shouldRender, setShouldRender] = useState<boolean>(true);
  const [webglFailed, setWebglFailed] = useState<boolean>(false);

  useEffect(() => {
    // Check if WebGL should be rendered
    if (!isWebGLAvailable() || isLowEndDevice()) {
      setShouldRender(false);
      setWebglFailed(true);
      return;
    }

    if (!containerRef.current) return;
    const container = containerRef.current;

    try {
      const renderer = new Renderer({ alpha: false, antialias: false, preserveDrawingBuffer: true }); // Opaque canvas prevents scroll flickering
      const gl = renderer.gl;

      if (!gl) {
        setWebglFailed(true);
        setShouldRender(false);
        return;
      }

      gl.clearColor(0.051, 0.051, 0.059, 1); // #0D0D0F brand-black
      container.appendChild(gl.canvas);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          iTime: { value: 0 },
          iResolution: {
            value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
          },
          uColor: { value: new Color(...color) },
          uAmplitude: { value: amplitude },
          uDistance: { value: distance },
          uMouse: { value: new Float32Array([0.5, 0.5]) }
        }
      });

      const mesh = new Mesh(gl, { geometry, program });

      function resize() {
        const { clientWidth, clientHeight } = container;
        renderer.setSize(clientWidth, clientHeight);
        program.uniforms.iResolution.value.r = clientWidth;
        program.uniforms.iResolution.value.g = clientHeight;
        program.uniforms.iResolution.value.b = clientWidth / clientHeight;
      }
      window.addEventListener('resize', resize);
      resize();

      let currentMouse = [0.5, 0.5];
      let targetMouse = [0.5, 0.5];

      function handleMouseMove(e: MouseEvent) {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1.0 - (e.clientY - rect.top) / rect.height;
        targetMouse = [x, y];
      }
      function handleMouseLeave() {
        targetMouse = [0.5, 0.5];
      }
      if (enableMouseInteraction) {
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);
      }

      function update(t: number) {
        try {
          if (enableMouseInteraction) {
            const smoothing = 0.05;
            currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
            currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
            program.uniforms.uMouse.value[0] = currentMouse[0];
            program.uniforms.uMouse.value[1] = currentMouse[1];
          } else {
            program.uniforms.uMouse.value[0] = 0.5;
            program.uniforms.uMouse.value[1] = 0.5;
          }
          program.uniforms.iTime.value = t * 0.001;

          renderer.render({ scene: mesh });
          animationFrameId.current = requestAnimationFrame(update);
        } catch (error) {
          // If rendering fails, stop the animation and show fallback
          console.warn('WebGL rendering error, falling back to static background:', error);
          setWebglFailed(true);
          setShouldRender(false);
        }
      }
      animationFrameId.current = requestAnimationFrame(update);

      return () => {
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        window.removeEventListener('resize', resize);

        if (enableMouseInteraction) {
          container.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseleave', handleMouseLeave);
        }
        if (container.contains(gl.canvas)) container.removeChild(gl.canvas);

        // Safely lose WebGL context
        try {
          gl.getExtension('WEBGL_lose_context')?.loseContext();
        } catch (e) {
          // Ignore errors during cleanup
        }
      };
    } catch (error) {
      console.warn('WebGL initialization failed, falling back to static background:', error);
      setWebglFailed(true);
      setShouldRender(false);
    }
  }, [color, amplitude, distance, enableMouseInteraction]);

  // Fallback rendering when WebGL is not available
  if (!shouldRender || webglFailed) {
    return (
      <div
        ref={containerRef}
        className="threads-container threads-fallback"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 255, 179, 0.08) 0%, transparent 60%)',
          opacity: 0.6
        }}
        {...rest}
      />
    );
  }

  return <div ref={containerRef} className="threads-container" {...rest} />;
};

export default Threads;
