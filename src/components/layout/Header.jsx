import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import decodeTokenAndGetRole from '../../config/decodeToken'; // Adjust the import path

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const [userRole, setUserRole] = useState(''); // State for user role

  useEffect(() => {
    // Check login status
    const user = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!user); // If user exists, set to true

    // Decode the token and get the role
    const decodedRole = decodeTokenAndGetRole();
   
   
    if (decodedRole) {
      setUserRole(decodedRole.role); // Store the role in state
      
    }
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from local storage
    setIsLoggedIn(false); // Update state
    window.location.href = "/"; // Redirect to the home page
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
   
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

        {/* Conditionally Render 'Team' Section Based on Role */}
        {userRole == 'Team Leader' && (
          <li className="group">
            <NavLink
              to="team"
              className="hover:text-gray-300 transition-colors duration-300 block p-2"
            >
              Team
            </NavLink>
          </li>
        )}

        <li className="group">
          <NavLink
            to="contact"
            className="hover:text-gray-300 transition-colors duration-300 block p-2"
          >
            Contact
          </NavLink>
        </li>
        {isLoggedIn && ( // Conditionally render CreateTeam and Dashboard if logged in
          <>
            <li className="group">
              <NavLink
                to="dashboard"
                className="hover:text-gray-300 transition-colors duration-300 block p-2"
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
      </ul>

      {/* Profile & Logout */}
      <div className="hidden lg:flex items-center space-x-4">
        {isLoggedIn ? (
          <div className="relative">
            <img
              src="https://th.bing.com/th/id/OIP.lcdOc6CAIpbvYx3XHfoJ0gHaF3?w=259&h=205&c=7&r=0&o=5&pid=1.7" // Replace with actual image path
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <NavLink
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Profile
                </NavLink>
                { userRole == 'Team Leader' && 
                  <NavLink
                  to="/createTeam"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Team
                </NavLink>
                }
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <NavLink
            to="/login"
            className="text-lg font-roboto-slab font-semibold hover:text-gray-300 transition-colors duration-300 block p-2"
          >
            LOGIN
          </NavLink>
        )}
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

          {/* Conditionally Render 'Team' Section Based on Role */}
          {userRole !== "User" && (
            <li className="group">
              <NavLink
                to="team"
                className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2"
              >
                Team
              </NavLink>
            </li>
          )}

          <li className="group">
            <NavLink
              to="contact"
              className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2"
            >
              Contact
            </NavLink>
          </li>
          {isLoggedIn && (
            <>
              <li className="group">
                <NavLink
                  to="dashboard"
                  className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2 w-full text-left"
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink
                to="/login"
                className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2"
              >
                LOGIN
              </NavLink>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};
