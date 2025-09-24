import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function App() {
  return (
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
      </Routes>
    </Router>
  );
}

export default App;
