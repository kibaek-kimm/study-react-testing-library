import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SummaryForm() {
  const [checkedTerms, setCheckedTerms] = useState(false);

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={checkedTerms}
          onChange={(e) => setCheckedTerms(e.target.checked)}
          label={
            <span>
              I agree to{" "}
              <span style={{ color: "blue" }}>Terms and Conditions</span>
            </span>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!checkedTerms}>
        Confirm Order
      </Button>
    </Form>
  );
}
