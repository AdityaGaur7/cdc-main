import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-black", "text-white");
    } else {
      document.body.classList.remove("bg-black", "text-white");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 w-full bg-black text-white relative z-50">
      {/* Title */}
      <div className="flex items-center space-x-4">
        <span className="lg:text-2xl text-xl font-bold font-poppins tracking-wide">
          CODERS & DEVELOPERS CLUB
        </span>
      </div>

      {/* Desktop & Tablet Links */}
      <ul className="hidden lg:flex space-x-8 text-lg font-roboto-slab font-semibold">
        <li className="group">
          <NavLink
            to="/"
            className="hover:text-gray-300 transition-colors duration-300 block p-2"
          >
            Home
          </NavLink>
        </li>
        <li className="group">
          <NavLink
            to="events"
            className="hover:text-gray-300 transition-colors duration-300 block p-2"
          >
            Events
          </NavLink>
        </li>
        <li className="group">
          <NavLink
            to="team"
            className="hover:text-gray-300 transition-colors duration-300 block p-2"
          >
            Team
          </NavLink>
        </li>
        <li className="group">
          <NavLink
            to="contact"
            className="hover:text-gray-300 transition-colors duration-300 block p-2"
          >
            Contact
          </NavLink>
        </li>
        <li className="group">
          <NavLink
            to="dashboard"
            className="hover:text-gray-300 transition-colors duration-300 block p-2"
          >
            DashBoard
          </NavLink>
        </li>
        <li className="group">
          <NavLink
            to="createTeam"
            className="hover:text-gray-300 transition-colors duration-300 block p-2"
          >
            CreateTeam
          </NavLink>
        </li>
      </ul>

      {/* Login, Signup, and Dark Mode Toggle */}
      <div className="hidden lg:flex items-center space-x-4">
        <NavLink
          to="/login"
          className="text-lg font-roboto-slab font-semibold hover:text-gray-300 transition-colors duration-300 block p-2"
        >
          LOGIN
        </NavLink>
    
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden text-white text-2xl focus:outline-none"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile & Tablet Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 w-full h-screen bg-black bg-opacity-90 text-center py-4 lg:hidden">
          <li className="group">
            <NavLink
              to="/"
              className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2"
            >
              Home
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="events"
              className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2"
            >
              Events
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="team"
              className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2"
            >
              Team
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="verify"
              className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2"
            >
              Verify
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="contact"
              className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2"
            >
              Contact
            </NavLink>
          </li>
          <li className="group">
          <NavLink
            to="createTeam"
            className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2"
          >
            CreateTeam
          </NavLink>
        </li>
          <li>
            <NavLink
              to="/login"
              className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2"
            >
              LOGIN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2"
            >
              SIGNUP
            </NavLink>
          </li>
          <li>
            <label className="flex justify-center items-center cursor-pointer py-2">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={handleToggle}
                className="sr-only"
              />
              <div
                className={`w-14 h-8 rounded-full shadow-inner relative transition duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-600 to-purple-600"
                    : "bg-gradient-to-r from-yellow-400 to-sky-500"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                    isDarkMode
                      ? "translate-x-6 bg-black shadow-blue-500/50"
                      : "bg-white"
                  }`}
                >
                  {isDarkMode ? (
                    <FaMoon className="text-blue-300" size={14} />
                  ) : (
                    <FaSun className="text-yellow-500" size={14} />
                  )}
                </span>
              </div>
            </label>
          </li>
        </ul>
      )}
    </nav>
  );
};
