import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, Button, Alert, Table, Badge } from "react-bootstrap";

const cropWaterNeeds = {
  maize: { name: "Maize", waterPerDay: 6 },
  beans: { name: "Beans", waterPerDay: 5 },
  tomato: { name: "Tomato", waterPerDay: 7 },
  potatoes: { name: "Potatoes", waterPerDay: 6 },
  rice: { name: "Rice", waterPerDay: 10 },
};

const soilFactors = {
  sandy: { label: "Sandy (Drains fast)", factor: 1.2, frequency: "every 2 days" },
  loam: { label: "Loam (Balanced moisture)", factor: 1.0, frequency: "every 3 days" },
  clay: { label: "Clay (Holds moisture)", factor: 0.8, frequency: "every 4–5 days" },
};

const regions = ["Central Kenya", "Western Kenya", "Coastal Kenya", "Nairobi", "Default"];

const mmToLitersPerSqM = (mm) => mm;
const hectareToSqM = (ha) => ha * 10000;
const acreToSqM = (ac) => ac * 4046.86;

export default function IrrigationEstimator() {
  const [fieldSize, setFieldSize] = useState("");
  const [unit, setUnit] = useState("acre");
  const [crop, setCrop] = useState("maize");
  const [soil, setSoil] = useState("loam");
  const [region, setRegion] = useState("Central Kenya");
  const [result, setResult] = useState(null);
  const [savedResults, setSavedResults] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("agriconnect_irrigation") || "[]");
    setSavedResults(saved);
  }, []);

  const calculateIrrigation = () => {
    if (!fieldSize || fieldSize <= 0) {
      alert("Please enter a valid field size.");
      return;
    }

    const cropInfo = cropWaterNeeds[crop];
    const soilInfo = soilFactors[soil];
    const areaSqM = unit === "acre" ? acreToSqM(fieldSize) : hectareToSqM(fieldSize);

    const dailyWaterMM = cropInfo.waterPerDay * soilInfo.factor;
    const dailyLiters = mmToLitersPerSqM(dailyWaterMM) * areaSqM;
    const weeklyLiters = dailyLiters * 7;

    const output = {
      crop: cropInfo.name,
      soil: soilInfo.label,
      fieldSize,
      unit,
      region,
      dailyLiters: dailyLiters.toFixed(0),
      weeklyLiters: weeklyLiters.toFixed(0),
      frequency: soilInfo.frequency,
    };

    setResult(output);
  };

  const saveResult = () => {
    if (!result) return;
    const newResults = [...savedResults, result];
    localStorage.setItem("agriconnect_irrigation", JSON.stringify(newResults));
    setSavedResults(newResults);
    alert("Saved successfully!");
  };

  return (
    <Container className="py-5">
      <Card className="shadow-lg border-0 p-4">
        <h2 className="text-center mb-4">💧 Smart Irrigation Estimator</h2>
        <p className="text-center text-muted mb-4">
          Calculate how much water your crops need based on soil type, crop, and region.
        </p>

        <Form>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Field Size</Form.Label>
                <Form.Control
                  type="number"
                  value={fieldSize}
                  onChange={(e) => setFieldSize(e.target.value)}
                  placeholder="Enter field size"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Unit</Form.Label>
                <Form.Select value={unit} onChange={(e) => setUnit(e.target.value)}>
                  <option value="acre">Acre(s)</option>
                  <option value="hectare">Hectare(s)</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Crop Type</Form.Label>
                <Form.Select value={crop} onChange={(e) => setCrop(e.target.value)}>
                  {Object.keys(cropWaterNeeds).map((key) => (
                    <option key={key} value={key}>
                      {cropWaterNeeds[key].name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Soil Type</Form.Label>
                <Form.Select value={soil} onChange={(e) => setSoil(e.target.value)}>
                  {Object.keys(soilFactors).map((key) => (
                    <option key={key} value={key}>
                      {soilFactors[key].label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <Form.Group>
                <Form.Label>Region</Form.Label>
                <Form.Select value={region} onChange={(e) => setRegion(e.target.value)}>
                  {regions.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button onClick={calculateIrrigation} variant="success" size="lg">
              💧 Estimate Water Needs
            </Button>
          </div>
        </Form>

        {result && (
          <Alert variant="info" className="mt-5">
            <h5>
              🌿 <strong>{result.crop}</strong> on <strong>{result.soil}</strong> soil
            </h5>
            <p>
              For a field size of <strong>{result.fieldSize}</strong> {result.unit}s in{" "}
              <strong>{result.region}</strong>:
            </p>
            <ul>
              <li>💧 Daily Water Requirement: {result.dailyLiters} liters</li>
              <li>📆 Weekly Total: {result.weeklyLiters} liters</li>
              <li>🕒 Recommended Frequency: {result.frequency}</li>
            </ul>
            <Button onClick={saveResult} variant="outline-primary">
              💾 Save Result
            </Button>
          </Alert>
        )}

        {savedResults.length > 0 && (
          <Card className="mt-4 p-3 bg-light">
            <h5>📚 Saved Irrigation Records</h5>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Crop</th>
                  <th>Soil</th>
                  <th>Size</th>
                  <th>Daily (L)</th>
                  <th>Weekly (L)</th>
                  <th>Frequency</th>
                </tr>
              </thead>
              <tbody>
                {savedResults.map((r, i) => (
                  <tr key={i}>
                    <td>{r.crop}</td>
                    <td>{r.soil}</td>
                    <td>
                      {r.fieldSize} {r.unit}
                    </td>
                    <td>{r.dailyLiters}</td>
                    <td>{r.weeklyLiters}</td>
                    <td>
                      <Badge bg="success">{r.frequency}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        )}
      </Card>
    </Container>
  );
}
