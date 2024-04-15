import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EmergencyAlert = () => {
  const sent = false;
  return (
    <div>
      <Container className="d-flex justify-content-center w-100">
        <div style={{ padding: 30 }}>
          <h2 className="fw-bold text-center text-danger">Emergency alert</h2>
          {sent ? (
            <>
              <h1 className="fw-bold text-center text-success">
                Your emergency has been sent!
              </h1>
              <h3 className="text-center">EMS should arrive shortly.</h3>
              <div className="text-center">
                <Button
                  href="/patient-dashboard"
                  className="my-5"
                  variant="dark"
                  type="submit"
                >
                  Dashboard
                </Button>
              </div>
            </>
          ) : (
            <Form>
              <p>Please briefly describe your emergency.</p>
              <Form.Group className="d-flex align-items-center">
                <Form.Control as="textarea" rows={6} id="emergency" />
              </Form.Group>
              <div className="text-center">
                <Button className="my-5" variant="dark" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </div>
      </Container>
    </div>
  );
};

export default EmergencyAlert;
