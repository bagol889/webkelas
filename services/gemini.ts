
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDailyMotivation = async (className: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite-latest',
      contents: `Generate a short, elegant, and cool motivational quote in Indonesian for high school students of a class named ${className}. Keep it under 15 words.`,
    });
    return response.text || "Teruslah berjuang untuk masa depan gemilang.";
  } catch (error) {
    console.error("Error fetching motivation:", error);
    return "Kebersamaan adalah kunci kesuksesan kita.";
  }
};
