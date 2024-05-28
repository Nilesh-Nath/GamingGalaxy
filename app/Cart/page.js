"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Cart= ()=> {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    calculateInitialSubtotal();
  }, [products]);

  async function getData() {
    setLoading(true);
    try {
      const response = await axios.get('/api/getCart');
      setProducts(response.data.data.map((product) => ({ ...product, quantity: 1 })));
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  const updateQuantity = (index, newQuantity) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = newQuantity;
    setProducts(updatedProducts);
  };

  const calculateSubtotal = (updatedProducts) => {
    let total = 0;
    updatedProducts.forEach((product) => {
      total += product.productId.price * product.quantity;
    });
    setSubtotal(total);
  };

  const calculateInitialSubtotal = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.productId.price * product.quantity;
    });
    setSubtotal(total);
  };

  const decreaseQuantity = (index) => {
    if (products[index].quantity > 1) {
      const newQuantity = products[index].quantity - 1;
      updateQuantity(index, newQuantity);
      calculateSubtotal(products);
    }
  };

  const increaseQuantity = (index) => {
    const newQuantity = products[index].quantity + 1;
    updateQuantity(index, newQuantity);
    calculateSubtotal(products);
  };

  async function removeItem(data) {
    try {
      const response = await axios.delete('/api/removeCartItems', { data });
      toast.success(response.data.message);
      getData(); // Refresh cart data after removing item
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error.response.data.error);
    }
  }

  async function clearAll() {
    try {
      const response = await axios.delete('/api/cartDelete');
      toast.success(response.data.message);
      setProducts([]); // Clear products after successful deletion
      setSubtotal(0); // Reset subtotal
    } catch (error) {
      console.log(error);
    }
  }

  function handleCheckout() {
    try {
      if (subtotal) {
        router.push(`/checkout?price=${subtotal}`);
      }
    } catch (error) {
      console.log(error);
    }
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
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <div className="w-4/5 m-auto flex items-center pb-28">
        <div className="w-10/12 mr-10">
          <div className="w-1/2 flex items-center mb-5 mt-20">
            <IoIosArrowRoundBack className="border rounded-full p-2 mr-4 cursor-pointer" style={{ fontSize: '40px' }} />
            <span className="text-gray-400 font-semibold text-xs">Continue Shopping</span>
          </div>
          <h1 className="text-3xl font-bold mb-10">Your Cart</h1>
          {loading ? (
            <>Loading....</>
          ) : (
            <table className="w-full text-center text-xs text-gray-500 font-bold">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-gray-400 font-bold text-sm">IMAGE</th>
                  <th className="text-gray-400 font-bold text-sm">NAME</th>
                  <th className="text-gray-400 font-bold text-sm">PRICE</th>
                  <th className="text-gray-400 font-bold text-sm">QUANTITY</th>
                  <th className="text-gray-400 font-bold text-sm">TOTAL</th>
                  <th className="text-gray-400 font-bold text-sm">Remove</th>
                </tr>
              </thead>
              <tbody>
                {products.map((data, index) => (
                  <tr key={index} className="border-b-2 border-gray-200">
                    <td><img className="w-28" src={data.productId.image} alt="Item" /></td>
                    <td>{data.productId.name}</td>
                    <td>{data.productId.price}<span> NRS</span></td>
                    <td className="flex items-center justify-around mt-10 text-lg">
                      <span className="cursor-pointer text-lg" onClick={() => decreaseQuantity(index)}>-</span>
                      {data.quantity}
                      <span className="cursor-pointer text-lg" onClick={() => increaseQuantity(index)}>+</span>
                    </td>
                    <td>{data.productId.price * data.quantity}<span> NRS</span></td>
                    <td className="flex justify-center items-center"><span onClick={() => removeItem(data)}><AiFillDelete className="hover:text-red-500 cursor-pointer" size={20} /></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button onClick={clearAll} className="flex items-center py-3 px-4 border border-purple-800 text-white w-24 font-bold bg-purple-800 rounded-tr-2xl rounded-bl-2xl mt-10 mr-4 text-sm hover:bg-transparent hover:border hover:text-purple-800 hover:border-purple-800">Clear All</button>
        </div>
        <div className="border rounded-tr-xl rounded-bl-xl p-5 flex flex-col h-fit items-center">
          <h3 className="text-2xl font-bold text-gray-400 mb-4">Subtotal</h3>
          <span className="text-purple-500 text-xl mb-2">{subtotal} NRS</span>
          <span className="text-gray-400 text-xs text-center mb-4">Taxes and shipping calculated at checkout</span>
          <button onClick={handleCheckout} className="rounded-tr-xl rounded-bl-xl px-5 py-2 text-white bg-purple-500/90 text-sm font-bold">Proceed to checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
