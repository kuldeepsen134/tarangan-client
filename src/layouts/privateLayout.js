import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const PrivateLayout = () => {
  return (
    <div className="private-layout">
      <Row className="mx-0">
        
        <Col>
          <Header />
          <Outlet />
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default PrivateLayout;
