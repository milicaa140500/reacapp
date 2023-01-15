import React from "react";
import OneLaptop from "./OneLaptop";
const Cart = ({ products }) => {
  return (
    <div>
      <h2 className="cart-h2">
        Vaša korpa
      </h2>
      <div class="cart okvir">
        {products.map((prod) => (
          <OneLaptop
            product={prod}
            key={prod.id}
            inCart={0}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;