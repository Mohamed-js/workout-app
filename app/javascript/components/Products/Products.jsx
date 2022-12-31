import React, { useEffect, useState } from "react";
const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("/products").then((data) => setProducts(JSON.parse(data)));
  }, []);
  return (
    <>
      <h1>Products</h1>
      {products && (
        <div>
          {products.map((product) => {
            return (
              <div style={{ display: "flex" }}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Products;
