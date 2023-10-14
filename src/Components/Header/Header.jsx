import React, { useState } from "react";
import logo from "../../assets/logoipsum.png";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border border-red-500 xl:px-32">
      <div className="flex items-center justify-between h-16 border border-red-500">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="me-4 lg:me-12" />
          <div className="hidden md:flex ml-auto">
            <select name="cars" id="cars" className="all-nav-links">
              <option value="volvo">Solutions</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars" className="all-nav-links ms-3 lg:ms-10">
              <option value="volvo">Features</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <a href="/" className="all-nav-links  ms-3 lg:ms-10">
              Blogs
            </a>
            <a href="/" className="all-nav-links  ms-3 lg:ms-10">
              About
            </a>
            {/* <a href="/" className="all-nav-links  ms-3 lg:ms-10">
              Contact
            </a> */}
          </div>
        </div>
        <div className="hidden md:flex space-x-2 lg:space-x-4">
          <a href="/login" className="login">
            Login
          </a>
          <a href="/register" className="register">
            Register
          </a>
        </div>
        <div className="flex md:hidden">
          <a
            onClick={toggleNavbar}
            href="#"
            className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-none focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </a>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-start flex flex-col">
            <select name="cars" id="cars" className="all-nav-links">
              <option value="volvo">Solutions</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars" className="all-nav-links">
              <option value="volvo">Features</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <a href="/" className="all-nav-links ml-[5px]">
              Blogs
            </a>
            <a href="/" className="all-nav-links ml-[5px]">
              About
            </a>
            {/* <a href="/" className="all-nav-links ml-[5px]">
              Contact
            </a> */}
            <div className="flex justify-around pt-5">
            <a href="/login" className="login">
            Login
          </a>
          <a href="/register" className="register">
            Register
          </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
