// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const { description } = await request.json();

//     if (!description) {
//       return NextResponse.json({ error: "Description is required." }, { status: 400 });
//     }

//     // This grabs the key you set in Vercel Settings
//     const apiKey = process.env.GOOGLE_API_KEY;
//     if (!apiKey) {
//       return NextResponse.json({ error: "Server Error: API Key missing." }, { status: 500 });
//     }

//     const genAI = new GoogleGenerativeAI(apiKey);
//     const model = genAI.getGenerativeModel({ model: "models/gemma-3-4b-it" });

//     const prompt = `
//       You are a civic issue analysis bot. Extract 1-3 specific tags from this description.
//       Output ONLY a single line of comma-separated tags.
//       Description: ${description}
//     `;

//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const tags = response.text().trim();

//     return NextResponse.json({ generated_tags: tags });

//   } catch (error) {
//     console.error("AI Error:", error);
//     return NextResponse.json({ error: "Failed to generate tags." }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";

// THE NEW BACKEND URL
const PYTHON_API_URL = "https://civicsathi-ai.onrender.com"; 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { description } = body;

    if (!description) {
      return NextResponse.json({ error: "Description is required." }, { status: 400 });
    }

    console.log(`[PROXY] Forwarding description to Python...`);

    const pythonResponse = await fetch(`${PYTHON_API_URL}/analyze-issue`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description }), 
    });

    if (!pythonResponse.ok) {
      console.error(`[PROXY] Python Backend Error: ${pythonResponse.status}`);
      return NextResponse.json({ error: "Failed to generate tags from backend." }, { status: 500 });
    }

    const data = await pythonResponse.json();
    
    // CRITICAL CHECK:
    // The Frontend expects the key "generated_tags".
    // If your teammate's Python code returns "tags", we map it here safely:
    const finalTags = data.tag;
    const conf=data.confidence;
    console.log(conf);
    return NextResponse.json({ generated_tags: finalTags });

  } catch (error) {
    console.error("Proxy Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
