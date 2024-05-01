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
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
            <div className="col">
              <a href="">
                <div className="card">
                  <div className="card-image">
                    <img src={imageOne} alt="" className="img-fluid" />
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      Nakshatra Technohub
                    </p>
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
                    <p className="mb-0">
                      Nakshatra Technohub
                    </p>
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
                    <p className="mb-0">
                      Nakshatra Technohub
                    </p>
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
                    <p className="mb-0">
                      Nakshatra Technohub
                    </p>
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
                    <p className="mb-0">
                      Nakshatra Technohub
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
