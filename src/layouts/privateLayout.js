import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="private-layout">
      <Row className="mx-0">
        <Col xs={2}>
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default PrivateLayout;
