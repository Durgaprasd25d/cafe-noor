import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }
    onLogin();
  };

  return (
    <div className="bg-[#f1e0c5] min-h-screen py-16 flex items-center justify-center">
      <div className="container mx-auto max-w-lg bg-[#4b3f30] p-8 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-bold mb-8 text-center text-[#d8c3a5]">
          Welcome Back to Your Café!
        </h1>
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              className="block text-[#d8c3a5] text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
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
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 rounded-lg border border-[#d8c3a5] bg-transparent text-[#d8c3a5] placeholder-[#d8c3a5] focus:ring-2 focus:ring-[#e9c46a] focus:outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#e9c46a] text-[#4b3f30] font-bold rounded-full hover:bg-[#f4a261] focus:ring-2 focus:ring-[#f4a261] transition transform hover:scale-105"
            >
              Login
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-[#d8c3a5]">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#e9c46a] hover:text-[#f4a261]">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
