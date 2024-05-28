import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request){
    try{
        const cookiesStore = cookies();
        const token = cookiesStore.get('token');
        const tokenValue = token.value;
        const decodedToken = jwtDecode(tokenValue);
        const id = decodedToken.id;
        const email = decodedToken.email;
        const name = decodedToken.name;

        const userData = {
            id : id,
            email : email,
            name : name
        }
        
        return NextResponse.json({userData});
    }catch(error){
        return NextResponse.json({error:error.message},{status:500});
    }
}