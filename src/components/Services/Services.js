import { Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();
  return (
    <div id="services" className="container mt-5">
      <h2 className="text-center text-primary my-2">Services</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
