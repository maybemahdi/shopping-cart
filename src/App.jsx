import { useState } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  const [cart, setCart] = useState([]);
  const handleCart = (product) => {
    setCart([...cart, product]);
  };
  const handleRemoveCart = (id) => {
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
