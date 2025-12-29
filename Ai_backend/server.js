const express = require("express")
const cors = require("cors")
require("dotenv").config();
const { Assistant } = require("./assistant/googleai");

const app = express()


app.use(express.json())
app.use(cors())
const assistant = new Assistant();


app.post("/api/chat", async (req, res) => {
  const { content } = req.body;

  if (!content) {
     res.send("Message is required");
  }

  try {
    const reply = await assistant.chat(content);
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.json({status:false,
        message:error
    })
  }
});

app.listen("1321",()=>{
    console.log("Started")
})