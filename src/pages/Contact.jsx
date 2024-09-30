import React, { useState } from "react";
import Hero from "../components/Hero"; // Adjust the import path as needed
import contact from "../Food/contact.webp";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example alert or API call can be added here
    alert(`Message sent from: ${formData.name}`);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Get in Touch"
        subtitle="We'd love to hear from you!"
        buttonLabel="Contact Us"
        bgImage={contact}
      />

      {/* Contact Form Section */}
      <div className="bg-[#f1e0c5] min-h-screen py-16 flex items-center justify-center">
        <div className="container mx-auto max-w-lg bg-[#4b3f30] p-8 rounded-3xl shadow-2xl">
          <h1 className="text-5xl font-bold mb-8 text-center text-[#d8c3a5]">
            Let's Brew a Connection
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-[#d8c3a5] text-sm font-medium mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#d8c3a5] bg-transparent text-[#d8c3a5] placeholder-[#d8c3a5] focus:ring-2 focus:ring-[#e9c46a] focus:outline-none transition"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-[#d8c3a5] text-sm font-medium mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#d8c3a5] bg-transparent text-[#d8c3a5] placeholder-[#d8c3a5] focus:ring-2 focus:ring-[#e9c46a] focus:outline-none transition"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-[#d8c3a5] text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#d8c3a5] bg-transparent text-[#d8c3a5] placeholder-[#d8c3a5] focus:ring-2 focus:ring-[#e9c46a] focus:outline-none transition"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#e9c46a] text-[#4b3f30] font-bold rounded-full hover:bg-[#f4a261] focus:ring-2 focus:ring-[#f4a261] transition transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
