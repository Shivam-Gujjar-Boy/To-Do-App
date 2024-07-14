const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Dataase Connection is successful"))
    .catch((error) => {
      console.log("Error connecting to Database");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
