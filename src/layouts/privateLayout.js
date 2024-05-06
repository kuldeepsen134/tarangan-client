import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import { AppHeader, Footer, Header } from "../components";

const PrivateLayout = () => {

  const location = useLocation();

  const renderHeader = () => {
    const { pathname } = location;

    switch (pathname) {
      case "/app/MyAccount":
        return <AppHeader />;
      default:
        return <Header />;
    }
  };



  return (
    <div className="private-layout">
      <Row className="mx-0">

        <Col>
          {renderHeader()}
          <Outlet />
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default PrivateLayout;
