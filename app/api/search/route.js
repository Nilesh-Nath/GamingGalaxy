import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request) {
    // Connect to the database
    
    try {
        // Create a URL object from the request URL string
        const url = new URL(request.url);
        const letter = url.searchParams.get('query');

        // Construct a regular expression pattern to match each letter of the search query in sequence
        const regexPattern = letter.split('').map(letter => `(?=.*${letter})`).join('');
        
        // Use the constructed pattern to perform a search
        const products = await Product.find({ name: { $regex: new RegExp(regexPattern, 'i') } });
        return NextResponse.json({products});
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500});
    }
}
