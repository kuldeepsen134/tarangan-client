import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/slice/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      full_name: "",
      mobile: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(4, "Atleast 4 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Please provide your full name."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please provide your email."),
      password: Yup.string()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, {
          message: "Please create a stronger password",
        })
        .required("Please provide your password."),
      mobile: Yup.string().required("Please provide your mobile."),
    }),

    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
    },
  });

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form
                      onSubmit={formik.handleSubmit}
                      className="mx-1 mx-md-4"
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div
                          data-mdb-input-init=""
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="text"
                            className="form-control"
                            name="full_name"
                            onChange={formik.handleChange}
                            value={formik.values.full_name}
                            placeholder=" Your Full Name"
                            onBlur={formik.handleBlur}
                          />
                        </div>
                      </div>
                      <div className="errorMessage text-danger ">
                        {formik.touched.full_name && formik.errors.full_name ? (
                          <div>{formik.errors.full_name}</div>
                        ) : null}
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div
                          data-mdb-input-init=""
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="email"
                            className="form-control"
                            placeholder=" Your Email"
                            onBlur={formik.handleBlur}
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />
                        </div>
                      </div>
                      <div className="errorMessage text-danger">
                        {formik.touched.email && formik.errors.email ? (
                          <div>{formik.errors.email}</div>
                        ) : null}
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div
                          data-mdb-input-init=""
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Moible"
                            onBlur={formik.handleBlur}
                            name="mobile"
                            onChange={formik.handleChange}
                            value={formik.values.mobile}
                          />
                        </div>
                      </div>
                      <div className="errorMessage text-danger">
                        {formik.touched.mobile && formik.errors.mobile ? (
                          <div>{formik.errors.mobile}</div>
                        ) : null}
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div
                          data-mdb-input-init=""
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                          />
                        </div>
                      </div>
                      <div className="errorMessage text-danger">
                        {formik.touched.password && formik.errors.password ? (
                          <div>{formik.errors.password}</div>
                        ) : null}
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
                          type="submit"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="SampleImage"
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

export default SignUp;
