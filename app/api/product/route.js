import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/products";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function POST(request){
   try{
    const reqBody = await request.json();
    const { name,type,description,price,image } = reqBody;
    
    const product = await Product.findOne({name});

    if(product){
        return NextResponse.json({error:"Product already exists!"},{status:400});
    }

    const newProduct = new Product({
        name,
        type,
        description,
        price,
        image
    });

    const savedProduct = await newProduct.save();

    return NextResponse.json({message:"Product added!"});

   }catch(error){
    return NextResponse.json({error:error.message},{status:500});
   }
}

export async function GET(request){
    try{
        const products = await Product.find();

        return NextResponse.json({products});
    }catch(error){
        return NextResponse.json({error:error.message},{status:500});
    }
}
