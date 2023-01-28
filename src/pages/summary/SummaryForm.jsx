import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

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
            <>
              I agree to{" "}
              <OverlayTrigger
                trigger={["hover", "focus"]}
                placement="right"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      No ice cream will actually be delivered
                    </Popover.Body>
                  </Popover>
                }
              >
                <span style={{ color: "blue" }}>Terms and Conditions</span>
              </OverlayTrigger>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!checkedTerms}>
        Confirm Order
      </Button>
    </Form>
  );
}
