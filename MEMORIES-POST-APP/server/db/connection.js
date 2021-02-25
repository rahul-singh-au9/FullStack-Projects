// SETTING THE CONNECTION TO MONGODB
const mongoose = require("mongoose");
const PORT = 3001;
const dotenv = require("dotenv");
dotenv.config();

// CONNECTING TO MONGO CLOUD
mongoose.connect(process.env.CONNECTION_URL,{
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