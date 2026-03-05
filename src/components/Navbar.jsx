import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaAngleDown,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpenMobile, setIsAboutOpenMobile] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsAboutOpenMobile(false);
    setIsServicesOpenMobile(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsAboutOpenMobile(false);
        setIsServicesOpenMobile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className={`bg-[#f7f3ea] border-b border-[#b98a32]/30 w-full relative pt-5`}
    >
      {/* Top contact bar desktop */}
      <div className="hidden lg:flex container mx-auto px-4 xl:px-6 justify-end items-center py-2 text-sm text-[#821b1f]">
        <div className="flex items-center gap-6 xl:gap-8">
          <a
            href="tel:9311560101"
            className="flex items-center gap-2 hover:text-[#b98a32] transition-colors duration-200 cursor-pointer"
            aria-label="Call us at 9311560101"
          >
            <FaPhoneAlt className="text-xs" />
            <span>9311560101</span>
          </a>
          <a
            href="mailto:info@dccpets.in"
            className="flex items-center gap-2 hover:text-[#b98a32] transition-colors duration-200 cursor-pointer"
            aria-label="Email us at info@dccpets.in"
          >
            <FaEnvelope className="text-xs" />
            <span>info@dccpets.in</span>
          </a>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/Petpals-logo.png"
            alt="Petpals Logo"
            className="w-[120px] sm:w-[150px] h-auto object-contain transition-transform duration-200 hover:scale-105"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(130, 27, 31, 0.2))'
            }}
          />
        </Link>

        {/* Right: User icon + Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/register"
            className="transition-transform duration-200 hover:scale-110"
            aria-label="User registration"
          >
            <FaUser className="bg-[#821b1f] rounded-full text-[#f7f3ea] p-2 hover:bg-[#b98a32] transition-colors duration-200" size={32} />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-[#821b1f] hover:text-[#b98a32] transition-all duration-200 p-1 ${
              isOpen ? 'rotate-90' : ''
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="lg:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setIsOpen(false)} />

          {/* Mobile Menu */}
          <div className="lg:hidden fixed top-[80px] left-0 right-0 z-50 bg-[#f7f3ea] border-t border-[#b98a32]/30 shadow-2xl min-h-[200px]">
            <div className="flex flex-col gap-1 px-4 py-4 max-h-[calc(100vh-120px)] overflow-y-auto">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`text-[#821b1f] font-medium hover:text-[#b98a32] hover:bg-[#b98a32]/10 px-4 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === '/' ? 'bg-[#b98a32]/20 text-[#b98a32]' : ''
                }`}
              >
                Home
              </Link>

              {/* About dropdown (mobile) */}
              <div className="relative">
                <button
                  onClick={() => setIsAboutOpenMobile(!isAboutOpenMobile)}
                  className="w-full flex justify-between items-center text-[#821b1f] font-medium hover:text-[#b98a32] hover:bg-[#b98a32]/10 px-4 py-3 rounded-lg transition-all duration-200"
                  aria-expanded={isAboutOpenMobile}
                >
                  <span>About</span>
                  <FaAngleDown className={`transition-transform duration-200 ${isAboutOpenMobile ? 'rotate-180' : ''}`} />
                </button>
                {isAboutOpenMobile && (
                  <div className="mt-1 ml-4 space-y-1 border-l-2 border-[#b98a32]/30 pl-4">
                    <Link
                      to="/about/team"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-lg transition-all duration-200 ${
                        location.pathname === '/about/team' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                      }`}
                    >
                      Team
                    </Link>
                    <Link
                      to="/about/mission"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-lg transition-all duration-200 ${
                        location.pathname === '/about/mission' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                      }`}
                    >
                      Mission
                    </Link>
                    <Link
                      to="/about/blog"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-lg transition-all duration-200 ${
                        location.pathname === '/about/blog' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                      }`}
                    >
                      Blog
                    </Link>
                    <Link
                      to="/about/contact"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-lg transition-all duration-200 ${
                        location.pathname === '/about/contact' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                      }`}
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </div>

              {/* Services dropdown mobile */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
                  className="w-full flex justify-between items-center text-[#821b1f] font-medium hover:text-[#b98a32] hover:bg-[#b98a32]/10 px-4 py-3 rounded-lg transition-all duration-200"
                  aria-expanded={isServicesOpenMobile}
                >
                  <span>Services</span>
                  <FaAngleDown className={`transition-transform duration-200 ${isServicesOpenMobile ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpenMobile && (
                  <div className="mt-1 ml-4 space-y-1 border-l-2 border-[#b98a32]/30 pl-4">
                    <Link
                      to="/service"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-lg transition-all duration-200 ${
                        location.pathname === '/service' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                      }`}
                    >
                      Offerings
                    </Link>
                    <Link
                      to="/services/packages"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-lg transition-all duration-200 ${
                        location.pathname === '/services/packages' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                      }`}
                    >
                      Packages
                    </Link>
                    <Link
                      to="/services/recommendations"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-lg transition-all duration-200 ${
                        location.pathname === '/services/recommendations' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                      }`}
                    >
                      Recommendations
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/referral"
                onClick={() => setIsOpen(false)}
                className={`text-[#821b1f] font-medium hover:text-[#b98a32] hover:bg-[#b98a32]/10 px-4 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === '/referral' ? 'bg-[#b98a32]/20 text-[#b98a32]' : ''
                }`}
              >
                Referral
              </Link>

              {/* Contact info for mobile */}
              <div className="border-t border-[#b98a32]/30 pt-4 mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <a
                    href="tel:9311560101"
                    className="flex items-center gap-2 text-[#821b1f] hover:text-[#b98a32] transition-colors duration-200"
                  >
                    <FaPhoneAlt className="text-sm" />
                    <span className="text-sm">9311560101</span>
                  </a>
                  <a
                    href="mailto:info@dccpets.in"
                    className="flex items-center gap-2 text-[#821b1f] hover:text-[#b98a32] transition-colors duration-200"
                  >
                    <FaEnvelope className="text-sm" />
                    <span className="text-sm">info@dccpets.in</span>
                  </a>
                </div>

                <a href="tel:9311560101" className="block">
                  <button className="w-full bg-[#821b1f] text-[#f7f3ea] px-6 py-3 text-sm font-semibold rounded-xl hover:bg-[#b98a32] transition-all duration-300 shadow-md whitespace-nowrap">
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Desktop Navbar */}
      <div className="hidden lg:flex container mx-auto px-4 xl:px-6 py-2 items-center justify-between border-b border-[#b98a32]/30">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src="/Petpals-logo.png"
            alt="Petpals Logo"
            className="w-[160px] xl:w-[180px] h-20 object-contain transition-transform duration-200 group-hover:scale-105"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(130, 27, 31, 0.2))'
            }}
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 xl:gap-8">
          {/* Home */}
          <Link
            to="/"
            className={`flex flex-col text-left hover:text-[#b98a32] transition-all duration-200 px-3 py-2 rounded-lg hover:bg-[#b98a32]/10 ${
              location.pathname === '/' ? 'text-[#b98a32]' : 'text-[#821b1f]'
            }`}
          >
            <span className="text-base font-medium">Home</span>
            <p className="text-xs opacity-70 leading-tight">Book An Appointment</p>
          </Link>

          {/* About dropdown (desktop hover) */}
          <div className="relative group">
            <button className={`flex flex-col items-start focus:outline-none px-3 py-2 rounded-lg hover:bg-[#b98a32]/10 transition-all duration-200 ${
              location.pathname.startsWith('/about') ? 'text-[#b98a32]' : 'text-[#821b1f]'
            }`}>
              <div className="flex items-center gap-1">
                <span className="text-base font-medium group-hover:text-[#b98a32] transition-colors duration-200">About</span>
                <FaAngleDown className="text-xs group-hover:rotate-180 transition-transform duration-200" />
              </div>
              <p className="text-xs opacity-70 leading-tight">Know Us Better</p>
            </button>

            {/* Dropdown menu of about*/}
            <div className="absolute pt-2 top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <ul className="bg-[#f7f3ea] w-48 shadow-xl rounded-lg border border-[#b98a32]/20 backdrop-blur-sm">
                <li>
                  <Link
                    to="/about/team"
                    className={`block px-4 py-3 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-t-lg transition-all duration-200 ${
                      location.pathname === '/about/team' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                    }`}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/mission"
                    className={`block px-4 py-3 hover:bg-[#821b1f] hover:text-[#f7f3ea] transition-all duration-200 ${
                      location.pathname === '/about/mission' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                    }`}
                  >
                    Mission
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/blog"
                    className={`block px-4 py-3 hover:bg-[#821b1f] hover:text-[#f7f3ea] transition-all duration-200 ${
                      location.pathname === '/about/blog' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/contact"
                    className={`block px-4 py-3 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-b-lg transition-all duration-200 ${
                      location.pathname === '/about/contact' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services dropdown desktop*/}
          <div className="relative group">
            <button className={`flex flex-col items-start focus:outline-none px-3 py-2 rounded-lg hover:bg-[#b98a32]/10 transition-all duration-200 ${
              location.pathname.startsWith('/service') ? 'text-[#b98a32]' : 'text-[#821b1f]'
            }`}>
              <div className="flex items-center gap-1">
                <span className="text-base font-medium group-hover:text-[#b98a32] transition-colors duration-200">Services</span>
                <FaAngleDown className="text-xs group-hover:rotate-180 transition-transform duration-200" />
              </div>
              <p className="text-xs opacity-70 leading-tight">Expert Care</p>
            </button>

            {/* Dropdown menu of services*/}
            <div className="absolute pt-2 top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <ul className="bg-[#f7f3ea] w-56 shadow-xl rounded-lg border border-[#b98a32]/20 backdrop-blur-sm">
                <li>
                  <Link
                    to="/service"
                    className={`block px-4 py-3 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-t-lg transition-all duration-200 ${
                      location.pathname === '/service' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                    }`}
                  >
                    Offerings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/packages"
                    className={`block px-4 py-3 hover:bg-[#821b1f] hover:text-[#f7f3ea] transition-all duration-200 ${
                      location.pathname === '/services/packages' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                    }`}
                  >
                    Packages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/recommendations"
                    className={`block px-4 py-3 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-b-lg transition-all duration-200 ${
                      location.pathname === '/services/recommendations' ? 'bg-[#821b1f] text-[#f7f3ea]' : 'text-[#821b1f]'
                    }`}
                  >
                    Recommendations
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Referral */}
          <Link
            to="/referral"
            className={`flex flex-col text-left hover:text-[#b98a32] transition-all duration-200 px-3 py-2 rounded-lg hover:bg-[#b98a32]/10 ${
              location.pathname === '/referral' ? 'text-[#b98a32]' : 'text-[#821b1f]'
            }`}
          >
            <span className="text-base font-medium">Referral</span>
            <p className="text-xs opacity-70 leading-tight">Share With Friends</p>
          </Link>

          {/* User Icon */}
          <Link
            to="/register"
            className="transition-transform duration-200 hover:scale-110 flex items-center"
            aria-label="User registration"
          >
            <FaUser className="bg-[#821b1f] rounded-full text-[#f7f3ea] p-2 hover:bg-[#b98a32] transition-colors duration-200" size={36} />
          </Link>

          {/* Call Now Button */}
          <a href="tel:9311560101" aria-label="Call us now">
            <button className="bg-[#821b1f] text-[#f7f3ea] px-6 xl:px-8 py-3 text-sm font-semibold rounded-2xl hover:bg-[#b98a32] hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Call Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;