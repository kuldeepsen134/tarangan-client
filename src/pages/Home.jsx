import React from "react";
import { Saas1 } from "../images";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <section>
        <div className="row">
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
        </div>
      </section>
      <section>

        
      </section>
    </div>
  );
};

export default HomePage;
