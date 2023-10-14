import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import './Footer.css'
import logo from '../../../assets/footerlogo.png'

const Footer = () => {
  return (
    <footer className="footer text-white px-4 xl:px-32 py-8">
      <div className="xl:hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Footer Columns */}
        <div className="ps-12 lg:ps-0">
          <img src={logo} alt="" className="mb-4"/>
          <p className="footer-text">India's first platform dedicated to <br /> simplifying partner search</p>
        </div>

        <div className="ps-12 lg:ps-0">
          <p className="footer-title mb-4">COMPANY</p>
          <p className="footer-text mb-4">About </p>
          <p className="footer-text mb-4">Pricing</p>
          <p className="footer-text">Careers</p>
        </div>

        <div className="ps-12 lg:ps-0">
          <p className="footer-title mb-4">SOLUTIONS</p>
          <p className="footer-text mb-4">Search</p>
          <p className="footer-text mb-4">Connect</p>
          <p className="footer-text mb-4">Research</p>
          <p className="footer-text">Academy</p>
        </div>

        <div className="ps-12 lg:ps-0">
          <p className="footer-title mb-4">RESOURCES</p>
          <p className="footer-text mb-4">Blogs</p>
          <p className="footer-text">Forms</p>
        </div>

        <div className="ps-12 lg:ps-0">
          <p className="footer-title mb-4">SUPPORT</p>
          <p className="footer-text mb-4">Help</p>
          <p className="footer-text">Contact Us</p>
        </div>

        <div className="ps-12 lg:ps-0">
          <p className="footer-title mb-4">LEGAL</p>
          <p className="footer-text mb-4">Privacy</p>
          <p className="footer-text mb-4">Terms</p>
          <p className="footer-text">Accessibility</p>
        </div>
      </div>

      <hr className="my-8"/>

      {/* Copyright text and social icons */}
      <div className="container mx-auto flex justify-between flex-col md:flex-row items-center mt-4">
        <p className="footer-text mb-4 md:mb-0 text-center">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#">
            <FaFacebook size={24} />
          </a>
          <a href="#">
            <FaInstagram size={24} />
          </a>
          <a href="#">
            <FaLinkedin size={24} />
          </a>
          <a href="#">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
      </div>
      <div className="hidden xl:block">
      <div className="w-full flex justify-between">
        {/* Footer Columns */}
        <div className="ps-12 lg:ps-0">
          <img src={logo} alt="" className="mb-4"/>
          <p className="footer-text">India's first platform dedicated to <br /> simplifying partner search</p>
        </div>

        <div className="ps-12 lg:ps-0">
          <p className="footer-title mb-4">COMPANY</p>
          <p className="footer-text mb-4">About </p>
          <p className="footer-text mb-4">Pricing</p>
          <p className="footer-text">Careers</p>
        </div>

        <div className="ps-12 lg:ps-0">
          <p className="footer-title mb-4">SOLUTIONS</p>
          <p className="footer-text mb-4">Search</p>
          <p className="footer-text mb-4">Connect</p>
          <p className="footer-text mb-4">Research</p>
          <p className="footer-text">Academy</p>
        </div>

        <div className="ps-12 lg:ps-0">
          <p className="footer-title mb-4">RESOURCES</p>
          <p className="footer-text mb-4">Blogs</p>
          <p className="footer-text">Forms</p>
        </div>

        <div className="ps-12 lg:ps-0">
          <p className="footer-title mb-4">SUPPORT</p>
          <p className="footer-text mb-4">Help</p>
          <p className="footer-text">Contact Us</p>
        </div>

        <div className="ps-12 lg:ps-0">
          <p className="footer-title mb-4">LEGAL</p>
          <p className="footer-text mb-4">Privacy</p>
          <p className="footer-text mb-4">Terms</p>
          <p className="footer-text">Accessibility</p>
        </div>
      </div>

      <hr className="my-8"/>

      {/* Copyright text and social icons */}
      <div className="container mx-auto flex justify-between flex-col md:flex-row items-center mt-4">
        <p className="footer-text mb-4 md:mb-0 text-center">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#">
            <FaFacebook size={24} />
          </a>
          <a href="#">
            <FaInstagram size={24} />
          </a>
          <a href="#">
            <FaLinkedin size={24} />
          </a>
          <a href="#">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
