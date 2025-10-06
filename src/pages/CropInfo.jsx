import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";

const CropInfo = () => {
  const [query, setQuery] = useState("");
  const [cropData, setCropData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Updated handleSearch function with CORS proxy
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setCropData([]);

    try {
      // remove: const proxy = "https://api.allorigins.win/get?url=";
      const apiUrl = `/api/v1/crops/?filter=${query}`;
      const response = await axios.get(apiUrl);
      const parsedData = JSON.parse(response.data.contents);

      if (parsedData.data && parsedData.data.length > 0) {
        setCropData(parsedData.data);
      } else {
        setError("No crop information found. Try another name!");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Something went wrong while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 text-success fw-bold">
        🌾 Crop Information Center
      </h2>

      {/* Search Form */}
      <Form className="d-flex justify-content-center mb-4" onSubmit={handleSearch}>
        <Form.Control
          type="text"
          placeholder="Search for a crop (e.g. maize, tomato, rice)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ maxWidth: "400px" }}
        />
        <Button variant="success" type="submit" className="ms-2">
          Search
        </Button>
      </Form>

      {/* Loading and Error Messages */}
      {loading && <p className="text-center text-muted">Loading crop info...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* Crop Cards */}
      <Row>
        {cropData.map((crop) => (
          <Col key={crop.id} md={4} className="mb-4">
            <Card className="shadow-sm h-100 border-0 rounded-4">
              {crop.attributes.main_image_path ? (
                <Card.Img
                  variant="top"
                  src={crop.attributes.main_image_path}
                  alt={crop.attributes.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              ) : (
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x200?text=No+Image"
                  alt="No image available"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <Card.Body>
                <Card.Title className="fw-bold text-success">
                  {crop.attributes.name}
                </Card.Title>
                <Card.Text style={{ minHeight: "90px" }}>
                  {crop.attributes.description
                    ? crop.attributes.description.slice(0, 150) + "..."
                    : "No description available."}
                </Card.Text>
                <Button
                  variant="outline-success"
                  href={`https://openfarm.cc/en/crops/${crop.attributes.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CropInfo;
