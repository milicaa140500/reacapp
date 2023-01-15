import React from "react";
import OneLaptop from "./OneLaptop";
import { useState } from "react";

const Laptops = ({
  /*products,*/
  onAdd,
  output,
}) => {
  const [sort, setSort] =
    useState(true);
  function sortiranje() {
    setSort(!sort);
  }
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <button
              class="btn btn-default"
              onClick={sortiranje}
              style={{
                marginTop: "10px",
                color: "#d966ff",
              }}
            >
              Kliknite da sortirate
              proizvode!
            </button>
          </div>
        </div>
      </div>
      <div className="okvir">
        {sort === true ? (
          <>
            {output
              .sort((a, b) =>
                a.title < b.title
                  ? -1
                  : 1
              )
              .map((prod) => (
                <OneLaptop
                  product={prod}
                  key={prod.id}
                  onAdd={onAdd}
                  inCart={1}
                />
              ))}
          </>
        ) : (
          <>
            {output
              .sort((a, b) =>
                a.title < b.title
                  ? 1
                  : -1
              )
              .map((prod) => (
                <OneLaptop
                  product={prod}
                  key={prod.id}
                  onAdd={onAdd}
                  inCart={1}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Laptops;