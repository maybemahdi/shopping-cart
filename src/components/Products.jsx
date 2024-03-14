import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const Products = ({handleCart}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);
 
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <Product key={product.id} product={product} handleCart={handleCart}></Product>
      ))}
    </div>
  );
};

Products.propTypes = {
  handleCart: PropTypes.func.isRequired,
};

export default Products;
