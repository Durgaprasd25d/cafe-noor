import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic (e.g., API call to save email)
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  useEffect(() => {
    gsap.fromTo(
      ".footer-container",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="footer-container container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="mb-2 sm:mb-0 sm:mr-2 px-4 py-2 rounded-l-md text-black w-full sm:w-auto"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-brown-500 rounded-md hover:bg-brown-600 transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4" style={{ fontFamily: 'Pacifico, cursive' }}>&copy; 2024 Cafe Noor. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center">
          <a href="#!" className="mx-2 text-gray-400 hover:text-white transition duration-300">
            Facebook
          </a>
          <a href="#!" className="mx-2 text-gray-400 hover:text-white transition duration-300">
            Twitter
          </a>
          <a href="#!" className="mx-2 text-gray-400 hover:text-white transition duration-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
