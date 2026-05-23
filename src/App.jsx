import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";

import Home from "./pages/Home";
import WifiNetworking from "./pages/WifiNetworking";
import TechServices from "./pages/TechServices";
import Internet from "./pages/Internet";
import Coverage from "./pages/Coverage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wifi-networking" element={<WifiNetworking />} />
        <Route path="/tech-services" element={<TechServices />} />
        <Route path="/internet" element={<Internet />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
