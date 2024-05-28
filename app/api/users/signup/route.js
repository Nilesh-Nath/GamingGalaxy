import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest , NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export async function POST(request){
    try{
        const reqBody = await request.json();
        const { firstname,lastname,email,password } = reqBody;

        if (!validateEmail(email)) {
            return NextResponse.json({ error: "Invalid email format !" }, { status: 400 });
        }
        
        if(password.length < 8){
            return NextResponse.json({error:"Password should be atleast 8 digits long !"},{status:400});
        }

        // Check if user already exists

        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({error:"User already exists !"},{status:400});
        }

        // Hash Password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword  = await bcryptjs.hash(password,salt)

        const newUser = new User({
            firstname,
            lastname,
            email,
            password:hashedPassword
        })

        const savedUser = await newUser.save();

        const responseData = {
            message: "User Created successfully"
        };

        return NextResponse.json(responseData);

    }catch(error){
        return NextResponse.json({error: error.message},{status:500})
    }
}