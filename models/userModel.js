import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true,
    },
    name:{
        type:String,
    },
    type:{
        type:String,
    },
    price:{
        type:Number,
    },
    image:{
        type:String,
    }

});

const cartSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true,
    },
    name:{
        type:String,
    },
    type:{
        type:String,
    },
    price:{
        type:Number,
    },
    image:{
        type:String,
    }
});

const userSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required:[true,"Please provide a Firstname"],
        unique: true,
    },
    lastname:{
        type: String,
        required: [true,"Please provide Lastname"],
        unique : true,
    },
    email:{
        type : String,
        required : [true, "Please provide an email"],
        unique : true,
    },
    password : {
        type : String,
        required : [true, "Please provide a password"],
    },
    isVerified : {
        type: Boolean,
        default : false,
    },
    isAdmin : {
        type : Boolean,
        default : false,
    },
    forgotPasswordToken : String,
    forgotPasswordTokenExpiry : Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    wishlist : [wishlistSchema],
    cart : [cartSchema]
})

const User = mongoose.models.User || mongoose.model("User",userSchema);

export default User;