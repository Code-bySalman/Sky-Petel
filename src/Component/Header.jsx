import React, { useState, useEffect, useRef } from "react";
import logo from "src/util/logo.jpg";
import { NavLink, useLocation, Link } from "react-router-dom";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenuOpen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-blue-100">
      <div className="flex items-center">
        <NavLink to={"/"}>
          <img src={logo} alt="logo-img" className="h-[45px] w-[95px] mr-5 bg-transparent" />
        </NavLink>
        <h1
          style={{ color: "#1E0065" }}
          className="font-roboto font-bold text-[18px] ml-10 md:text-[40px] md:ml-3 cursor-pointer"
        >
          SKYPETEL GLOBAL HEALTHCARE
        </h1>
      </div>

      <button className="md:hidden text-blue-900 mt-2" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      <nav
        className={`${isMobileMenuOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center items-center">
          {location.pathname !== "/" && (
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-custom-purple font-bold text-[18px] md:text-[22px] border-b-2 border-blue-500"
                    : "text-custom-purple font-semibold text-[18px] md:text-[22px] hover:text-blue-500 transition duration-300 relative group"
                }
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          )}

          <li className="relative group" ref={dropdownRef}>
            <button
              className="text-blue-900 font-semibold text-[18px] md:text-[20px] flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-custom-purple font-bold text-[18px] md:text-[20px] border-b-2 border-blue-500"
                    : "text-custom-purple font-semibold text-[18px] md:text-[20px] hover:text-blue-500 transition duration-300"
                }
              >
                About Us
              </NavLink>
              <ChevronDownIcon className="w-4 h-4 ml-2" />
            </button>

            {/* About Us Dropdown (now conditionally rendered) */}
            {isDropdownOpen && (
              <ul
                className={`absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10 
                  opacity-100 scale-100 
                  transform transition-all duration-200 ease-in-out`}
              >
                <Link to={"/about-us"} onClick={closeDropdown}>
                  <li className="flex justify-center py-2 hover:bg-gray-200 cursor-pointer text-blue-900">
                    Our Mission
                  </li>
                </Link>
                <Link to={"/about-us#core-values"} onClick={closeDropdown}>
                  <li className="flex justify-center py-2 hover:bg-gray-200 cursor-pointer text-blue-900">
                    Core Values
                  </li>
                </Link>
                <Link to={"/about-us#unique-identity"} onClick={closeDropdown}>
                  <li className="flex justify-center py-2 hover:bg-gray-200 cursor-pointer text-blue-900">
                    Unique Identity
                  </li>
                </Link>
                <Link
                  to={"/about-us#purpose-statement"}
                  onClick={closeDropdown}
                >
                  <li className="flex justify-center py-2 hover:bg-gray-200 cursor-pointer text-blue-900">
                    Purpose Statement
                  </li>
                </Link>
                <Link to={"/our-products"} onClick={closeDropdown}>
                  <li className="flex justify-center py-2 hover:bg-gray-200 cursor-pointer text-blue-900">
                    Our Products
                  </li>
                </Link>
                <Link to={"/contact-us"} onClick={closeDropdown}>
                  <li className="flex justify-center py-2 hover:bg-gray-200 cursor-pointer text-blue-900">
                    Contact Us
                  </li>
                </Link>
              </ul>
            )}
          </li>

          {/* Certifications, Our Products, and Contact Us Links */}
          
          <li>
            <NavLink
              to="/our-products"
              className={({ isActive }) =>
                isActive
                  ? "text-custom-purple font-bold text-[18px] md:text-[20px] border-b-2 border-blue-500"
                  : "text-custom-purple font-semibold text-[18px] md:text-[20px] hover:text-blue-500 transition duration-300"
              }
            >
              Our Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-custom-purple font-bold text-[18px] md:text-[20px] border-b-2 border-blue-500"
                  : "text-custom-purple font-semibold text-[18px] md:text-[20px] hover:text-blue-500 transition duration-300"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;