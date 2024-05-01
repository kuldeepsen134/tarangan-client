import React from "react";

const ContactUs = () => {
  return (
    <>
      <section className="banner-contact">
        <div className="container">
          <h2>Contact Us</h2>
        </div>
      </section>
      <div className="container py-5">
        <div className="row mx-0 justify-content-around position-relative">
          <div className="col-sm-5">
            <div className="contact-detail">
              <div className="mb-4">
                <i></i>
                <h3>+91 - 8482925926</h3>
              </div>
              <div className="mb-4">
                <i></i>
                <h3>+info@nakshatratechnohub.com</h3>
              </div>
              <div className="mb-4">
                <i></i>
                <h3>Registered office</h3>
                <p>+F-89, MIDC, AMBAD, NASHIK - 422010, MAHARASHTRA</p>
              </div>
              <div className="mb-4">
                <i></i>
                <h3>Factory</h3>
                <p>+F-89, MIDC, AMBAD, NASHIK - 422010, MAHARASHTRA</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 position-relative">
            <form className="contact-detail-form">
              <div>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Name"
                  name=""
                  id=""
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="email"
                  name=""
                  id=""
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="phone"
                  name=""
                  id=""
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="subject"
                  name=""
                  id=""
                />
              </div>
              <div>
                <textarea
                  name=""
                  placeholder="message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="border mt-4  text-center p-2 rounded-pill text-decoration-none text-success border-success">
                <button className="btn ">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
