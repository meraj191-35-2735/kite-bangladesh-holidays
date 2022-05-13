import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = ({ services }) => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const findService = [];

  for (const service of services) {
    if (service.id === serviceId) {
      findService.push(service);
    }
  }
  const handleNavigate = () => {
    navigate("/checkout");
  };
  return (
    <div className="container mt-5">
      <Card className="w-lg-50 w-sm-100 mx-auto">
        <Card.Img variant="top" src={findService[0].img} />
        <Card.Body>
          <Card.Title>{findService[0].serviceName}</Card.Title>
          <Card.Text>{findService[0].description}</Card.Text>
          <div className="d-flex justify-content-center">
            <Button
              className="w-50 mx-auto"
              onClick={handleNavigate}
              variant="primary"
            >
              Book Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
