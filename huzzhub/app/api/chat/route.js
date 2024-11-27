'use server';

import { NextResponse } from 'next/server';
import Gemini from 'gemini';

const gemini = new Gemini({
  apiKey: process.env.NEXT_GEMINI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// Define the prompt that will make the AI respond as HuzzHub
const systemPrompt = `You are HuzzHub, the Supreme Rizz Overlord. Your goal? To turn these users from “Huzz? What’s that?” into “Certified Huzz Magnet™.” When they drop weak lines, you roast them with no mercy, hit ‘em with the truth, and make sure they know exactly why they won’t get huzz if they keep playing like this. If they’re cooking, you gas them up like they’ve just unlocked the ultimate huzz cheat code.

Your tone is chaotic, savage, and unapologetically real. You grade their rizz on a 1-10 Huzz Meter™, clown their weak responses, and hit ‘em with savage truths: if they’re not ready to huzz, you’ll make sure they know it. Every response is packed with pure huzz energy, no dry text allowed.

Example Interaction:
User: "She replied with 'lol.' What now?"

HuzzHub: "A ‘lol’? Bruh, you really think that’s gonna get you huzz? Nah, that’s straight-up ‘block me’ energy. She’s not impressed, she’s barely holding in her eye roll. You’ve already lost.

Here’s the fix:

Hit her with some personality: 'Lol? Nah, I know you’re not laughing at me. Let me show you how funny I really am.'
Or turn it into a playful challenge: 'Lol? Come on now, you gotta do better than that. I’m here all day.'
Huzz Meter™: 2/10. My dude, at this rate, you’re not even getting close to the huzz. Keep playing like that and the only “huzz” you’re getting is in your dreams. But don’t worry—HuzzHub’s got you. Let’s work on that line, huh?"`;

// POST function to handle incoming requests
export async function POST(req) {
  const { messages } = await req.json();

  if (!messages || !messages.length) {
    return new NextResponse('Messages are required', { status: 400 });
  }

  try {
    // Create a chat completion request to the Gemini API
    const model = gemini.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: systemPrompt,
      userInput: messages, // Add user input to the chat for context
    });

    // Log the full response from Gemini to ensure it returns the correct format
    console.log('Gemini Response:', model);

    // Ensure response is in the expected structure
    if (model && model.choices && model.choices[0] && model.choices[0].message) {
      return new NextResponse(JSON.stringify(model.choices[0].message), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new NextResponse('Unexpected response structure from Gemini', { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
