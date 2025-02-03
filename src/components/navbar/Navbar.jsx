import React, { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full shadow-md fixed top-0 z-50 rounded-2xl px-6 py-4 backdrop-blur-lg bg-gradient-to-r  via-blue-900">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section: Social Media Links */}
        <div className="flex items-center gap-4 text-white">
          <span className="font-bold text-sm md:text-base">FOLLOW</span>
          <a href="#" className="hover:text-blue-300">
            <i className="fab fa-facebook-f">F</i>
          </a>
          <a href="#" className="hover:text-blue-300">
            <i className="fab fa-instagram">I</i>
          </a>
          <a href="#" className="hover:text-blue-300">
            <i className="fab fa-linkedin-in">L</i>
          </a>
          <a href="#" className="hover:text-blue-300">
            <i className="fab fa-times">X</i>
          </a>
        </div>

        {/* Center Section: Logo */}
        <div className="text-center">
          <h1 className="font-bold text-lg md:text-xl text-white">
            <span className="text-blue-400">DAWN</span>{" "}
            <span className="text-pink-500">FEST</span>
            <small className="block text-xs md:text-sm text-purple-300">
              powered by
            </small>
            <span className="text-pink-600 font-bold">WEBPRO SCHOOL</span>
          </h1>
        </div>

        {/* Right Section: Menu */}
        <div className="flex items-center gap-2 relative">
          <span
            className="font-bold text-sm md:text-base text-white cursor-pointer"
            onClick={toggleMenu}
          >
            Menu
          </span>
          <Menu
            className="h-6 w-6 text-pink-500 hover:text-blue-300 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Full-Width Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-27 left-0 w-full backdrop-blur-lg bg-gradient-to-r  via-blue-900 shadow-md py-6 px-8 z-40"
        >
          <div className="grid grid-cols-3 gap-6 text-center text-white">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Partners</h3>
              <h3 className="font-bold text-lg">Roadshow</h3>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Volunteer Program</h3>
              <h3 className="font-bold text-lg">VIP Experience</h3>
              <h3 className="font-bold text-lg">Visit Pakistan</h3>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Speakers</h3>
              <h3 className="font-bold text-lg">Agenda</h3>
              <h3 className="font-bold text-lg">Contact Us</h3>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
