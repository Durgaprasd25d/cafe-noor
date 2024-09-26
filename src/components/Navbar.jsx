import React, { useEffect, useState, useRef } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDropdownOpen) {
      // Fade in and slide up when opening
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: 10 }, // Start state
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" } // End state
      );
    } else {
      // Fade out and slide down when closing
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          // Reset style after closing
          dropdownRef.current.style.display = "none";
        },
      });
    }
  }, [isDropdownOpen]);

  // Update display style on dropdown open
  useEffect(() => {
    if (isDropdownOpen) {
      dropdownRef.current.style.display = "block";
    }
  }, [isDropdownOpen]);

  return (
    <nav
      className={`fixed w-full flex justify-between items-center p-4 transition-all duration-300 z-50 
    ${
      isScrolled
        ? "bg-white-500 bg-opacity-40 shadow-lg"
        : "bg-transparent text-white"
    }`}
    >
      <div className="text-3xl font-bold font-poppins">FoodEcommerce</div>

      {/* Hamburger Menu Button (shown on small screens) */}
      <div className="block md:hidden">
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className={`relative`}
        >
          {isDropdownOpen ? (
            <FaTimes
              className={`text-2xl ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            />
          ) : (
            <FaBars
              className={`text-2xl ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Links (shown on larger screens) */}
      <div className="hidden md:flex md:flex-row items-center space-x-8 flex-grow justify-center">
        {["Home", "Menu", "About Us", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className={`text-xl transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-white hover:text-yellow-300"
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      <div className="relative hidden md:flex md:flex-row items-center space-x-4">
        {isLoggedIn ? (
          <span
            className={`text-xl transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Avatar
          </span>
        ) : (
          <button
            className={`text-xl transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-white hover:text-yellow-300"
            }`}
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className={`p-2 rounded-lg bg-white text-black border border-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 ${
              isScrolled ? "focus:ring-yellow-500" : "focus:ring-white"
            }`}
          />
        </div>
      </div>

      {/* Dropdown Menu (shown on small screens) */}
      <ul
        ref={dropdownRef} // Attach ref here
        className={`absolute top-full right-0 mt-2 w-48 bg-yellow-500 bg-opacity-80 rounded-lg shadow-lg z-10 md:hidden`}
        style={{ display: "none" }} // Initially hidden, controlled by GSAP animation
      >
        {["Home", "Menu", "About Us", "Contact"].map((item) => (
          <li key={item} className="hover:bg-yellow-600 transition-colors">
            <a
              href="#"
              className={`block px-4 py-2 text-xl transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-800"
                  : "text-white hover:text-yellow-300"
              }`}
              onClick={() => setIsDropdownOpen(false)} // Close dropdown on item click
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
