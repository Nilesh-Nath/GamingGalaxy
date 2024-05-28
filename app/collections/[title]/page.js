'use client'

import Card from "@/app/components/Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";

function Page({searchParams}) {
    const [products,setProducts]  = useState([]);

    useEffect(()=>{
        getData(searchParams.type);
    },[searchParams.type])

    async function getData(type){
        try{
            if(type == "All_Collections"){
                const response = await axios.get("/api/product");
                setProducts(response.data.products);
                
            }else{
                const response = await axios.get(`/api/category?type=${type}`);
                setProducts(response.data.products);
            }
        }catch(error){
            console.log(error.response.data.error);
        }
    }

    return (
        <div className="bg-black text-white">
            <div className="w-4/5 m-auto py-10">
                <h2 className="text-2xl font-bold my-5">{searchParams.type}</h2>
               <div className="flex flex-wrap justify-around">
                    {products.map((product,index) => (
                        <Card key={index} productInfo={product} />
                    ))}
               </div>
            </div>
        </div>
    );
}

// Export your component
export default Page;
