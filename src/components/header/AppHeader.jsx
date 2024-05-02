import React from "react";
import { logo } from "../../images";

const AppHeader = () => {
  return (
    <>
      <header>
        <div className="main-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-2">
                <a href="/" className="d-inline-block">
                  <img src={logo} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="col-10">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Tarangan Solutions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Tarangan Gadgets
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Hobelf printing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Software products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Dedicated Resources
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/products" className="nav-link">
                      E-Commerce
                    </a>
                  </li>
                  {/* <li className="nav-item"><a href="#" className="nav-link"><img src={cart} alt="" className="img-fluid"/></a></li> */}
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown button
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="/login">
                          Login
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/signUp">
                          Register
                        </a>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
