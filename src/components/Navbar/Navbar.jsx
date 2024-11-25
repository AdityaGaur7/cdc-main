import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

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
        <span className="lg:text-2xl  text-xl font-bold font-poppins tracking-wide">
          CODERS & DEVELOPERS CLUB
        </span>
      </div>

      {/* Desktop & Tablet Links */}
      <ul className="hidden lg:flex space-x-8 text-lg font-roboto-slab font-semibold">
        {["HOME", "CONTACT", "TEAM", "EVENTS", "PROFILE"].map((item) => (
          <li key={item} className="group">
            <a
              href="#"
              className="hover:bg-white hover:text-black transition-colors duration-300 block p-2"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button (Visible on mobile & tablet) */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden text-white text-2xl focus:outline-none"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Login and Dark Mode Toggle - Always Visible */}
      <div className="hidden lg:flex items-center space-x-4">
        <a
          href="/login"
          className="text-lg font-roboto-slab font-semibold hover:bg-white hover:text-black transition-colors duration-300 block p-2"
        >
          LOGIN
        </a>
        <a
          href="/register"
          className="text-lg font-roboto-slab font-semibold hover:bg-white hover:text-black transition-colors duration-300 block p-2"
        >
          SIGNUP
        </a>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleToggle}
            className="sr-only"
          />
          <div
            className={`w-14 h-8 rounded-full shadow-inner relative transition duration-300 ${isDarkMode
                ? "bg-gradient-to-r from-blue-600 to-purple-600"
                : "bg-gradient-to-r from-yellow-400 to-sky-500"
              }`}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${isDarkMode
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
      </div>

      {/* Mobile & Tablet Menu - Only visible on smaller screens */}
      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 w-full h-screen  bg-black bg-opacity-90 text-center py-4 lg:hidden">
          {["HOME", "CONTACT", "TEAM", "EVENTS", "PROFILE"].map((item) => (
            <li key={item} className="group">
              <a
                href="#"
                className="text-white text-lg font-roboto-slab hover:bg-white hover:text-black transition-colors duration-300 block py-2"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/login"
              className="text-white text-lg font-roboto-slab hover:bg-white hover:text-black transition-colors duration-300 block py-2"
            >
              LOGIN
            </a>
            <a
              href="/register"
              className="text-white text-lg font-roboto-slab hover:bg-white hover:text-black transition-colors duration-300 block py-2"
            >
              SIGNUP
            </a>
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
                className={`w-14 h-8 rounded-full shadow-inner relative transition duration-300 ${isDarkMode
                    ? "bg-gradient-to-r from-blue-600 to-purple-600"
                    : "bg-gradient-to-r from-yellow-400 to-sky-500"
                  }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${isDarkMode
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
