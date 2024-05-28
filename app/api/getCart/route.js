import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/products";
import User from "@/models/userModel";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request){
    try{
        const cookieStore = cookies();
        const token = cookieStore.get('token');
        const tokenValue = token.value;
        const decodedTokenValue = jwtDecode(tokenValue);
        const userId = decodedTokenValue.id;

        const user = await User.findById(userId).populate('cart.productId');

        if(!user){
            return NextResponse.json({error:"User not found!"},{status:404});
        }

        return NextResponse.json({data:user.cart},{status:200});
    }catch(error){
        return NextResponse.json({error:error.message},{status:500})
    }
}