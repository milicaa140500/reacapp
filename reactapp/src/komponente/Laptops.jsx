import React from "react";
import OneLaptop from "./OneLaptop";

const Laptops = ({
  products,
  onAdd,
}) => {
  return (
    <div className="okvir">
  {products.map((prod) => (
        <OneLaptop
          product={prod}
          key={prod.id}
          onAdd={onAdd}
          inCart={1}
        />
      ))}
    </div>
  );
};

export default Laptops;