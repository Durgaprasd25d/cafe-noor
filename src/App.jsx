import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import SpecialOffers from "./components/SpecialOffers.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <SpecialOffers />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
