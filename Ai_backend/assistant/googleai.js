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

   async chat(content) {
     const result = await this.#chat.sendMessage({
       message: content,
     });
     return result.text;
   }
 }

module.exports = { Assistant };

