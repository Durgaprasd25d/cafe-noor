import React, { useState } from "react";
import Hero from "../components/Hero.jsx";
import bgImage from "../Food/landing_image2.jpg";
import { bestSeller } from "../utils/data.js";
import Item from "../components/Item";
import Testimonials from "../components/Testimonials";
import SpecialOffers from "../components/SpecialOffers";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous item navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === bestSeller.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bestSeller.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Hero
        title="Elevate Your Taste with Our Exclusive Selection"
        subtitle="Discover delectable delights and irresistible offers that will satisfy your cravings!"
        buttonLabel="Explore Now"
        bgImage={bgImage}
      />

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Bestsellers</h1>

        <div className="relative">
          {/* Single item display on small screens */}
          <div className="block md:hidden">
            <Item product={bestSeller[currentIndex]} />
            <div className="flex justify-between mt-4">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="bg-gray-200 p-2 rounded-full hover:bg-brown-500 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="bg-gray-200 p-2 rounded-full hover:bg-brown-500 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Grid layout for larger screens */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSeller.map((product) => (
              <Item key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Include the Special Offers and Testimonials components */}
      <SpecialOffers />
      <Testimonials />
    </>
  );
};

export default HomePage;
