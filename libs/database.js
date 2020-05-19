// Defining Vars
const mongoose = require("mongoose");

const {
    MONGO_URL,
    MONGO_DB,
    MONGO_USER,
    MONGO_PASS,
} = process.env;

const DBHost = `${MONGO_USER}:${MONGO_PASS}@${MONGO_URL}/${MONGO_DB}`;
// Sometimes you will be needing this! ?authSource=admin

//Database Connection
mongoose.connect(`mongodb://${DBHost}`, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("database connected");
});
mongoose.connection.on("error", () => {
    console.log("error connecting to database");
});

console.log(process.env)
module.exports = mongoose