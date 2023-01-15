import React from "react";

const OneLaptop = () => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
      }}
    >
      <img
        src="https://img.gigatron.rs/img/products/large/image6135e0e9b547f.png"
        className="card-img-top"
        alt="Neka slika"
      />
      <div className="card-body">
        <h5 className="card-title">
          Card title
        </h5>
        <p className="card-text">
          Some quick example text to
          build on the card title and
          make up the bulk of the card's
          content.
        </p>
        <a
          href="#"
          className="btn d-grid"
          style={{
            background: "#e6b3ff",
          }}
        >
          Dodajte u korpu
        </a>
      </div>
    </div>
  );
};

export default OneLaptop;