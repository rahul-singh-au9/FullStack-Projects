const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
// require("./db/connection");
const postRouter = require("./routes/postRouters");

// Init app
const app = express();

const PORT = process.env.PORT || 3001;

const CONNECTION_URL = "mongodb+srv://rahulsg1:Rahul@123@cluster0.wqmoi.mongodb.net/memories";

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


// POST ROUTES
app.use("/posts", postRouter)


// CONNECTING TO THE SERVER
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);