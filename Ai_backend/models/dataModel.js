const mongoose = require("mongoose");

const studySchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    trim: true,
  },

  studentQuestion: {
    type: String,
    required: true,
  },

  aiExplanation: {
    type: String,
    required: true,
  },

  aiExample: {
    type: String,
    required: true,
  },

  aiPracticeQuestion: {
    type: String,
    required: true,
  },

  timestamps: true,
});

const studyModel =
  mongoose.models.studyQuery || mongoose.model("studyQuery", studySchema);


module.exports = studyModel;
  