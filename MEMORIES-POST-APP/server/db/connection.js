// SETTING THE CONNECTION TO MONGODB
const mongoose = require("mongoose");
const PORT = 3001;

// CONNECTING TO MONGO CLOUD
const CONNECTION_URL = "mongodb+srv://rahulsg1:Rahul@123@cluster0.wqmoi.mongodb.net/memories?retryWrites=true&w=majority";


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
  console.log(err)
});