import mongoose from "mongoose";
import Product from "@/models/products";
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse,NextRequest } from "next/server";

connect();

export async function GET(request){
    try{
        const queryParams = new URLSearchParams(request.url.split('?')[1]); // Parse query parameters from the URL
        const type = queryParams.get('type'); // Retrieve the 'type' parameter
        const products = await Product.find({type});

        return NextResponse.json({products})
        
    }catch(error){
        console.error("Error fetching products :",error);
        return NextResponse.json({error:error.message},{status:500});
    }
}