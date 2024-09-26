import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useEffect(() => {
    gsap.fromTo(
      ".testimonial-item",
      { opacity: 0, scale: 1.2 }, // Start slightly zoomed in
      {
        opacity: 1,
        scale: 1, // End at normal scale
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-item",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="testimonial-item bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <p className="text-gray-700 italic">
            "The pizza was amazing, and the service was fast! Highly recommend!"
          </p>
          <h4 className="mt-4 font-bold text-lg">John Doe</h4>
        </div>

        <div className="testimonial-item bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <p className="text-gray-700 italic">
            "Best burgers in town! Juicy and full of flavor."
          </p>
          <h4 className="mt-4 font-bold text-lg">Jane Smith</h4>
        </div>

        <div className="testimonial-item bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <p className="text-gray-700 italic">
            "The ice cream was so creamy and delicious. Will order again!"
          </p>
          <h4 className="mt-4 font-bold text-lg">Sam Wilson</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
