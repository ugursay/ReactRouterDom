import React from "react";
import ProductCom from "../components/Product";

const productList = [
  {
    id: "1",
    name: "Laptop",
    price: "30.000",
  },
  {
    id: "2",
    name: "Oyun Konsolu",
    price: "25.000",
  },
  {
    id: "3",
    name: "Telefon",
    price: "22.000",
  },
];

function Products() {
  return (
    <div>
      {productList &&
        productList.map((productData) => {
          <ProductCom key={productData.key} productData="productData" />;
        })}
    </div>
  );
}

export default Products;
