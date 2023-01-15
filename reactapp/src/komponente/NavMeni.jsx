import React from "react";
import { BiLaptop } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavMeni = ({
  cartNum,
  setInput,
  setSort,
}) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow stick-top"
      style={{
        backgroundColor: "#e6b3ff",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          style={{
            fontStyle: "italic",
          }}
          to="/"
        >
          Laptop računari i oprema
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Početna
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
              >
                Kontakt
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Proizvodi
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/laptops"
                  >
                    <BiLaptop />
                    Laptopovi
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/cart"
              >
                <BsCart4 />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#"
              >
                <div className="num">
                  {cartNum}
                </div>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) =>
                setInput(e.target.value)
              }
            />
            <button
              className="btn btn-outline-success"
              type="submit"
            >
              Pretražite
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavMeni;