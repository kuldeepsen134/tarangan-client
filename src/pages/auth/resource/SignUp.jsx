import React, { useState } from "react";

const ResourceLSignUp = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <div className="form-outline mb-4">
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value="customer"
                          onChange={handleOptionChange}
                        />
                        <label
                          className="form-check-label ps-2"
                          htmlFor="flexRadioDefault1"
                        >
                          Customer
                        </label>
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          value="agency"
                          onChange={handleOptionChange}
                        />
                        <label
                          className="form-check-label ps-2"
                          htmlFor="flexRadioDefault2"
                        >
                          Agency
                        </label>
                      </div>
                    </div>

                    {selectedOption === "customer" ? (
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          ></div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              placeholder=" Your Name"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder=" Your Email"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="mobile"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Moible"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              placeholder="Repeat your password"
                            />
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    ) : (
                      <form className="mx-1 mx-md-4">
                        <div className="row align-items-center mb-4">
                          <div className="col-sm-6 ps-0">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                placeholder=" Company Name"
                              />
                            </div>
                          </div>

                          <div className="col-sm-6 ps-0">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                placeholder=" Company Website URL"
                              />
                            </div>
                          </div>

                          <div className="col-sm-6 ps-0">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                placeholder=" Primary contact Name"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 ps-0">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                placeholder="Designation"
                              />
                            </div>
                          </div>

                          <div className="col-sm-6 ps-0">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                placeholder=" Company LinkedIn URL"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 ps-0">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                placeholder="Employee count on Linkedin as of now"
                              />
                            </div>
                          </div>

                          <div className="col-sm-6 ps-0">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                placeholder=" Company Email"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 ps-0">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="mobile"
                                id="form3Example3c"
                                className="form-control"
                                placeholder="Company Moible"
                              />
                            </div>
                          </div>

                          <div className="col-sm-6 ps-0">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                                placeholder="Set Password"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 ps-0">
                            <i className="fas fa-key fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
                                placeholder="Repeat your password"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                  <div className="col-md-8 col-lg-4 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sampleimage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceLSignUp;
