import React from "react";
import Input from "./Input";
import { useState } from "react";

const Contact = () => {
  const [prvoPolje, setprvoPolje] =
    useState(" ");
  const [drugoPolje, setdrugoPolje] =
    useState(" ");
  return (
    <div className="container-fluid text-center">
      <div className="row content">
        <div className="col-sm-2 sidenav"></div>
        <div className="col-sm-8 text-left">
          <img
            className="img-fluid"
            src="https://gigatron.rs/static/media/contact-map.2bb4c30a.png"
            alt="neka slika"
          />
          <form>
            <div className="mb-3">
              <label
                for="exampleInputEmail1"
                className="form-label"
              >
                Email adresa:
              </label>
              <br></br>
              {/*<input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />*/}
              <Input
                postaviVrednost={
                  setprvoPolje
                }
                vrednost={prvoPolje}
              />
              <div
                id="emailHelp"
                className="form-text"
              >
                Nećemo deliti vašu
                adresu sa drugim
                korisnicima.
              </div>
            </div>
            <div class="mb-3">
              <label
                for="exampleFormControlTextarea1"
                class="form-label"
              >
                Vaše pitanje:
              </label>
              <br></br>
              <Input
                vrednost={drugoPolje}
                postaviVrednost={
                  setdrugoPolje
                }
              />
            </div>
          </form>
          <hr />
          <div className="okvir">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <p>
                    {prvoPolje}
                    <br></br>
                    {drugoPolje}
                  </p>
                </div>
                <div className="modal-footer">
                  <a href="/">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Posaljite
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2 sidenav"></div>
      </div>
    </div>
  );
};

export default Contact;