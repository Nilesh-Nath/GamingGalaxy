import { NextRequest,NextResponse } from "next/server";


export async function middleware(request){
    const url = request.nextUrl.pathname;
    const isPublicPath = url === '/login' || url === '/signup';

    const token = request.cookies.get('token')?.value || '';

    if(isPublicPath && token){
        return NextResponse.redirect(new URL("/",request.nextUrl));
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/login",request.nextUrl));
    }
}


export const config = {
    matcher : [
        '/',
        '/login',
        '/signup'
    ]
}