import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest , NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()

export async function POST(request){
    try{
        const reqBody = await request.json();
        const { email,password } = reqBody;

        // Check if user exists or not 

        const user = await User.findOne({email});
        
        if(!user){
            return NextResponse.json({error:"User does not exists!"},{status:400})
        }
        
        // Check if Password is Correct
        
        const validPass = await bcryptjs.compare(password,user.password);
        
        if(!validPass){
            return NextResponse.json({error:"Invalid Password!"},{status:400})
        }

        // Create token data

        const tokenData = {
            id : user._id,
            email : user.email,
            name : user.firstname
        }

        // Create token 

        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn: "1d"})

        const response = NextResponse.json({
            message:"Login Successful",
            success : true,
        })

        response.cookies.set("token",token,{
            httpOnly:true
        })

        return response;

    }catch(error){
        return NextResponse.json({error:error.message},{status:500})
    }
}