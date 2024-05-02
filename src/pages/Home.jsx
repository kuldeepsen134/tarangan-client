import React from "react";
import { Saas1, imageOne } from "../images";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="hero-banner">
        {/* <div className="row">
          <div className="col-5">
            <h3>We create highly interactive</h3>
            <h4>
              We specialize in custom Tailored Software solutions and Building
              Innovative and Superior customer experiences for modern
              enterprises
            </h4>
            <div className="mt-4">
              <Link
                className="border p-2 rounded-pill text-decoration-none text-success border-success"
                to="#"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="col-7">
            <img src={Saas1} alt="" />
          </div>
        </div> */}

        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="main-heading">
                Nakshatra Group of <br />
                Companies <br />
                MAK Industries
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="tarangan2">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
              <div className="col">
                <a href="">
                  <div className="card">
                    <div className="card-image rounded-circle">
                      <img src={imageOne} alt="" className="img-fluid" />
                    </div>
                    <div className="card-body">
                      <p className="mb-0">Nakshatra Technohub</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col">
                <a href="">
                  <div className="card">
                    <div className="card-image">
                      <img src={imageOne} alt="" className="img-fluid" />
                    </div>
                    <div className="card-body">
                      <p className="mb-0">Nakshatra Technohub</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col">
                <a href="">
                  <div className="card">
                    <div className="card-image">
                      <img src={imageOne} alt="" className="img-fluid" />
                    </div>
                    <div className="card-body">
                      <p className="mb-0">Nakshatra Technohub</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col">
                <a href="">
                  <div className="card">
                    <div className="card-image">
                      <img src={imageOne} alt="" className="img-fluid" />
                    </div>
                    <div className="card-body">
                      <p className="mb-0">Nakshatra Technohub</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col">
                <a href="">
                  <div className="card">
                    <div className="card-image">
                      <img src={imageOne} alt="" className="img-fluid" />
                    </div>
                    <div className="card-body">
                      <p className="mb-0">Nakshatra Technohub</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="think-plan">
          <div className="container">
            <div className="text-center">
              <h1 className="">Think | Plan | Execute</h1>
              <p>
                Nakshatra group stands united since 2012 and with our tremendous
                efforts and world-class services we have achieved great success
                with quality performance. Our every enterprise has worldwide
                presence as the name Nakshatra itself defines the unity of
                universe's heavenly bodies, considering the same all our
                businesses work in a collaborative manner and become part of
                each others growth.
              </p>
            </div>
            <div className="row">
              <div className="col-3 text-center text-danger">
                <h2>10 +</h2>
                <p>Years of Experience</p>
              </div>
              <div className="col-3 text-center text-warning">
                <h2>10 +</h2>
                <p>Years of Experience</p>
              </div>
              <div className="col-3 text-center text-success">
                <h2>10 +</h2>
                <p>Years of Experience</p>
              </div>
              <div className="col-3 text-center text-primary">
                <h2>10 +</h2>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
