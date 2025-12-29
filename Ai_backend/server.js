require("dotenv").config(); 

const express = require("express");
const cors = require("cors");
const { Assistant } = require("./assistant/googleai");

const app = express();

app.use(express.json());
app.use(cors());

const assistant = new Assistant();

app.post("/api/chat", async (req, res) => {
  const { content } = req.body;

  // if (!content) {
  //   return res.status(400).json({ error: "Message is required" });
  // }

  try {
    const reply = await assistant.chat(content);
    res.json({ reply });
  } catch (error) {
    console.error("Backend Error:", error);
    
    res.json({status:false,
      error:error
    })
  }
});

app.listen(1321, () => {
  console.log("Started");
});
