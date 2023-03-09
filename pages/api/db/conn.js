const mongoose = require("mongoose");

//percent encode password

const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);
const dbUsername = process.env.DB_USERNAME;

//string connection
const uri =
  "mongodb+srv://" +
  dbUsername +
  ":" +
  dbPassword +
  "@cluster0.vv5we.mongodb.net/stk-mongo?retryWrites=true&w=majority";

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database");
  }
}

module.exports = main;
