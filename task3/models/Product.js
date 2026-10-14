import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:String,
    price:Number,
    category:String,
    stock:Number
},{timestamps:true})

export default mongoose.model('Product', productSchema)