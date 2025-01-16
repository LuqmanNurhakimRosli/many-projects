import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 px-2 py-4">
      <nav
        className={`w-1/2 mx-auto p-4 shadow-lg rounded-full ${
          darkMode ? "bg-gray-800" : "bg-white"
        } flex items-center justify-between`}
      >
        {/* Logo */}
        <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
          Digital Agency
        </div>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`flex-col md:flex-row flex items-center md:space-x-6 md:flex ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <a
            href="#home"
            className="hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300 px-3 py-2"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300 px-3 py-2"
          >
            Services
          </a>
          <a
            href="#testimonial"
            className="hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300 px-3 py-2"
          >
            Testimonial
          </a>
          <a
            href="#team"
            className="hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300 px-3 py-2"
          >
            Team
          </a>
          <a
            href="#contact"
            className="hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300 px-3 py-2"
          >
            Contact Us
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`cursor-pointer flex items-center justify-center w-12 h-6 rounded-full ${
            darkMode ? "bg-yellow-400" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
              darkMode ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
      </nav>
    </div>
  );
}
