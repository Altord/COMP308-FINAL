import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation } from "@apollo/client";
import { POST_EMERGENCY } from "../../graphql/mutations";

const EmergencyAlert = () => {
  const [sent, setSent] = useState(false);
  const [emergencyDescription, setEmergencyDescription] = useState("");

  const [postEmergency] = useMutation(POST_EMERGENCY);

  const handleEmergencySubmit = async (event) => {
    event.preventDefault();

    try {
      await postEmergency({
        variables: {
          emergency: emergencyDescription,
          patientId: "661c81eddf2b3350e7b4728e", //test
        },
      });
      setSent(true);
    } catch (error) {
      console.error("Error posting emergency:", error);
    }
  };

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
            <Form onSubmit={handleEmergencySubmit}>
              <p>Please briefly describe your emergency.</p>
              <Form.Group className="d-flex align-items-center">
                <Form.Control
                  as="textarea"
                  rows={6}
                  id="emergency"
                  value={emergencyDescription}
                  onChange={(e) => setEmergencyDescription(e.target.value)}
                />
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
