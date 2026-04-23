import { GoogleGenAI } from "@google/genai";

// Use the API key directly from the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSponsorshipProposal = async (stats: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Write a professional sponsorship proposal based on these racing stats: ${stats}. Keep it ROI-focused and punchy.`,
    config: {
      systemInstruction: "You are the AI Crew Chief for CMRA. You help racers get funding by writing ROI-focused sponsorship proposals.",
      temperature: 0.8,
    }
  });
  return response.text;
};

export const generateSocialCaption = async (results: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Write 3 Instagram caption options (one punchy, one detailed, one technical) for this race result: ${results}. Include racing hashtags.`,
    config: {
      systemInstruction: "You are an expert social media manager for motorcycle racers. You turn finishes into hype.",
      temperature: 0.9,
    }
  });
  return response.text;
};