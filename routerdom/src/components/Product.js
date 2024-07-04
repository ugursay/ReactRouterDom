import React from "react";

function Product({ productData }) {
  const { id, name, price } = productData;
  return (
    <div style={{ marginBottom: "10px", backgroundColor: "yellow" }}>
      <div>Ürün Detayı</div>
      <h3>İsim: {name}</h3>
      <h3>İsim: {price}</h3>
    </div>
  );
}

export default Product;
