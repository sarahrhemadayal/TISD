// src/app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  const systemPrompt = `
You are a helpful legal assistant trained only on Indian law. 
Only respond with information that applies to Indian legal context. 
Keep answers short (under 100 words). Avoid any markdown, bullet points, or fancy formatting.
Always include this disclaimer: "I’m an AI legal assistant and not a licensed lawyer."
`;

  const res = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + process.env.GEMINI_API_KEY,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${systemPrompt}\n\nUser: ${message}`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 100,
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 3 },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 3 },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 3 },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 3 },
        ],
      }),
    }
  );

  const data = await res.json();

  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn’t process that.";

  return NextResponse.json({ reply });
}
