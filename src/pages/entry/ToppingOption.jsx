import Col from "react-bootstrap/Col";
import { useOrderDetails } from "../../contexts/OrderDetail";
import { Form, Row } from "react-bootstrap";

export default function ToppingOption({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails();

  const handleChange = (e) => {
    updateItemCount(name, parseInt(e.target.value), "toppings");
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
        style={{ width: "75%" }}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5" sytyle={{ textAlign: "left" }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
          ></Form.Control>
        </Col>
      </Form.Group>
    </Col>
  );
}
