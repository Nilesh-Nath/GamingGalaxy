import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/products";
import User from "@/models/userModel";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request){
    try{
        const cookiesStore = cookies();
        const token = cookiesStore.get('token');
        const tokenValue = token.value;
        const decodedToken = jwtDecode(tokenValue);
        const email = decodedToken.email;
        const id = decodedToken.id;
        const reqBody = await request.json();
        const { _id ,name , type , price , image } = reqBody;
        const productId = _id;
        const user = await User.findOne({email});

        if(!user){
            return NextResponse.json({error:"User not found!"},{status:404});
        }

        const item = user.wishlist.find(item =>item.name === name)
        if(item){
            return NextResponse.json({error:"Product already in the wishlist !"},{status:400});
        }

        user.wishlist.push({ productId,name,type,price,image });
        await user.save();

        return NextResponse.json({message:"Product Added to wishlist!"},{status:200})
    }catch(error){
        return NextResponse.json({error:error.message},{status:500})
    }
}

export async function GET(request){
    try{
        const cookiesStore = cookies();
        const token = cookiesStore.get('token');
        const tokenValue = token.value;
        const decodedToken = jwtDecode(tokenValue);
        const email = decodedToken.email;
        const userId = decodedToken.id;
        const user = await User.findById(userId).populate('wishlist.productId');
        if(!user){
            return NextResponse.json({error:"User not found!"},{status:404});
        }

        return NextResponse.json({data:user.wishlist});

    }catch(error){
        return NextResponse.json({error:error.message},{status:500});
    }
}

export async function DELETE(request){
    try{
        const cookiesStore = cookies();
        const token = cookiesStore.get('token');
        const tokenValue = token.value;
        const decodedToken = jwtDecode(tokenValue);
        const id = decodedToken.id;

        const user = await User.findById(id);

        if(!user){
            return NextResponse.json({error:"User not found!"},{status:400});
        }

        user.wishlist = [];
        await user.save();

        return NextResponse.json({message:"Products Remove from wishlist!"},{status:200});

    }catch(error){
        return NextResponse.json({error:error.message},{status:500});
    }
}