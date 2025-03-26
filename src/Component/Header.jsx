import React, { useState, useEffect, useRef } from "react";
import logo from "../Util/logo.jpg";
import { NavLink, useLocation, Link } from "react-router-dom";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-100 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 pr-10">
        <div className="flex items-center">
          <NavLink to={"/"}>
            <img src={logo} alt="logo-img" className="h-[45px] w-[95px] mr-5 bg-transparent" />
          </NavLink>
          <h1
            style={{ color: "#1E0065" }}
            className="font-roboto font-bold text-[18px] md:text-[30px] lg:text-[40px] ml-10 md:ml-3 cursor-pointer"
          >
            SKYPETEL GLOBAL HEALTHCARE
          </h1>
        </div>
        <button className="md:hidden text-blue-900 mt-2" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
        <nav className={`${isMobileMenuOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center items-center">
            {location.pathname !== "/" && (
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-custom-purple font-bold text-[18px] md:text-[18px] lg:text-[22px] border-b-2 border-blue-500"
                      : "text-custom-purple font-semibold text-[18px] md:text-[18px] lg:text-[22px] hover:text-blue-500 transition duration-300 relative group"
                  }
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            )}
            <li className="relative group" ref={dropdownRef}>
              <button
                className="text-blue-900 font-semibold text-[18px] md:text-[18px] lg:text-[20px] flex items-center"
                onClick={toggleDropdown}
              >
                About Us
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10 opacity-100 scale-100 transform transition-all duration-200 ease-in-out">
                  <Link to="/about-us" onClick={() => setIsDropdownOpen(false)}>
                    <li className="flex justify-center py-2 hover:bg-gray-200 cursor-pointer text-blue-900">
                      Our Mission
                    </li>
                  </Link>
                  <Link to="/about-us#core-values" onClick={() => setIsDropdownOpen(false)}>
                    <li className="flex justify-center py-2 hover:bg-gray-200 cursor-pointer text-blue-900">
                      Core Values
                    </li>
                  </Link>
                  <Link to="/about-us#unique-identity" onClick={() => setIsDropdownOpen(false)}>
                    <li className="flex justify-center py-2 hover:bg-gray-200 cursor-pointer text-blue-900">
                      Unique Identity
                    </li>
                  </Link>
                  <Link to="/about-us#purpose-statement" onClick={() => setIsDropdownOpen(false)}>
                    <li className="flex justify-center py-2 hover:bg-gray-200 cursor-pointer text-blue-900">
                      Purpose Statement
                    </li>
                  </Link>
                  <Link to="/our-products" onClick={() => setIsDropdownOpen(false)}>
                    <li className="flex justify-center py-2 hover:bg-gray-200 cursor-pointer text-blue-900">
                      Our Products
                    </li>
                  </Link>
                  <Link to="/contact-us" onClick={() => setIsDropdownOpen(false)}>
                    <li className="flex justify-center py-2 hover:bg-gray-200 cursor-pointer text-blue-900">
                      Contact Us
                    </li>
                  </Link>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/our-products"
                className={({ isActive }) =>
                  isActive
                    ? "text-custom-purple font-bold text-[18px] md:text-[18px] lg:text-[20px] border-b-2 border-blue-500"
                    : "text-custom-purple font-semibold text-[18px] md:text-[18px] lg:text-[20px] hover:text-blue-500 transition duration-300"
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
                    ? "text-custom-purple font-bold text-[18px] md:text-[18px] lg:text-[20px] border-b-2 border-blue-500"
                    : "text-custom-purple font-semibold text-[18px] md:text-[18px] lg:text-[20px] hover:text-blue-500 transition duration-300"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;