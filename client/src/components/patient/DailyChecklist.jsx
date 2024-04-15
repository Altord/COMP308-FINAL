import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function DailyChecklist() {
  const testDailyChecklistData = [
    {
      name: "Pulse rate",
      id: "pulseRate",
    },
    {
      name: "Blood pressure",
      id: "bloodPressure",
    },
    {
      name: "Weight",
      id: "weight",
    },
    {
      name: "Temperature",
      id: "temp",
    },
    {
      name: "Respiratory rate",
      id: "respiratoryRate",
    },
  ];
  return (
    <Container className="d-flex justify-content-center">
      <div>
        <h2 className="text-center fw-bold">Daily checklist</h2>
        <Form>
          {testDailyChecklistData.map((item, index) => (
            <Form.Group key={index} className="py-3">
              <Form.Label>{item.name}</Form.Label>
              <Form.Control className="px-2" type="text" id={item.id} />
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

export default DailyChecklist;
