import React from "react";
import "./Chat.css";

const messages =[ {
  role: "assistant",
  content: "Hello! How can I assist you right now?",
}];

function Chat({messages}) {
  return (
    <div className="chat">
      {messages.map(({ role, content }, index) => (
        <div key={index} className="message" data-role={role}>
          {content}
        </div>
      ))}
    </div>
  );
}

export default Chat;
