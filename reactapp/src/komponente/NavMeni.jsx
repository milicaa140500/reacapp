import React from "react";
import { BiLaptop } from "react-icons/bi";
import { MdHeadphones } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";

const NavMeni = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow stick-top"
      style={{
        backgroundColor: "#e6b3ff",
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          style={{
            fontStyle: "italic",
          }}
          href="#"
        >
          Laptop računari i oprema
        </a>
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
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Početna
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                Login
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Proizvodi
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    <BiLaptop />
                    Laptopovi
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  ></a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    <MdHeadphones />
                    Oprema
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                <BsCart4 />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                <div className="num">
                  0
                </div>
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
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