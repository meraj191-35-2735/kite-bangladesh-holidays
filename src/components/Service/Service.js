import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, serviceName, img, description } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{serviceName}</Card.Title>
            <Card.Text>
              {description.length === 50
                ? description
                : description.slice(0, 150) + "..."}
            </Card.Text>
          </Card.Body>
          <Button onClick={() => navigateToServiceDetail(id)} variant="primary">
            Show Details
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default Service;
