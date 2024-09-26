import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import burger from "../Food/burger.jpg";
import ice_cream from "../Food/ice_cream.jpg";
import pizza from "../Food/pizza.png";
import pasta from "../Food/pasta.webp";
import sushi from "../Food/sushi.webp";
import Pagination from "./Pagination";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin); // Register the plugin

const MenuShowcase = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = window.innerWidth < 768; // Adjust the breakpoint as needed
  const itemsPerPage = isMobile ? 1 : 6; // Show 1 item on mobile, 6 on larger screens
  const menuItemsRef = useRef([]);
  const [hoveredItem, setHoveredItem] = useState(null); // Track hovered item

  // Menu items array
  const menuItems = [
    { id: 1, image: pizza, name: "Pizza", price: "$9.99" },
    { id: 2, image: burger, name: "Burgers", price: "$7.99" },
    { id: 3, image: ice_cream, name: "Ice Cream", price: "$4.99" },
    { id: 4, image: sushi, name: "Sushi", price: "$12.99" },
    { id: 5, image: pasta, name: "Pasta", price: "$11.99" },
    { id: 6, image: pizza, name: "Vegetable Pizza", price: "$8.99" },
    { id: 7, image: burger, name: "Cheeseburger", price: "$9.49" },
    { id: 8, image: ice_cream, name: "Chocolate Ice Cream", price: "$5.49" },
  ];

  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  // Calculate current items based on page number
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);

  // GSAP Animation on mount and page change
  useEffect(() => {
    menuItemsRef.current = []; // Reset refs on currentItems change
  }, [currentItems]);

  useEffect(() => {
    // Animate only if there are refs available
    if (menuItemsRef.current.length > 0) {
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.2 }
      );
    }
  }, [currentPage]);

  // Pagination handler function
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };
  // Hover handlers
  const handleMouseEnter = (id) => {
    setHoveredItem(id);
    const el = menuItemsRef.current[id - 1];
    gsap.to(el, { rotateY: 180, duration: 0.5 });
  };

  const handleMouseLeave = (id) => {
    setHoveredItem(null);
    const el = menuItemsRef.current[id - 1];
    gsap.to(el, { rotateY: 0, duration: 0.5 });
  };

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Menu</h2>

      {/* Display current menu items centered */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentItems.map((item) => (
            <div
              key={item.id}
              ref={(el) => (menuItemsRef.current[item.id - 1] = el)}
              className={`menu-showcase-item bg-white p-6 rounded-lg shadow-lg transition-transform transform ${
                hoveredItem === item.id ? "flip" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-110"
              />
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                Starting at {item.price}
              </p>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Left and Right Buttons for mobile view */}
      {isMobile && (
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-400 transition-colors duration-300"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-400 transition-colors duration-300"
          >
            Next
          </button>
        </div>
      )}

      {/* Pagination Component for larger screens */}
      {!isMobile && totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          className="hidden md:block mt-8" // Hide on mobile
        />
      )}
    </section>
  );
};

export default MenuShowcase;
