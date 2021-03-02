const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const sercet = "this is a super sercet key for hashing";

const signup = async (req, res) => {

  const {firstName, lastName, email, password } = req.body;

  try{

    const oldUser = await userModel.findOne({email});

    if(oldUser) {
      return res.status(400).json({message: "User already Exists!"})
    };

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userModel.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`
    });

    const token = jwt.sign({email: result.email, id: result._id}, sercet, {expiresIn: "1h"});

    res.status(201).json({result, token});

  }catch(err){

    res.status(500).json({message: "Something went wrong!"});

    console.log(err);
  }
};


const signin = async (req, res) => {

  const {email, password } = req.body;

  try {

    const oldUser = await userModel.findOne({ email });

    if(!oldUser){
      return res.status(404).json({message: "User doesn't exist"})
    };

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if(!isPasswordCorrect){
      return res.status(400).json({message: "Invalid Credentials"})
    };

    const token = jwt.sign({
      email: oldUser.email,
      id: oldUser._id
    }, sercet, {expiresIn: "1h"});

    res.status(200).json({result: oldUser, token})
    
  } catch (error) {

    res.status(500).json({message: "Something went wrong!"});
    
  }

}

module.exports = {signup, signin};