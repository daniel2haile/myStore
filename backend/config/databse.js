const mongoose = require("mongoose");
require("dotenv").config();

const myDatabaseMmongoServer = () => {
  mongoose
    .set("strictQuery", false)
    .connect(process.env.STORE_DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database is successfully connected..."))
    .catch((err) => {
      console.log("Database is NOT connected...", err.message);
    });
};

module.exports = myDatabaseMmongoServer;
