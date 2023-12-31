import React, { useState } from "react";
import logo from "../../../assets/logoipsum.png";
import downarrow from "../../../assets/downarrow.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="xl:px-32">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="me-4 lg:me-12" />
          <div className="hidden lg:flex ml-auto">
            <div class="custom-select">
              <select
                name="solutions"
                id="solutions"
                className="all-nav-links ms-3 lg:ms-10"
              >
                <option value="solutions">Solutions</option>
                <option value="solutions1">Solutions 1</option>
                <option value="solutions2">Solutions 2</option>
                <option value="solutions3">Solutions 3</option>
              </select>
              <div class="select-icon feature-select-icon">
                <img src={downarrow} alt="Custom Select Icon" />
              </div>
            </div>

            <div class="custom-select ">
              <select
                name="features"
                id="features"
                className="all-nav-links ms-3 lg:ms-10"
              >
                <option value="features">Features</option>
                <option value="features1">Features 1</option>
                <option value="features2">Features 2</option>
                <option value="features3">Features 3</option>
              </select>
              <div class="select-icon feature-select-icon">
                <img src={downarrow} alt="Custom Select Icon" />
              </div>
            </div>

            <a href="/" className="all-nav-links  ms-3 lg:ms-9">
              Blogs
            </a>

            <div class="custom-select">
              <select name="about" id="about" className="all-nav-links">
                <option value="about">About</option>
                <option value="about1">About 1</option>
                <option value="about2">About 2</option>
                <option value="about3">About 3</option>
              </select>
              <div class="select-icon about-select-icon">
                <img src={downarrow} alt="Custom Select Icon" />
              </div>
            </div>
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
        <div className="flex lg:hidden">
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
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-start flex flex-col">
          <div class="custom-select">
              <select
                name="solutions"
                id="solutions"
                className="all-nav-links ms-3 lg:ms-10"
              >
                <option value="solutions">Solutions</option>
                <option value="solutions1">Solutions 1</option>
                <option value="solutions2">Solutions 2</option>
                <option value="solutions3">Solutions 3</option>
              </select>
              <div class="select-icon mobile-feature-select-icon">
                <img src={downarrow} alt="Custom Select Icon" />
              </div>
            </div>

            <div class="custom-select ">
              <select
                name="features"
                id="features"
                className="all-nav-links ms-3 lg:ms-10"
              >
                <option value="features">Features</option>
                <option value="features1">Features 1</option>
                <option value="features2">Features 2</option>
                <option value="features3">Features 3</option>
              </select>
              <div class="select-icon mobile-feature-select-icon">
                <img src={downarrow} alt="Custom Select Icon" />
              </div>
            </div>

            <a href="/" className="all-nav-links ms-3 lg:ms-10">
              Blogs
            </a>

            <div class="custom-select ms-3 lg:ms-10">
              <select name="about" id="about" className="all-nav-links">
                <option value="about">About</option>
                <option value="about1">About 1</option>
                <option value="about2">About 2</option>
                <option value="about3">About 3</option>
              </select>
              <div class="select-icon mobile-about-select-icon">
                <img src={downarrow} alt="Custom Select Icon" />
              </div>
            </div>

            <div className="flex justify-around pt-5 md:hidden">
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

export default Navbar;
