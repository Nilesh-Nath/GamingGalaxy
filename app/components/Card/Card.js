"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

function Card({ productInfo }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    id: "",
    email: "",
    name: "",
  });

  useEffect(() => {
    getServerSideProps();
  }, []);

  async function getServerSideProps() {
    try {
      const response = await axios.get("/api/getServerSideProps");
      setUser(response.data.userData);
    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/addToCart", productInfo);
      setLoading(false);
      toast.success("Item added to cart!");
    } catch (error) {
      toast.error(error.response.data.error);
      setLoading(false);
      console.error(error.response.data.error);
    }
  };

  if (!productInfo) {
    return null;
  }
  return (
    <>
      <Toaster
        position="top-left"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="p-4 bg-transparent border border-purple-500 text-white w-72 rounded-tr-2xl rounded-bl-2xl mb-4 cursor-pointer">
        <div>
          <Link
            href={{
              pathname: "/productDetails",
              query: { data: JSON.stringify(productInfo) },
            }}
          >
            <h2 className="text-2xl font-bold">{productInfo.name}</h2>
            <span className="text-sm text-gray-400">
              Type : {productInfo.type}
            </span>
            <img
              className="w-11/12 mt-4"
              src={productInfo.image}
              alt={productInfo.name}
            />
          </Link>
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">{productInfo.price} NRP</span>
            {user.id ? (
              <button
                onClick={handleClick}
                className="py-2 border border-purple-800 px-4 bg-purple-800 rounded-tr-2xl rounded-bl-2xl  hover:bg-transparent hover:border hover:border-purple-800"
              >
                {loading ? (
                  <RotatingLines
                    visible={true}
                    height="28"
                    width="28"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                ) : (
                  <>Add to cart</>
                )}
              </button>
            ) : (
              <Link
                href="/login"
                className="py-2 border border-purple-800 px-4 bg-purple-800 rounded-tr-2xl rounded-bl-2xl  hover:bg-transparent hover:border hover:border-purple-800"
              >
                {loading ? (
                  <RotatingLines
                    visible={true}
                    height="28"
                    width="28"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                ) : (
                  <>Add to cart</>
                )}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
