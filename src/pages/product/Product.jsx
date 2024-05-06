import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="pb-5">
        <div className=" pb-5">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner  ">
              <div className="carousel-item active">
                <img
                  src="https://themes.pixelstrap.com/multikart/assets/images/home-banner/2.jpg"
                  className="d-block h-85vh w-100  "
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://themes.pixelstrap.com/multikart/assets/images/home-banner/1.jpg"
                  className="d-block h-85vh w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div className="card text-black">
              <img
                onClick={() => navigate("/products/151515")}
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
                className="card-img-top"
                alt="iPhone"
              />
              <div className="card-body">
                <div className="text-center mt-1">
                  <h4 className="card-title">iPhone X</h4>
                  <h6 className="text-primary mb-1 pb-3">Starting at $399</h6>
                </div>

                <div className="d-flex flex-row">
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary flex-fill me-1"
                    data-mdb-ripple-color="dark"
                  >
                    ADD TO CART
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-danger flex-fill ms-1"
                  >
                    WISHLIST
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div className="card text-black">
              <img
                onClick={() => navigate("/products/151515")}
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp"
                className="card-img-top"
                alt="iPhone"
              />
              <div className="card-body">
                <div className="text-center mt-1">
                  <h4 className="card-title">iPhone 11</h4>
                  <h6 className="text-primary mb-1 pb-3">Starting at $499</h6>
                </div>

                <div className="d-flex flex-row">
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary flex-fill me-1"
                    data-mdb-ripple-color="dark"
                  >
                    ADD TO CART
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-danger flex-fill ms-1"
                  >
                    WISHLIST
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div className="card text-black">
              <img
                onClick={() => navigate("/products/151515")}
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp"
                className="card-img-top"
                alt="iPhone"
              />
              <div className="card-body">
                <div className="text-center mt-1">
                  <h4 className="card-title">iPhone 11 Pro</h4>
                  <h6 className="text-primary mb-1 pb-3">Starting at $599</h6>
                </div>
                <div className="text-center"></div>
                <div className="d-flex flex-row">
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary flex-fill me-1"
                    data-mdb-ripple-color="dark"
                  >
                    ADD TO CART
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-danger flex-fill ms-1"
                  >
                    WISHLIST
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
