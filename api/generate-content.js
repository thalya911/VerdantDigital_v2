import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { trade, location, tone } = req.body;

  // Validate required fields
  if (!trade || !location) {
    return res.status(400).json({ error: 'Trade and location are required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  // Return mock data if API key is not configured
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is missing. Returning mock data.");
    return res.status(200).json({
      headline: `The Best ${trade} in ${location}`,
      bio: `We provide top-tier ${trade} services across ${location}. Reliable, affordable, and professional.`
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';
    
    const toneValue = tone || 'Professional, Aussie, Trustworthy';
    const prompt = `
      You are a copywriter for an Australian trade business website.
      Write a catchy, short Homepage Headline (max 8 words) and a short "About Us" bio (max 60 words).
      
      Business Details:
      Trade: ${trade}
      Location: ${location}
      Tone: ${toneValue} (Australian, friendly, professional)
      
      Return ONLY valid JSON in this format:
      {
        "headline": "...",
        "bio": "..."
      }
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    const result = JSON.parse(text);
    return res.status(200).json(result);

  } catch (error) {
    console.error("Gemini API Error:", error);
    
    // Return fallback content on error
    return res.status(200).json({
      headline: `Expert ${trade} Services in ${location}`,
      bio: `Serving ${location} with professional ${trade} solutions. We turn up on time and get the job done right. Contact us today for a free quote.`
    });
  }
}
