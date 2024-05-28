import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please provide name!"]
    },
    price:{
        type: Number,
        required : [true,"Please provide price!"]
    }
})