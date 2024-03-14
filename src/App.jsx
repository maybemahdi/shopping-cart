import { useState } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import React from "react";
import { Icons, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const handleCart = (product) => {
    const isExist = cart.find((pd) => pd === product);
    if (!isExist) {
      toast.success("Product Added to Cart");
      setCart([...cart, product]);
    } else {
      toast.error("Product Already Exist in Cart");
    }
  };
  const handleRemoveCart = (id) => {
    toast.warn("Product Removed from Cart");
    const remainingCart = cart.filter((product) => product.id !== id);
    setCart(remainingCart);
  };
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold underline">
        Shopping Cart
      </h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="basis-3/4">
          <Products handleCart={handleCart}></Products>
        </div>
        <div className="basis-1/4">
          <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
