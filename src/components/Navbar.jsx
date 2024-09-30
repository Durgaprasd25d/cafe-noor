import React, { useEffect, useState, useRef } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change initial state to false
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const linkRefs = useRef([]);

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
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          dropdownRef.current.style.display = "none";
        },
      });
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isDropdownOpen) {
      dropdownRef.current.style.display = "block";
    }
  }, [isDropdownOpen]);

  const handleMouseEnter = (index) => {
    gsap.to(linkRefs.current[index], {
      scale: 1.1,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(linkRefs.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  return (
    <nav
      className={`fixed w-full flex justify-between items-center p-4 transition-all duration-300 z-50 
      ${
        isScrolled
          ? "bg-white-500 bg-opacity-40 shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className="block md:hidden">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      <div
        className="hidden md:flex text-3xl font-bold"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        Cafe Noor
      </div>

      <div className="block md:hidden">
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className={`relative`}
        >
          {isDropdownOpen ? (
            <FaTimes
              className={`text-2xl ${
                isScrolled ? "text-brown-800" : "text-brown-500"
              }`}
            />
          ) : (
            <FaBars
              className={`text-2xl ${
                isScrolled ? "text-brown-800" : "text-brown-500"
              }`}
            />
          )}
        </button>
      </div>

      <div className="hidden md:flex md:flex-row items-center space-x-8 flex-grow justify-center">
        {isLoggedIn ? (
          <>
            <Link
              to="/"
              className={`text-xl transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`text-xl transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/contact-us"
              className={`text-xl transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Contact Us
            </Link>
            <Link
              to="/profile"
              className={`text-xl transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className={`text-xl transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white hover:text-brown-300"
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`text-xl transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white hover:text-brown-300"
              }`}
            >
              Register
            </Link>
          </>
        )}
      </div>

      {/* Removed the duplicated "Profile" link in the large screen */}
      <ul
        ref={dropdownRef}
        className={`absolute top-full right-0 mt-2 w-48 bg-brown-500 bg-opacity-80 rounded-lg shadow-lg z-10 md:hidden`}
        style={{ display: "none" }}
      >
        {isLoggedIn ? (
          <>
            <li className="hover:bg-brown-600 transition-colors">
              
            </li>
            <li className="hover:bg-brown-600 transition-colors">
              <Link
                to="/"
                className={`block px-4 py-2 text-xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="hover:bg-brown-600 transition-colors">
              <Link
                to="/menu"
                className={`block px-4 py-2 text-xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Menu
              </Link>
            </li>
            <li className="hover:bg-brown-600 transition-colors">
              <Link
                to="/contact-us"
                className={`block px-4 py-2 text-xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Contact Us
              </Link>
              <Link
                to="/profile"
                className={`block px-4 py-2 text-xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Profile
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="hover:bg-brown-600 transition-colors">
              <Link
                to="/login"
                className={`block px-4 py-2 text-xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Login
              </Link>
            </li>
            <li className="hover:bg-brown-600 transition-colors">
              <Link
                to="/register"
                className={`block px-4 py-2 text-xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
