import { NextResponse } from "next/server";
import OpenAI from "openai";

const gptModel = "gpt-3.5-turbo";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * GET method API.
 * Retrieves advice from a GPT model based on a stock symbol provided as a string.
 * @param {Object} req - Request object (useState that changes predictions dictionary).
 * @returns {Promise} - Promise resolving to the advice generated by the GPT model.
 */
export async function GET(req) {
  const stockSymbol = req.nextUrl.searchParams.get("stock-symbol");

  try {
    if (!stockSymbol) {
      return NextResponse.json(
        { messgae: "Bad Request - stock symbol is required" },
        { status: 400 }
      );
    }

    const prompt = `Please give me some information about stock symbol '${stockSymbol.toUpperCase()}' in terms of financial statements and their recent issues`;

    const response = await openai.chat.completions.create({
      model: gptModel,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 1,
    });
    console.log(response.choices[0].message)
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    throw new NextResponse("Internal error", { status: 500 });
  }
}
