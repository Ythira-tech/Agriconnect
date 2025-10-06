import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, InputGroup } from "react-bootstrap";
import { FaPhone, FaMapMarkerAlt, FaSeedling, FaPlus } from "react-icons/fa";

function BuyandSell() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    location: "",
    contact: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.location || !newProduct.contact) {
      alert("Please fill all fields!");
      return;
    }
    setProducts([...products, newProduct]);
    setNewProduct({ name: "", price: "", location: "", contact: "", image: "" });
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4 text-success fw-bold">
        <FaSeedling /> Agriconnect Marketplace
      </h1>

      {/* Add Product Form */}
      <Card className="p-4 shadow-sm mb-5 border-success">
        <h4 className="text-success mb-3">
          <FaPlus /> List Your Product
        </h4>
        <Form onSubmit={handleAddProduct}>
          <Row className="g-3">
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Crop Name"
                name="name"
                value={newProduct.name}
                onChange={handleChange}
              />
            </Col>
            <Col md={2}>
              <Form.Control
                type="number"
                placeholder="Price (Ksh)"
                name="price"
                value={newProduct.price}
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                type="text"
                placeholder="Location"
                name="location"
                value={newProduct.location}
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="contact"
                value={newProduct.contact}
                onChange={handleChange}
              />
            </Col>
            <Col md={12}>
              <Form.Control
                type="text"
                placeholder="Image URL (optional)"
                name="image"
                value={newProduct.image}
                onChange={handleChange}
              />
            </Col>
            <Col md={12} className="text-center">
              <Button type="submit" variant="success" className="px-4">
                Add Product
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>

      {/* Search Field */}
      <InputGroup className="mb-4 shadow-sm">
        <Form.Control
          placeholder="Search for a crop..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      {/* Product Listings */}
      <Row className="g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm border-0">
                {item.image ? (
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{
                      height: "200px",
                      background: "#e9f7ef",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#198754",
                      fontSize: "1.2rem",
                    }}
                  >
                    <FaSeedling className="me-2" />
                    No Image
                  </div>
                )}
                <Card.Body>
                  <Card.Title className="text-success fw-bold">{item.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> Ksh {item.price}
                    <br />
                    <FaMapMarkerAlt /> {item.location}
                    <br />
                    <FaPhone /> {item.contact}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">No products yet. Add one above!</p>
        )}
      </Row>
    </Container>
  );
}

export default BuyandSell;
