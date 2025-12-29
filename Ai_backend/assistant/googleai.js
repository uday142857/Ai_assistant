const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const googleai = new GoogleGenAI({
  apiKey: process.env.VITE_GOOGLE_AI_API_KEY,
});

class Assistant {
  #chat;

  constructor(model = "gemini-2.5-flash") {
    this.#chat = googleai.chats.create({ model });
  }

  async chat(content) {
    try {
      
      const result = await this.#chat.sendMessage(content);
      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        throw new Error("No text returned from Gemini");
      }

      return text;
    } catch (error) {
      console.error("❌ Gemini Error:", error);
      throw error;
    }
  }
}

module.exports = { Assistant };
