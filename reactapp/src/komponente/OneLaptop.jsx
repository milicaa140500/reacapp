import React from "react";

const OneLaptop = ({
  product,
  onAdd,
  inCart,
}) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
      }}
    >
      <img
        src={product.img}
        className="card-img-top"
        alt="Neka slika"
      />
      <div className="card-body">
        <h5 className="card-title">
          {product.title}
        </h5>
        {inCart === 1 ? (
          <p className="card-text">
            {product.description}
          </p>
        ) : (
          <></>
        )}
        <div className="price">
          {product.price}
        </div>
        {inCart === 1 ? (
          <a
            href="#"
            className="btn d-grid"
            style={{
              background: "#e6b3ff",
            }}
            onClick={() =>
              onAdd(product.id)
            }
          >
            Dodajte u korpu
          </a>
        ) : (
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Količina: {product.amount}
          </div>
        )}
      </div>
    </div>
  );
};

export default OneLaptop;