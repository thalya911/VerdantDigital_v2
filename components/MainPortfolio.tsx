import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  name: string;
  category: string;
  desc: string;
  result: string;
  resultMetric?: string;
  image: string;
  website: string;
  altText: string;
}

const projects: Project[] = [
  {
    name: "BreadBloom",
    category: "E-commerce / Brand",
    desc: "Artisan aesthetics meet seamless checkout. Online ordering, subscriptions, and delivery scheduling that feels as good as it works.",
    result: "Increased conversion rate through mobile-first redesign and streamlined checkout flow.",
    resultMetric: "+47%",
    image: "/BreadBloom.png",
    website: "https://breadbloom.com.au",
    altText: "Artisan bread loaves on display - BreadBloom e-commerce website portfolio project"
  },
  {
    name: "Newstead Plant Co",
    category: "Shopify E-commerce",
    desc: "Beautiful product photography optimised for mobile conversion. Care guides and location-based delivery in an interface plant lovers actually enjoy using.",
    result: "Boosted sales with location-based delivery integration and optimised mobile experience.",
    resultMetric: "+38%",
    image: "/Newstead Plant Co.png",
    website: "https://newsteadplantco.com.au",
    altText: "Indoor plants and greenery display - Newstead Plant Co Shopify e-commerce website portfolio project"
  },
  {
    name: "RAYN",
    category: "iOS App / Fintech",
    desc: "Your path to calmer finances. A financial wellness app designed to reduce money stress and bring clarity to personal finance management.",
    result: "Live on the App Store with intuitive onboarding flow and clean, trust-building interface design.",
    resultMetric: "LIVE",
    image: "/RAYN.png",
    website: "https://withrayn.com",
    altText: "RAYN financial wellness iOS app interface - fintech mobile application portfolio project"
  },
  {
    name: "Quietly",
    category: "iOS App / Product",
    desc: "Low-stress habit tracking that celebrates progress over perfection. Weekly goals instead of rigid streaks, with privacy-first design and Apple Health integration.",
    result: "Built and launched to App Store with one-time purchase model and zero data collection.",
    resultMetric: "LIVE",
    image: "/Quietly.png",
    website: "https://getquietly.app",
    altText: "Quietly habit tracking iOS app interface - mobile application portfolio project"
  }
];

const MainPortfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const cycleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const cyclePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const goToProject = useCallback((index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setProgress(0);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, activeIndex]);

  // Auto-cycle with progress bar
  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          cycleNext();
          return 0;
        }
        return prev + 2; // 50 steps over 5 seconds
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [cycleNext, isPaused, activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        cycleNext();
      } else if (e.key === 'ArrowLeft') {
        cyclePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cycleNext, cyclePrev]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        cycleNext();
      } else {
        cyclePrev();
      }
    }

    touchStartX.current = null;
  };

  // Parallax effect on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 20, y: y * 10 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsPaused(false);
  };

  return (
    <section
      id="work"
      className="py-16 md:py-20 bg-brand-black relative scroll-mt-24"
    >
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Navigation */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
              PORTFOLIO
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1] uppercase max-w-3xl" style={{letterSpacing: '0.02em'}}>
              RECENT WORKS
            </h2>
          </div>

          {/* Navigation with Thumbnails */}
          <div className="flex items-center gap-4">
            {/* Thumbnail Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`relative overflow-hidden rounded-md transition-all duration-300 ${
                    index === activeIndex
                      ? 'ring-2 ring-brand-accent ring-offset-2 ring-offset-brand-black'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                  aria-label={`View ${project.name}`}
                >
                  <div className="w-12 h-8 relative">
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={cyclePrev}
                disabled={isAnimating}
                className="p-2.5 rounded-full border border-brand-border hover:border-brand-accent hover:bg-brand-accent/10 transition-all disabled:opacity-50"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button
                onClick={cycleNext}
                disabled={isAnimating}
                className="p-2.5 rounded-full border border-brand-border hover:border-brand-accent hover:bg-brand-accent/10 transition-all disabled:opacity-50"
                aria-label="Next project"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Stacked Cards */}
        <div className="reveal">
          {/* Stack container */}
          <div
            ref={containerRef}
            className="relative cursor-pointer pb-14 md:pb-16 select-none"
            onClick={cycleNext}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Render cards back to front */}
            {projects.map((project, index) => {
              let stackPos = index - activeIndex;
              if (stackPos < 0) stackPos += projects.length;

              if (stackPos > 3) return null;

              const isActive = stackPos === 0;

              // Cards peek from bottom-right with colored edges
              // Smaller offsets on mobile to prevent cards going off-screen
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
              const offsetDown = stackPos * (isMobile ? 10 : 16);
              const offsetRight = stackPos * (isMobile ? 8 : 16);
              const scale = 1 - stackPos * 0.03;
              const rotation = stackPos * (isMobile ? 0.5 : 0.8);

              return (
                <div
                  key={project.name}
                  className={`absolute inset-x-0 top-0 transition-all duration-500 ease-out ${
                    isAnimating ? 'duration-500' : ''
                  }`}
                  style={{
                    transform: `
                      translateY(${offsetDown}px)
                      translateX(${offsetRight}px)
                      scale(${scale})
                      rotate(${rotation}deg)
                    `,
                    transformOrigin: 'bottom right',
                    zIndex: projects.length - stackPos,
                    opacity: isActive ? 1 : 0.85 - stackPos * 0.15,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    onClick={(e) => {
                      if (!isActive) e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <div
                      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'shadow-2xl shadow-brand-accent/20'
                          : ''
                      }`}
                      style={{
                        border: isActive
                          ? '2px solid rgba(0, 255, 157, 0.5)'
                          : `2px solid rgba(0, 255, 157, ${0.3 - stackPos * 0.08})`,
                      }}
                    >
                      {/* Image with parallax */}
                      <div className="relative aspect-[4/3] sm:aspect-[2/1] md:aspect-[21/9] overflow-hidden bg-brand-surface">
                        <img
                          src={project.image}
                          alt={project.altText}
                          loading={stackPos < 2 ? "eager" : "lazy"}
                          decoding="async"
                          className="w-full h-full object-cover object-top transition-transform duration-300"
                          style={{
                            transform: isActive
                              ? `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.05)`
                              : 'scale(1)',
                          }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/20"></div>

                        {/* Darker overlay for background cards */}
                        {!isActive && (
                          <div className="absolute inset-0 bg-brand-black/40"></div>
                        )}

                        {/* Project number badge */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                          <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-brand-black/60 backdrop-blur-sm border border-brand-accent/40 rounded-full text-brand-accent text-[10px] sm:text-xs font-bold">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* View Project CTA */}
                        {isActive && (
                          <div className="absolute top-4 right-4 z-20">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent text-brand-black text-xs font-bold uppercase tracking-wider rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                              View
                              <ArrowUpRight size={14} />
                            </span>
                          </div>
                        )}

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-8">
                          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-4">
                            {/* Project Info */}
                            <div className="flex-1 min-w-0">
                              <span className="inline-block text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-1 md:mb-2">
                                {project.category}
                              </span>
                              <h3 className={`text-lg sm:text-xl md:text-3xl font-display font-bold text-white mb-1 md:mb-2 transition-colors flex items-center gap-2 ${
                                isActive ? 'group-hover:text-brand-accent' : ''
                              }`}>
                                {project.name}
                                {isActive && (
                                  <ArrowUpRight
                                    className="opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"
                                    size={24}
                                  />
                                )}
                              </h3>
                              {isActive && (
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-2 max-w-xl">
                                  {project.desc}
                                </p>
                              )}
                            </div>

                            {/* Result Metric */}
                            {isActive && project.resultMetric && (
                              <div className="flex-shrink-0 self-start md:self-auto">
                                <div className="px-3 py-2 sm:px-5 sm:py-3 bg-brand-black/70 backdrop-blur-sm border border-brand-accent/40 rounded-lg sm:rounded-xl text-center inline-flex flex-col">
                                  <span className="block text-brand-accent font-display font-black text-2xl sm:text-4xl md:text-5xl leading-none">
                                    {project.resultMetric}
                                  </span>
                                  <span className="text-white/60 text-[10px] sm:text-xs uppercase tracking-wider mt-1">
                                    {project.resultMetric.includes('%') ? 'Conversion' : 'App Store'}
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}

            {/* Spacer to maintain height based on aspect ratio */}
            <div className="aspect-[4/3] sm:aspect-[2/1] md:aspect-[21/9] pointer-events-none" />
          </div>

          {/* Progress Bar */}
          <div className="mt-4 sm:mt-6 max-w-xs mx-auto px-4 sm:px-0">
            <div className="h-0.5 bg-brand-border rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-accent transition-all duration-100 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between items-center text-xs text-brand-muted">
              <span>
                <span className="text-white font-medium">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="mx-1">/</span>
                <span>{String(projects.length).padStart(2, '0')}</span>
              </span>
              <span className="opacity-60 hidden sm:inline">Swipe or use arrow keys</span>
              <span className="opacity-60 sm:hidden">Swipe to browse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPortfolio;
