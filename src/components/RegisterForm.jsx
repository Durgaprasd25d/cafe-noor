import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }
    onRegister(formData);
  };

  return (
    <div className="bg-[#f1e0c5] min-h-screen py-16 flex items-center justify-center">
      <div className="container mx-auto max-w-lg bg-[#4b3f30] p-8 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-bold mb-8 text-center text-[#d8c3a5]">
          Brew Your Account
        </h1>
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              className="block text-[#d8c3a5] text-sm font-medium mb-2"
              htmlFor="name"
            >
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
            <label
              className="block text-[#d8c3a5] text-sm font-medium mb-2"
              htmlFor="email"
            >
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

          {/* Password Input */}
          <div>
            <label
              className="block text-[#d8c3a5] text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Your Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[#d8c3a5] bg-transparent text-[#d8c3a5] placeholder-[#d8c3a5] focus:ring-2 focus:ring-[#e9c46a] focus:outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#e9c46a] text-[#4b3f30] font-bold rounded-full hover:bg-[#f4a261] focus:ring-2 focus:ring-[#f4a261] transition transform hover:scale-105"
            >
              Register
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-[#d8c3a5]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#e9c46a] hover:text-[#f4a261]">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
