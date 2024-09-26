import React, { useEffect } from "react";
import gsap from "gsap";
import bgimage from "../Food/landing_image2.jpg"; // Update with the correct image path

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );
  }, []);

  return (
    <section
    className="relative bg-cover bg-center h-screen text-center text-white flex items-center justify-center"
    style={{
      backgroundImage: `url(${bgimage})`,
      backgroundBlendMode: 'overlay',
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
    <div className="relative z-10 hero-content">
      <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl text-shadow">
        Savor the Flavors of Gourmet Delights
      </h1>
      <p className="mt-4 text-lg md:text-xl lg:text-2xl">
        Delicious pizzas, juicy burgers, and creamy ice creams
      </p>
      <button className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-xl font-semibold rounded-full transition transform hover:scale-105">
        Order Now
      </button>
    </div>
  </section>
  
  );
};

export default Hero;
