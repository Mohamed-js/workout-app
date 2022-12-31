import React, { useState } from "react";

const NewProduct = () => {
  const [product, setProduct] = useState({});

  return (
    <>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input
          name="name"
          placeholder="Name"
          type="text"
          onChange={(e) => handleChange(e)}
        />
        <label for="price">Price</label>
        <input
          name="price"
          placeholder="Price"
          type="text"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </>
  );

  function handleChange(e) {
    setProduct({
      product: {
        ...product.product,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleSubmit(e) {
    e.target.preventDefault();
    fetch("/products/create", {
      method: "POST",
      body: JSON.stringify(product),
    });
  }
};

export default NewProduct;
