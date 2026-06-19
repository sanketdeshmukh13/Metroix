import { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* ================= LOGO ================= */}

        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-text">Metroix</span>
        </Link>

        {/* ================= DESKTOP MENU ================= */}

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>

          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>

          {/* MOBILE BUTTON */}

          <div className="mobile-btn-wrapper">
            <button className="nav-btn">
              Get Started
              <FaArrowRight />
            </button>
          </div>
        </ul>

        {/* ================= RIGHT SECTION ================= */}

        <div className="nav-right">
          <button className="nav-btn desktop-btn">
            Get Started
            <FaArrowRight />
          </button>

          {/* TOGGLE BUTTON */}

          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
