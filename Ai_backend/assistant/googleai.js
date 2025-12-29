const { GoogleGenAI } = require("@google/genai");

const googleai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_AI_API_KEY,
});

 class Assistant {
   #chat;
   name = "googleai";

   constructor(model = "gemini-2.5-flash") {
     this.#chat = googleai.chats.create({ model });
   }

   async chat({topic, question}) {
    const safeTopic = String(topic);
    const safeQuestion = String(question);
     const prompt = `
You are a teaching assistant.

Topic: ${safeTopic}
Student Question: ${safeQuestion}

Respond ONLY:
  aiExplanation
  aiExample,
  aiPracticeQuestion

`;
     const result = await this.#chat.sendMessage({
       message: prompt,
     });
     return result.text;
   }
 }

module.exports = { Assistant };

