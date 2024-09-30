// MenuShowcase.js
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Item from "./Item";
import menuItems from "../utils/data";

gsap.registerPlugin(ScrollToPlugin);

const MenuShowcase = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const itemsPerPage = isMobile ? 1 : 6;
  const menuItemsRef = useRef([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    if (menuItemsRef.current.length > 0) {
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        onComplete: () => setCurrentPage(currentPage - 1),
      });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        onComplete: () => setCurrentPage(currentPage + 1),
      });
    }
  };

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
      <h2 className="text-4xl font-bold mb-8">Trending Menu</h2>

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Bestsellers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </div>

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
    </section>
  );
};

export default MenuShowcase;
