import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col, Alert } from "react-bootstrap";

function FertilizerCalculator() {
  const [crop, setCrop] = useState("");
  const [landSize, setLandSize] = useState("");
  const [result, setResult] = useState(null);

  const cropData = {
    maize: { fertilizer: "DAP / CAN", rate: 50 }, // kg per acre
    wheat: { fertilizer: "NPK 23:23:0", rate: 45 },
    rice: { fertilizer: "Urea", rate: 60 },
    beans: { fertilizer: "NPK 17:17:17", rate: 40 },
    potatoes: { fertilizer: "NPK 20:10:10", rate: 55 },
  };

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!crop || !landSize) {
      alert("Please select crop and enter land size!");
      return;
    }

    const data = cropData[crop.toLowerCase()];
    if (!data) {
      alert("Crop not found in database!");
      return;
    }

    const totalFertilizer = landSize * data.rate;

    setResult({
      crop,
      landSize,
      fertilizer: data.fertilizer,
      total: totalFertilizer,
    });
  };

  return (
    <Container className="py-5">
      <Card className="p-4 shadow-sm border-success">
        <h2 className="text-success text-center fw-bold mb-4">
          📊 Fertilizer Calculator
        </h2>

        <Form onSubmit={handleCalculate}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Land Size (in acres)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="e.g. 2"
                  value={landSize}
                  onChange={(e) => setLandSize(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Crop Type</Form.Label>
                <Form.Select
                  value={crop}
                  onChange={(e) => setCrop(e.target.value)}
                >
                  <option value="">-- Select Crop --</option>
                  <option value="maize">Maize</option>
                  <option value="wheat">Wheat</option>
                  <option value="rice">Rice</option>
                  <option value="beans">Beans</option>
                  <option value="potatoes">Potatoes</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col className="text-center mt-3">
              <Button variant="success" type="submit" className="px-4">
                Calculate
              </Button>
            </Col>
          </Row>
        </Form>

        {result && (
          <Alert variant="success" className="mt-4">
            <h5 className="fw-bold">Results</h5>
            <p>
              🌾 <strong>Crop:</strong> {result.crop.charAt(0).toUpperCase() + result.crop.slice(1)}  
              <br />
              📐 <strong>Land Size:</strong> {result.landSize} acres  
              <br />
              🧪 <strong>Recommended Fertilizer:</strong> {result.fertilizer}  
              <br />
              ⚖️ <strong>Estimated Amount:</strong> {result.total} kg total  
            </p>
          </Alert>
        )}
      </Card>
    </Container>
  );
}

export default FertilizerCalculator;
