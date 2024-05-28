import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide product's name!"]
    },
    type: {
        type: String,
        required: [true, "Please provide product's type!"]
    },
    description: {
        type: String,
        required: [true, "Please provide product's description!"]
    },
    price: {
        type: Number,
        required: [true, "Please provide product's price!"]
    },
    image: {
        type: String,
        required: [true, "Please provide product's image!"]
    }
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
