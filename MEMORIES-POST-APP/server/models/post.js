const mongoose = require("mongoose");

// POST SCHEMA FOR VALIDATION
const postSchema = mongoose.Schema({

  title: {
    type: String,
    minlength: 3,
    required: true,
    trim: true
  },

  message: {
    type: String,
    minlength: 10,
    required: true,
    trim: true
  },

  creator: {
    type: String,
    minlength: 3,
    required: true,
    trim: true
  },

  tags: [String],

  selectedFile: {
    type: String,
  },

  likeCount: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: new Date()

  }
});

// MODEL
// we will create a new collection
const postMessage = new mongoose.model("postMessage", postSchema);

// export postMessage to other files
module.exports = postMessage;