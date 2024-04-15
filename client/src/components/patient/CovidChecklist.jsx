import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CovidChecklist() {
  const symptoms = [
    {
      symptom: "Cough",
      id: "cough",
    },
    { symptom: "Headache", id: "headache" },
    {
      symptom: "Fatigue",
      id: "fatigue",
    },
    {
      symptom: "Fever/Chills",
      id: "feverChills",
    },
    {
      symptom: "Muscle/body aches",
      id: "aches",
    },
    {
      symptom: "Shortness of breath/difficulty breathing",
      id: "respritory",
    },
  ];
  return (
    <Container className="d-flex justify-content-center w-25">
      <div>
        <h2 className="text-center">
          <span className="fw-bold text-danger">COVID-19</span> Checklist
        </h2>
        <Form>
          {symptoms.map((symptom, index) => (
            <Form.Group key={index} className="d-flex align-items-center">
              <Form.Check className="px-2" type="checkbox" id={symptom.id} />
              <Form.Label>{symptom.symptom}</Form.Label>
            </Form.Group>
          ))}
          <div className="text-center">
            <Button className="my-5" variant="dark" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default CovidChecklist;
