import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SpecialOffers = () => {
  useEffect(() => {
    gsap.fromTo(
      ".special-offers-item",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".special-offers-item",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="py-16 bg-brown-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Special Offers</h2>
      <div className="flex flex-wrap justify-center">
        <div className="special-offers-item mx-2 my-4 max-w-sm sm:max-w-md md:max-w-lg bg-brown-300 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl sm:text-2xl font-semibold">20% Off on All Pizzas</h3>
          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            Get your favorite pizza at a discounted price. Hurry up!
          </p>
          <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-brown-500 hover:bg-brown-600 text-base sm:text-xl font-semibold rounded-full transition duration-300">
            Order Now
          </button>
        </div>

        <div className="special-offers-item mx-2 my-4 max-w-sm sm:max-w-md md:max-w-lg bg-brown-300 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl sm:text-2xl font-semibold">Buy 1 Get 1 Free!</h3>
          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            Enjoy a free pizza when you buy one. Limited time offer!
          </p>
          <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-brown-500 hover:bg-brown-600 text-base sm:text-xl font-semibold rounded-full transition duration-300">
            Order Now
          </button>
        </div>

        <div className="special-offers-item mx-2 my-4 max-w-sm sm:max-w-md md:max-w-lg bg-brown-300 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl sm:text-2xl font-semibold">Free Delivery on Orders Over $30</h3>
          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            Get free delivery on your next order over $30. Order now!
          </p>
          <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-brown-500 hover:bg-brown-600 text-base sm:text-xl font-semibold rounded-full transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
