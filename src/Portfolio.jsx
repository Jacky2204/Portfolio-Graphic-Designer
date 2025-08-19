import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import MouseTracker from "./components/MouseTracker";

export default function Portfolio() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        {/* Global cursor effects */}
        <Cursor />
        <MouseTracker />
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
