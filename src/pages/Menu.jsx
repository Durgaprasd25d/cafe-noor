import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import menuImage from "../Food/menu.jpg";
import Item from "../components/Item";
import {menuItems} from "../utils/data";
import Pagination from "../components/Pagination";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1); // Default to 1 for small screens

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 6); // Update items per page on resize
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = menuItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Hero
        title="Discover Our Exclusive Menu"
        subtitle="Browse through our selection and find your next favorite dish."
        buttonLabel="Shop Now"
        bgImage={menuImage}
      />

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Menu</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default Menu;
