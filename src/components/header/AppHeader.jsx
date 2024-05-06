import React from "react";
import { logo } from "../../images";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const AppHeader = () => {
  return (
    <>
      {/* <header>
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <a
                      href="mailto:info@nakshatratechnohub.com"
                      className="nav-link"
                    >
                      info@nakshatratechnohub.com
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="tel:+91 8482925926" className="nav-link">
                      +91 8482925926
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
                    <a href="/" className="nav-link">
                      Tarangan Gadgets
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Hobelf printing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Software products
                    </a>
                  </li>

                  <li className="nav-item">
                    <div className="dropdown">
                      <div
                        className=" dropdown-toggle"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dedicated Resources
                      </div>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="/resourceLogin">
                            Login
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/resourceSignUp">
                            Register
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a href="/products" className="nav-link">
                      E-Commerce
                    </a>
                  </li>
                  <li className="nav-item">
                    <div className="dropdown">
                      <div
                        className=" dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown button
                      </div>
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <header>
        <div className="top-header">
          <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <div className="col-2">
                  <a href="/" className="d-inline-block">
                    <img src={logo} alt="" className="img-fluid" />
                  </a>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                    <li className="nav-item">
                      <a className=""  href="/">
                        <FaRegHeart />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/cart">
                        <BsCart3 />
                      </a>
                    </li>

                    <li className="nav-item">
                      <div className="dropdown">
                        <div
						className="custom-drop"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <FaRegUser />
                        </div>
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
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
