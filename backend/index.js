require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8000;
const mongoUrl = process.env.MONGO_URL;


app.listen(PORT, ()=> {
    console.log("Server started...")
    mongoose.connect(mongoUrl).then(console.log("mongo connected..."));
});