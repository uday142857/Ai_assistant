import React from "react";
import Markdown from "react-markdown";
import "./Chat.css";


function Chat({ messages }) {
  return (
    <div className="chat">
      {messages.map(({ role, content }, index) => (
        <div key={index} className="message" data-role={role}>
          <Markdown >{content}</Markdown>
        </div>
      ))}
    </div>
  );
}

export default Chat;
