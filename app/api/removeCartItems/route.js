import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/products";
import User from "@/models/userModel";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request){
    try{
        const cookieStore = cookies();
        const token = cookieStore.get('token');
        const tokenValue = token.value;
        const decodedToken = jwtDecode(tokenValue);
        const userId = decodedToken.id;
        
        const { productId } = await request.json();

        const name = productId.name;

        const user = await User.findById(userId);

        if(!user){
            return NextResponse.json({error:"User not found!"},{status:404});
        }

        user.cart.pull({productId});
        await user.save();

        return NextResponse.json({message:"Item Removed successfully! Refresh!"},{status:200});
    }catch(error){
        return NextResponse.json({error:error.message},{status:500});
    }
}