import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnalyticsEvents from "./components/AnalyticsEvents";
import ServiceDetails from "./pages/ServiceDetails";
import { servicePages } from "./data/service-pages";


import Home from "./pages/Home";

function App() {
  return (
    <>
      <AnalyticsEvents />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {servicePages.map((page) => <Route key={page.path} path={page.path} element={<ServiceDetails page={page} />} />)}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
