// middleware --> for any kind of action that happens before something this next thing is crucial , we are saying do this and then do something next, do something after this is done .-------and that is a middleware--------

// wants to like a post--
// click the like button --> auth middleware(next) --> like controller

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const auth = async (req, res, next) => {

  try{

    const token = req.headers.authorization.split(" ")[1];

    const isCustomAuth = token.length < 500;

    let decodeData;


    if(token && isCustomAuth){
      decodeData = jwt.verify(token, process.env.SECRET);

      req.userId = decodeData?.id;

    } else{

      decodeData = jwt.decode(token);

      req.userId = decodeData?.sub;
                              // sub is simply google's name for a specific id that         differentiates every single google user
    }

    next();

  } catch(error){
    console.log(error)
  }

};

module.exports = auth;