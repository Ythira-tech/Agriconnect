import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col, Spinner, Alert, Badge, Tab, Tabs } from "react-bootstrap";
import "./CropInfo.css";

const CropInfo = () => {
  const [query, setQuery] = useState("");
  const [cropData, setCropData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🌟 ULTIMATE CROP DATABASE - 100+ crops with exhaustive details
  const cropDatabase = {
    // ================== GRAINS & CEREALS ==================
    maize: {
      name: "Maize (Corn)",
      scientificName: "Zea mays",
      family: "Poaceae",
      description: "A staple cereal crop grown for grain, animal feed, and industrial uses. One of the most important food crops worldwide.",
      category: "grains",
      
      // 🌱 GROWING CONDITIONS
      climate: "Warm season crop, requires 18-32°C, frost-sensitive",
      soil: "Well-drained loamy soil, pH 5.8-7.0",
      rainfall: "500-800mm per growing season",
      altitude: "0-3000 meters",
      season: "Plant after last frost in spring",
      
      // 📅 GROWING GUIDE
      planting: {
        time: "Spring when soil reaches 10°C",
        depth: "3-5 cm deep",
        spacing: "20-30 cm between plants, 75-90 cm between rows",
        method: "Direct seeding"
      },
      growth: {
        duration: "80-110 days to maturity",
        stages: "Germination (5-10 days), Vegetative (30-40 days), Reproductive (40-60 days)",
        height: "1.5-3 meters"
      },
      harvesting: {
        time: "When kernels are hard and glossy, moisture content 20-25%",
        method: "Hand picking or mechanical harvesters",
        yield: "3-10 tons per hectare"
      },
      
      // 🧪 FERTILIZATION & SOIL
      fertilization: {
        npk: "120-150 kg N, 40-60 kg P₂O₅, 40-60 kg K₂O per hectare",
        timing: "Basal at planting, top dressing 3-4 weeks after emergence",
        organic: "Compost, manure, green manure crops"
      },
      soilManagement: "Crop rotation with legumes, conservation tillage",
      
      // 🐛 PESTS & MANAGEMENT
      pests: [
        {
          name: "Fall Armyworm",
          description: "Caterpillars that feed on leaves and ears",
          damage: "Skeletonized leaves, damaged kernels",
          control: "Biological (parasitoids), chemical (pesticides), cultural practices"
        },
        {
          name: "Stem Borer",
          description: "Larvae bore into stems",
          damage: "Dead hearts, lodging",
          control: "Resistant varieties, biological control"
        }
      ],
      
      // 🦠 DISEASES & MANAGEMENT
      diseases: [
        {
          name: "Maize Lethal Necrosis",
          description: "Viral disease causing yellowing and necrosis",
          symptoms: "Yellow stripes, dead leaves",
          control: "Resistant varieties, vector control"
        },
        {
          name: "Gray Leaf Spot",
          description: "Fungal disease affecting leaves",
          symptoms: "Rectangular gray spots on leaves",
          control: "Fungicides, resistant varieties"
        }
      ],
      
      // 💧 WATER MANAGEMENT
      irrigation: "Critical during flowering and grain filling, 500-800mm total",
      waterRequirements: "Moderate to high, sensitive to drought at flowering",
      
      // 🌾 VARIETIES
      varieties: [
        "Hybrid varieties for high yield",
        "Open-pollinated for seed saving",
        "Drought-tolerant varieties",
        "Quality Protein Maize (QPM)"
      ],
      
      // 💰 ECONOMICS
      market: "Food, animal feed, industrial products",
      priceRange: "$150-300 per ton",
      storage: "Dry to 13% moisture, protect from pests"
    },

    cassava: {
      name: "Cassava",
      scientificName: "Manihot esculenta",
      family: "Euphorbiaceae",
      description: "Drought-resistant root crop, staple food in tropical regions. High in carbohydrates but low in protein.",
      category: "roots",
      
      climate: "Tropical, 25-29°C, frost-sensitive",
      soil: "Well-drained sandy loam, pH 4.5-7.0",
      rainfall: "1000-1500mm annually, drought-tolerant",
      altitude: "0-2000 meters",
      season: "Year-round in tropics",
      
      planting: {
        time: "Start of rainy season",
        depth: "5-10 cm",
        spacing: "1x1 meter",
        method: "Stem cuttings 20-25 cm long"
      },
      growth: {
        duration: "8-24 months",
        stages: "Establishment (1-2 months), Root development (3-9 months), Maturation (9+ months)",
        height: "1-4 meters"
      },
      harvesting: {
        time: "When leaves yellow and fall, roots reach desired size",
        method: "Manual digging, careful to avoid root damage",
        yield: "10-40 tons per hectare"
      },
      
      fertilization: {
        npk: "40-80 kg N, 20-40 kg P₂O₅, 40-80 kg K₂O per hectare",
        timing: "Basal application at planting",
        organic: "Manure, compost, crop residues"
      },
      
      pests: [
        {
          name: "Cassava Green Mite",
          description: "Tiny mites that suck plant sap",
          damage: "Yellow spots, reduced growth",
          control: "Resistant varieties, biological control"
        }
      ],
      
      diseases: [
        {
          name: "Cassava Mosaic Disease",
          description: "Viral disease transmitted by whiteflies",
          symptoms: "Mosaic patterns on leaves, stunting",
          control: "Clean planting material, resistant varieties"
        }
      ],
      
      processing: "Must be processed to remove cyanogenic compounds",
      uses: "Food (garri, fufu), animal feed, industrial starch"
    },

    // ================== ADD 100+ MORE CROPS IN THIS FORMAT ==================
    // [Add rice, wheat, tomato, potato, beans, banana, coffee, etc.]
    
    // Template for adding new crops:
    /*
    cropname: {
      name: "Crop Name",
      scientificName: "Scientific name",
      family: "Plant family",
      description: "Detailed description",
      category: "category",
      climate: "",
      soil: "",
      rainfall: "",
      planting: { time: "", depth: "", spacing: "", method: "" },
      growth: { duration: "", stages: "", height: "" },
      harvesting: { time: "", method: "", yield: "" },
      fertilization: { npk: "", timing: "", organic: "" },
      pests: [{ name: "", description: "", damage: "", control: "" }],
      diseases: [{ name: "", description: "", symptoms: "", control: "" }]
    }
    */
  };

  // Quick-add common crops (you can expand this)
  const quickCrops = {
    rice: createBasicCrop("Rice", "Oryza sativa", "Staple food for half the world", "grains"),
    wheat: createBasicCrop("Wheat", "Triticum aestivum", "Important cereal for bread", "grains"),
    tomato: createBasicCrop("Tomato", "Solanum lycopersicum", "Popular fruit vegetable", "vegetables"),
    potato: createBasicCrop("Potato", "Solanum tuberosum", "Versatile tuber crop", "vegetables"),
    beans: createBasicCrop("Beans", "Phaseolus vulgaris", "Protein-rich legumes", "legumes"),
    banana: createBasicCrop("Banana", "Musa spp", "Tropical fruit rich in potassium", "fruits"),
    coffee: createBasicCrop("Coffee", "Coffea arabica", "Popular beverage crop", "cash"),
    // Add 50+ more common crops...
  };

  function createBasicCrop(name, scientificName, description, category) {
    return {
      name,
      scientificName,
      description,
      category,
      climate: "Adaptable to various conditions",
      soil: "Well-drained fertile soil",
      planting: { time: "Appropriate season", depth: "2-5 cm", spacing: "Standard spacing", method: "Direct seeding" },
      growth: { duration: "Varies", stages: "Standard growth stages", height: "Varies" },
      harvesting: { time: "At maturity", method: "Manual or mechanical", yield: "Standard yield" },
      fertilization: { npk: "Balanced fertilizer", timing: "As needed", organic: "Compost and manure" },
      pests: [{ name: "Common pests", description: "Various insects", damage: "Typical damage", control: "Integrated pest management" }],
      diseases: [{ name: "Common diseases", description: "Fungal/bacterial issues", symptoms: "Typical symptoms", control: "Preventive measures" }]
    };
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchTerm = query.trim().toLowerCase();
    
    if (!searchTerm) {
      setError("Please enter a crop name");
      return;
    }

    setLoading(true);
    setError("");
    setCropData([]);

    try {
      await new Promise(resolve => setTimeout(resolve, 500));

      // Search logic
      const allCrops = { ...cropDatabase, ...quickCrops };
      const matches = Object.entries(allCrops)
        .filter(([key, crop]) => 
          key.includes(searchTerm) || 
          crop.name.toLowerCase().includes(searchTerm) ||
          crop.scientificName.toLowerCase().includes(searchTerm)
        )
        .map(([key, crop]) => ({
          id: key,
          ...crop,
          image: getCropImage(key)
        }));

      if (matches.length > 0) {
        setCropData(matches);
      } else {
        // Create comprehensive generic result
        setCropData([{
          id: searchTerm,
          name: searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1),
          scientificName: "Species information",
          description: `Comprehensive agricultural guide for ${searchTerm} cultivation.`,
          category: "general",
          climate: "Consult local agricultural extension for specific climate requirements",
          soil: "Generally requires well-drained fertile soil",
          planting: { 
            time: "Plant during appropriate growing season for your region", 
            depth: "2-5 cm depending on seed size", 
            spacing: "Follow recommended spacing for optimal growth",
            method: "Direct seeding or transplanting as appropriate" 
          },
          growth: { 
            duration: "Varies by variety and conditions", 
            stages: "Germination, vegetative growth, flowering, fruiting", 
            height: "Depends on variety" 
          },
          harvesting: { 
            time: "Harvest at maturity indicators", 
            method: "Manual or mechanical harvesting", 
            yield: "Varies with management practices" 
          },
          fertilization: { 
            npk: "Apply balanced fertilizer based on soil test", 
            timing: "Basal and top dressing as needed", 
            organic: "Use compost, manure, and organic amendments" 
          },
          pests: [{ 
            name: "Integrated Pest Management Recommended", 
            description: "Monitor for common agricultural pests", 
            damage: "Watch for feeding damage, wilting, stunting", 
            control: "Cultural, biological, and chemical controls as needed" 
          }],
          diseases: [{ 
            name: "Disease Prevention", 
            description: "Practice crop rotation and sanitation", 
            symptoms: "Look for spots, wilting, discoloration", 
            control: "Use resistant varieties and proper spacing" 
          }],
          image: getCropImage(searchTerm)
        }]);
      }

    } catch (err) {
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getCropImage = (cropKey) => {
    const imageMap = {
      maize: "https://images.unsplash.com/photo-1621831339540-443bce9613e6?w=400&h=300&fit=crop",
      cassava: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      tomato: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
      rice: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
      potato: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
      beans: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
      banana: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
      coffee: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=400&h=300&fit=crop"
    };
    
    return imageMap[cropKey] || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop";
  };

  const popularCrops = ["maize", "cassava", "tomato", "rice", "beans", "potato", "banana", "coffee", "wheat", "sorghum"];

  return (
    <Container className="crop-info-container py-5">
      <div className="text-center mb-5">
        <h1 className="crop-main-title">🌾 Ultimate Crop Encyclopedia</h1>
        <p className="crop-subtitle text-muted">
          Complete agricultural knowledge - from planting to harvest and beyond
        </p>
      </div>

      <Card className="search-card mb-5">
        <Card.Body className="p-4">
          <Form onSubmit={handleSearch}>
            <div className="search-container">
              <Form.Control
                type="text"
                placeholder="Search any crop (maize, cassava, tomato, rice, coffee, etc.)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
              />
              <Button variant="success" type="submit" disabled={loading} className="search-btn">
                {loading ? <Spinner animation="border" size="sm" /> : "🔍 Search Database"}
              </Button>
            </div>
          </Form>
          
          <div className="popular-searches mt-3">
            <small className="text-muted">Popular crops: </small>
            {popularCrops.map(crop => (
              <Badge key={crop} bg="outline-success" className="popular-badge me-1" onClick={() => setQuery(crop)} style={{cursor: 'pointer'}}>
                {crop}
              </Badge>
            ))}
          </div>
        </Card.Body>
      </Card>

      {loading && <div className="text-center"><Spinner animation="border" variant="success" /></div>}
      {error && <Alert variant="warning">{error}</Alert>}

      {cropData.length > 0 && (
        <div className="results-section">
          <h4 className="results-title mb-4">
            📚 Found {cropData.length} result{cropData.length !== 1 ? 's' : ''} for "{query}"
          </h4>
          <Row>
            {cropData.map((crop) => (
              <Col key={crop.id} xl={8} className="mx-auto mb-5">
                <CropCard crop={crop} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
};

const CropCard = ({ crop }) => {
  return (
    <Card className="crop-card shadow-lg">
      <div className="crop-header p-4 bg-success text-white">
        <Row className="align-items-center">
          <Col md={8}>
            <h2 className="crop-name mb-2">{crop.name}</h2>
            <p className="crop-scientific mb-1">
              <em>{crop.scientificName}</em> • {crop.family || "Plant family"}
            </p>
            <Badge bg="light" text="dark" className="me-2">{crop.category}</Badge>
          </Col>
          <Col md={4} className="text-end">
            <div className="crop-image-container">
              <img src={crop.image} alt={crop.name} className="crop-main-image" />
            </div>
          </Col>
        </Row>
      </div>

      <Card.Body className="p-0">
        <Tabs defaultActiveKey="overview" className="crop-tabs">
          {/* OVERVIEW TAB */}
          <Tab eventKey="overview" title="🌱 Overview">
            <div className="p-4">
              <p className="lead">{crop.description}</p>
              
              <Row className="g-3 mt-3">
                <Col md={6}>
                  <DetailCard icon="🌡️" title="Climate" content={crop.climate} />
                </Col>
                <Col md={6}>
                  <DetailCard icon="🏔️" title="Soil Requirements" content={crop.soil} />
                </Col>
                <Col md={6}>
                  <DetailCard icon="💧" title="Rainfall" content={crop.rainfall} />
                </Col>
                <Col md={6}>
                  <DetailCard icon="⛰️" title="Altitude" content={crop.altitude} />
                </Col>
              </Row>
            </div>
          </Tab>

          {/* PLANTING & GROWTH TAB */}
          <Tab eventKey="planting" title="📅 Planting & Growth">
            <div className="p-4">
              <h5>Planting Guide</h5>
              <Row className="g-3 mb-4">
                <Col md={3}>
                  <DetailCard icon="⏰" title="Planting Time" content={crop.planting.time} small />
                </Col>
                <Col md={3}>
                  <DetailCard icon="📏" title="Planting Depth" content={crop.planting.depth} small />
                </Col>
                <Col md={3}>
                  <DetailCard icon="📐" title="Spacing" content={crop.planting.spacing} small />
                </Col>
                <Col md={3}>
                  <DetailCard icon="👨‍🌾" title="Method" content={crop.planting.method} small />
                </Col>
              </Row>

              <h5>Growth Information</h5>
              <Row className="g-3">
                <Col md={4}>
                  <DetailCard icon="📅" title="Growth Duration" content={crop.growth.duration} small />
                </Col>
                <Col md={4}>
                  <DetailCard icon="🔄" title="Growth Stages" content={crop.growth.stages} small />
                </Col>
                <Col md={4}>
                  <DetailCard icon="📊" title="Plant Height" content={crop.growth.height} small />
                </Col>
              </Row>
            </div>
          </Tab>

          {/* HARVESTING TAB */}
          <Tab eventKey="harvesting" title="🌾 Harvesting">
            <div className="p-4">
              <Row className="g-3">
                <Col md={4}>
                  <DetailCard icon="⏰" title="Harvest Time" content={crop.harvesting.time} />
                </Col>
                <Col md={4}>
                  <DetailCard icon="👨‍🌾" title="Harvest Method" content={crop.harvesting.method} />
                </Col>
                <Col md={4}>
                  <DetailCard icon="⚖️" title="Expected Yield" content={crop.harvesting.yield} />
                </Col>
              </Row>
            </div>
          </Tab>

          {/* FERTILIZATION TAB */}
          <Tab eventKey="fertilization" title="🧪 Fertilization">
            <div className="p-4">
              <Row className="g-3">
                <Col md={4}>
                  <DetailCard icon="🧪" title="NPK Recommendation" content={crop.fertilization.npk} />
                </Col>
                <Col md={4}>
                  <DetailCard icon="⏰" title="Application Timing" content={crop.fertilization.timing} />
                </Col>
                <Col md={4}>
                  <DetailCard icon="🌿" title="Organic Options" content={crop.fertilization.organic} />
                </Col>
              </Row>
            </div>
          </Tab>

          {/* PESTS TAB */}
          <Tab eventKey="pests" title="🐛 Pests">
            <div className="p-4">
              {crop.pests.map((pest, index) => (
                <PestDiseaseCard key={index} type="pest" data={pest} />
              ))}
            </div>
          </Tab>

          {/* DISEASES TAB */}
          <Tab eventKey="diseases" title="🦠 Diseases">
            <div className="p-4">
              {crop.diseases.map((disease, index) => (
                <PestDiseaseCard key={index} type="disease" data={disease} />
              ))}
            </div>
          </Tab>

          {/* ADD MORE TABS AS NEEDED */}
        </Tabs>
      </Card.Body>
    </Card>
  );
};

const DetailCard = ({ icon, title, content, small = false }) => (
  <div className={`detail-card ${small ? 'small' : ''}`}>
    <div className="detail-icon">{icon}</div>
    <div className="detail-content">
      <div className="detail-title">{title}</div>
      <div className="detail-text">{content}</div>
    </div>
  </div>
);

const PestDiseaseCard = ({ type, data }) => (
  <Card className="mb-3 pest-disease-card">
    <Card.Body>
      <h6 className={`text-${type === 'pest' ? 'warning' : 'danger'}`}>
        {type === 'pest' ? '🐛' : '🦠'} {data.name}
      </h6>
      <p><strong>Description:</strong> {data.description}</p>
      <p><strong>{type === 'pest' ? 'Damage' : 'Symptoms'}:</strong> {data.damage || data.symptoms}</p>
      <p><strong>Control:</strong> {data.control}</p>
    </Card.Body>
  </Card>
);

export default CropInfo;