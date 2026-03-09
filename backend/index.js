require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {HoldingModel} = require("./models/holdingModel");
const {PositionsModel} = require("./models/positionModel");
const cors = require("cors");
const bodyParser = require("body-parser");
const { OrdersModel } = require("./models/orderModel");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;
const mongoUrl = process.env.MONGO_URL;

app.get("/allHoldings", async (req,res)=>{
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async (req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder",  async(req, res)=>{
    let order = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    })
    order.save();
})



app.listen(PORT, ()=> {
    console.log("Server started...")
    mongoose.connect(mongoUrl).then(console.log("mongo connected..."));
});