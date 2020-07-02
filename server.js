const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config("config/config.env");

const app = express();

// import routes
const authRoutes = require("./routes/auth.routes");

// app middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );
}

// middleware
app.use("/api", authRoutes);

const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
