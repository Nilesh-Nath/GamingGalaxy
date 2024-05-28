import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/products";
import User from "@/models/userModel";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse , NextRequest } from "next/server";

connect();

export async function DELETE(request){
    try{
        const cookiesStore = cookies();
        const token = cookiesStore.get('token');
        const tokenValue = token.value;
        const decodedToken = jwtDecode(tokenValue);
        const id = decodedToken.id;
        
       // Extracting encoded item string from URL
       const url = new URL(request.url, `http://${request.headers.host}`);
       const encodedItemString = url.searchParams.get('item');

       // Decoding and parsing the JSON string into an object
       const item = JSON.parse(decodeURIComponent(encodedItemString));

       const productId = item.productId;

        const user = await User.findById(id);

        if(!user){
            return NextResponse.json({error:error.message},{status:400});
        }

        user.wishlist.pull({productId});
        await user.save();
        
        return NextResponse.json({message:"Product removed from wishlist!"});
        
    }catch(error){
        return NextResponse.json({error:error.message},{status:500});
    }
}