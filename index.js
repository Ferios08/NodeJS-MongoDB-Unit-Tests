// Importing Modules
var express = require("express")
const database = require('./libs/database');
const bodyParser = require("body-parser");

// Defining Vars
const URL = "localhost"
const port = process.env.PORT || "3000";

// App Config
const app = express();
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

// Routes
app.get("/",(req,res)=>{
    res.status(200).send("hello world");
})
const userRoutes = require("./routes/userAPI");
app.use('/', userRoutes(database));



// Server Activation
app.listen(port, ()=>{
    console.log(`server is listening on ${URL}:${port}`);
});
module.exports = app;

