const mongoose = require("mongoose");
require("dotenv").config();

// const URI = process.env.MONGODB_URI;
const DB_DEPLOY = process.env.DB_DEPLOY;

const connection = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(DB_DEPLOY, {})
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
};

module.exports = connection;
