import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/products";
import User from "@/models/userModel";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request){
    try{
        const cookieStore = cookies();
        const token = cookieStore.get('token');
        const tokenValue = token.value;
        const decodedTokenValue = jwtDecode(tokenValue);
        const userId = decodedTokenValue.id;
        const email = decodedTokenValue.email;
        const reqBody = await request.json();
        const { _id ,name , type , price , image } = reqBody;
        const productId = _id;

        // Check user

        const user = await User.findOne({email});

        if(!user){
            return NextResponse.json({error:"User not found!"},{status:404});
        }

        const item = user.cart.find(cartItem=>cartItem.name === name);

        if(item){
            return NextResponse.json({error:"Product already in the cart ! If you wanna increase the number please go to cart section!"},{status:400});
        }

        // Add to cart
        user.cart.push({productId,name,type,price,image});
        await user.save();

        return NextResponse.json({message:"Item added in Cart!"},{status:200});
    }catch(error){
        return NextResponse.json({error:error.message},{status:500});
    }
}