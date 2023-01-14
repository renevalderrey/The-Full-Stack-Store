const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGODB_URI;

// const password = "holapepe";
// const dbname = "Ecommerce"
// const uri = `mongodb+srv://newStore:${password}@cluster0.phfwwtv.mongodb.net/${dbname}?retryWrites=true&w=majority`

const connection = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(URI);
};


    
    

module.exports = connection

module.exports = connection;
