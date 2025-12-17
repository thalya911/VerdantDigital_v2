export const generateTradieContent = async (
  trade: string,
  location: string,
  tone: string
): Promise<{ headline: string; bio: string }> => {
  try {
    const response = await fetch('/api/generate-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trade, location, tone }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Content generation error:', error);
    // Fallback content if API fails
    return {
      headline: `Expert ${trade} Services in ${location}`,
      bio: `Serving ${location} with professional ${trade} solutions. We turn up on time and get the job done right. Contact us today for a free quote.`,
    };
  }
};