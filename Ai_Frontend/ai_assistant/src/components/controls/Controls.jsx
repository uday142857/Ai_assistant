import React, { useState } from "react";
import "./Controls.css";

function Controls({ onSend }) {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  function handleContentChange(event) {
    setContent(event.target.value);
  }
  function handleTopicChange() {
    setTopic(event.target.value);
  }

  function handleContentSend() {
    if (topic.trim() && content.trim()) {
      onSend({ topic, question: content });
      setContent("");
    }
  }

  function handleEnterPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleContentSend();
    }
  }
  return (
    <div className="control">
      <div>
        <label>Topic : </label>
        <input
          type="text"
          value={topic}
          className="topicContainer"
          placeholder="Enter Your Topic"
          onChange={handleTopicChange}
        />
      </div>
      <div className="control2">
        <label>Question: </label>
        <div className="textAreaContainer">
          <textarea
            className="textarea"
            placeholder="Message AI Chatbot"
            value={content}
            onChange={handleContentChange}
            onKeyDown={handleEnterPress}
          />
        </div>
        <button className="button" onClick={handleContentSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Controls;
