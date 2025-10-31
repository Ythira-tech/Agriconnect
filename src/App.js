import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

import HeroSection from './components/HeroSection';
import AfricaImageSection from './components/AfricaImageSection';
import CropLibrary from './components/CropLibrary';
import WhyFarmers from './components/WhyFarmers';
import ChatBox from './components/ChatBox';
import FeatureStrip from './components/FeatureStrip';
import Footer from './components/Footer';
import Signup from './pages/Signup'; 
import Login from './pages/Login';
import Landing from './pages/Landing';
import ExploreCrops from "./pages/ExploreCrops";
import Marketplace from "./pages/Marketplace";
import KnowledgeHub from './pages/KnowledgeHub';
import Community from './pages/Community';
import Resources from './pages/Resources';
import FutureDetails from "./pages/FutureDetails";
import MaizeDetails from "./pages/MaizeDetails";
import Weather from "./pages/Weather";
import BuyandSell from "./pages/BuyandSell";
import Chatboxx from "./pages/Chatboxx";
import CropInfo from './pages/CropInfo';
import FertilizerCalculator from './pages/FertilizerCalculator';
import PlantingAndHarvestCalendar from './pages/PlantingAndHarvestCalendar';
import IrrigationEstimator from './pages/IrrigationEstimator';
import YieldProfitPredictor from './pages/YieldProfitPredictor';
import CommunityChat from "./pages/CommunityChat";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import PlantationCrops from "./pages/PlantationCrops";
import SearchResults from './components/SearchResults';

// Import the new pages we created
import SustainableFarming from './pages/SustainableFarming';
import FarmingTechnology from './pages/FarmingTechnology';
import FarmerCommunity from './pages/FarmerCommunity';
import AboutAgriconnect from './pages/AboutAgriconnect';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Homepage route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AfricaImageSection />
                <CropLibrary />
                <WhyFarmers />
                <ChatBox />
                <FeatureStrip />
                <Footer />
              </>
            }
          />

          {/* Signup route */}
          <Route path="/signup" element={<Signup />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />

          <Route path="/landing" element={<Landing />} />

          <Route path="/explore-crops" element={<ExploreCrops />} />

          <Route path="/market" element={<Marketplace />} />

          <Route path="/knowledge" element={<KnowledgeHub />} />

          <Route path="/community" element={<Community />} />

          <Route path="/resources" element={<Resources />} />

          <Route path="/future-details" element={<FutureDetails />} />

          <Route path="/maize-details" element={<MaizeDetails />} />

          <Route path="/chatboxx" element={<Chatboxx />} />

          <Route path="/weather" element={<Weather />} />

          <Route path="/buyandsell" element={<BuyandSell />} />

          <Route path="/crop-info" element={<CropInfo />} />

          <Route path="/fertilizer-calculator" element={<FertilizerCalculator />} />

          <Route path="/planting-calendar" element={<PlantingAndHarvestCalendar />} />

          <Route path="/irrigation-estimator" element={<IrrigationEstimator />} />

          <Route path="/yield-predictor" element={<YieldProfitPredictor />} />

          <Route path="/community-chat" element={<CommunityChat />} />

          <Route path="/fruits" element={<Fruits />} />

          <Route path="/vegetables" element={<Vegetables />} />
          
          <Route path="/plantation-crops" element={<PlantationCrops />} />

          <Route path="/search" element={<SearchResults />} />

          {/* ADD THESE NEW ROUTES FOR THE READMORE LINKS */}
          <Route path="/sustainable-farming" element={<SustainableFarming />} />
          <Route path="/farming-technology" element={<FarmingTechnology />} />
          <Route path="/farmer-community" element={<FarmerCommunity />} />
          <Route path="/about-agriconnect" element={<AboutAgriconnect />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;