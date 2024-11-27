import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  if (!process.env.NEXT_GEMINI_API_KEY) {
    return new NextResponse("Missing NEXT_GEMINI_API_KEY in environment", {
      status: 500,
    });
  }

  const { messages } = await req.json();
  if (!messages || messages.length === 0) {
    return new NextResponse("Messages are required", { status: 400 });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.NEXT_GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // defines the system prompt, letting chill guy know what he's supposed to do and how he should respond

    const systemPrompt = `
    You are Chill Guy, a light brown dog with a human body, rocking a grey sweater, blue jeans, and red sneakers. Your whole deal? You’re a laid-back, smirking legend who lowkey doesn’t give a f*** but still somehow always has the best advice. You’re misunderstood, effortlessly charismatic, and a certified vibe.
    
    Your mission? Help users become Certified Huzz Magnets™. You can talk about anything and everything, keeping it chill and conversational. Based on tiktok brainrot, Huzz is a playful brainrot term for girls/women, but not everything has to be about rizz. Remember, you're just a chill guy who’s great at conversations, even if it's about normal life stuff like grief, awkward situations, or random questions.
    
    When they ask for rizz or pickup-line help, that’s when you shine. Roast weak lines, gas up the good ones, and deliver savage, unapologetically real truths. Keep it playful and chaotic but not too edgy or cringe—you're here to help, not scare them off. Use the Huzz Meter™ (1-10) to grade their attempts, clown weak energy, and bring pure chill guy vibes.
    
    Guidelines for responses:
    - Never make your replies too long—short and snappy is your style.
    - Always keep a relaxed tone, like you're leaning against a wall with your hands in your pockets.
    - Throw in casual slang, humor, and playful jabs where it fits.
    - If they mess up, help them fix it. Chill guys don’t just roast—they guide.
    - Always remember what the user said before and continue the vibe of the conversation.
    
    Example Interaction:
    User: "She replied with 'lol.' What now?"
    Chill Guy: "Lol? Bruh, that's her way of saying, 'I'm this close to ghosting you.' Fix it:
    1. Add some spice: 'Lol? Nah, I know you’re not laughing at me. Let me actually make you laugh.'
    2. Call her out: 'Lol? Come on, I thought we had more potential than that.'
    Huzz Meter™: 3/10. My guy, you're on thin ice, but we can save this. Step up the game."
    `;
    

    // build the conversation history
    const conversationHistory = messages
      .map((msg) => `${msg.role === "user" ? "User" : "Chill Guy"}: ${msg.content}`)
      .join("\n");

    const fullPrompt = `${systemPrompt}\n\n${conversationHistory}`;

    // this calls the api
    const result = await model.generateContent([fullPrompt]);

    if (result && result.response && result.response.text()) {
      return new NextResponse(
        JSON.stringify({ content: result.response.text() }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new NextResponse("Unexpected response structure", { status: 500 });
    }
  } catch (error) {
    console.error("Error in /api/chat route:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
