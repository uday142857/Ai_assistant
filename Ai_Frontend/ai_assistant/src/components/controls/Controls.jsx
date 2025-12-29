import React, { useState } from 'react'
import "./Controls.css"

function Controls({onSend}) {

  const [content,setContent] = useState("")

   function handleContentChange(event) {
     setContent(event.target.value);
   }

   function handleContentSend() {
     if (content.length > 0) {
       onSend(content);
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
          className="topicContainer"
          placeholder="Enter Your Topic"
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

export default Controls