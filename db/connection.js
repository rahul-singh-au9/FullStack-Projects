// SETTING THE CONNECTION TO MONGODB
const mongoose = require("mongoose");
const PORT = 3001;
const dotenv = require("dotenv");
dotenv.config();

CONNECTION_URL = "mongodb+srv://rahulsg1:Rahul@123@cluster0.wqmoi.mongodb.net/MYcoupon?retryWrites=true&w=majority";

// CONNECTING TO MONGO CLOUD
mongoose.connect(CONNECTION_URL,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => {
  console.log(`Server running on port: http://localhost:${PORT}`)
})
.catch((err) => {
  console.log(`${err} did not connect`)
});
