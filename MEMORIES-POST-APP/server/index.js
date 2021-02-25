const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db/connection");
const postRouter = require("./routes/postRouters");

const PORT = process.env.PORT || 3001;

// Init app
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// HOMEPAGE
app.get("/", (req, res)=>{
  res.send("HOME")
})

// POST ROUTES
app.use("/posts", postRouter)

// ROUTES THAT NOT BEEN DEFINED
app.get("*", (req, res) => {
  res.send("You've tried reaching a route that doesn't exist.")
})

// CONNECTING TO THE SERVER
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`)
}
)