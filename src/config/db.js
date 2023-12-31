const mongoose = require("mongoose");
const { mongodbUrl } = require("../secret");

const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(mongodbUrl, options);
    console.log("Connnection to DB is successfully established");

    mongoose.connection.on("error", (error) => {
      console.error("DB connection error: ", error);
    });
  } catch (error) {
    console.error("Could not conect to DB: ", error.toString());
  }
};

module.exports = connectDB;
