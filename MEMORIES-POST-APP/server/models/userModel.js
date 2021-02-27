const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },

    email: {
    type: String,
    required: true,
    unique: [true,"Email is already registered"],
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Please enter a valid Email !")
      }
    }
  },

  password: {
    type: String,
    required: true,
    trim: true
  },

  id:{
    type: String,
  }

});

// MODEL
// we will create a new collection
const User = new mongoose.model("User", userSchema);

// export User to other files
module.exports = User;