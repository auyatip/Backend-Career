const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`connect to mongoDB database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`mongodb can not connect ${error}`);
  }
};

module.exports = connectDB;
