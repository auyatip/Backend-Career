const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "My server",
  });
});
//ต่อ db ใน config
connectDB();

//IMPORT ROUTES
const userRoute = require("./routes/userRoute");

//MIDDLE WAREs
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
