import React, { useState } from "react";
import "./App.css";
import Chat from "./components/chat/Chat";
import Controls from "./components/controls/Controls";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! How can I assist you right now?",
    },
  ]);

   function addMessage(message) {
     setMessages((prevMessages) => [...prevMessages, message]);
   }


   async function handleContentSend({ topic, question }) {
    addMessage({
      role: "user",
      content: `Topic: ${topic}\nQuestion: ${question}`,
    });
     try {
       const response = await fetch("https://ai-assistant-back-o8yh.onrender.com/api/chat", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ topic, question }),
       });

       const data = await response.json();
       console.log(data.reply);

       addMessage({
         role: "assistant",
         content: data.reply,
       });
     } catch (error) {
       console.log(error);
       addMessage({
         role: "system",
         content: "Sorry, I couldn't process ",
       });
     }
   }




  return (
    <div className="app">
      <header className="header">
        {" "}
        <h2 className="title">AI Assistant</h2>
      </header>
      <div className="container">
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
    </div>
  );
}

export default App;
