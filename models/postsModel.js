const mongoose = require("mongoose");

// POST SCHEMA FOR VALIDATION
const postsSchema = mongoose.Schema({

  website: {
    type: String,
    required: true,
    trim: true
  },

  value: {
    type: Number,
    required: true,
    trim: true
  },

  discount: {
  type: Number,
  required: true,
  trim: true
  },

  name: {
    type: String,
  },

  creator: {
    type: String,
    required: true,
    trim: true
  },


  selectedFile: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: new Date()

  }
});

// MODEL
// we will create a new collection
const postMessage = new mongoose.model("postMessage", postsSchema);

// export postMessage to other files
module.exports = postMessage;