import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/products";
import User from "@/models/userModel";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request){
    try{
        const cookiesStore = cookies();
        const token = cookiesStore.get('token');
        const tokenValue = token.value;
        const decodedToken = jwtDecode(tokenValue);
        const id = decodedToken.id;
        const email = decodedToken.email;

        const user = await User.findOne({email});

        if(!user){
            return NextResponse.json({error:"User not found!"},{status:500});
        }

        user.cart = [];
        await user.save();

        return NextResponse.json({message:"Cart cleared successfully , please refresh!"},{status:200});
    }catch(error){
        return NextResponse.json({error:error.message},{status:500});
    }
}