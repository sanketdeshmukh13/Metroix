import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaIndustry,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      {/* TOP GLOW */}

      <div className="footer-glow"></div>

      {/* NEWSLETTER */}

      <div className="footer-newsletter">
        <div className="newsletter-content">
          <span>METROIX TECHNOLOGIES</span>

          <h2>Precision Engineering Starts Here</h2>

          <p>
            Partner with Metroix for advanced calibration, metrology,
            inspection, measurement and engineering solutions that improve
            quality, accuracy and productivity.
          </p>
        </div>

        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />

          <button>
            Subscribe
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* MAIN FOOTER */}

      <div className="footer-container">
        {/* COMPANY INFO */}

        <div className="footer-column company-column">
          <div className="footer-logo-wrap">
            <FaIndustry />
            <h2 className="footer-logo">METROIX</h2>
          </div>

          <p>
            NXTGR Metroix Technologies Pvt. Ltd. is a trusted provider of
            industrial metrology, calibration, inspection and engineering
            solutions helping industries achieve precision, compliance and
            operational excellence.
          </p>

          <div className="social-icons">
            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}

        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}

        <div className="footer-column">
          <h3>Our Services</h3>

          <ul>
            <li>Calibration Services</li>

            <li>Precision Instruments</li>

            <li>NDT Solutions</li>

            <li>Gauges & Fixtures</li>

            <li>Repair & Maintenance</li>

            <li>Reverse Engineering</li>
          </ul>
        </div>

        {/* INDUSTRIES */}

        <div className="footer-column">
          <h3>Industries Served</h3>

          <ul>
            <li>Automotive</li>

            <li>Aerospace</li>

            <li>Manufacturing</li>

            <li>Defense</li>

            <li>Railways</li>

            <li>Power & Energy</li>
          </ul>
        </div>

        {/* CONTACT */}

        <div className="footer-column">
          <h3>Contact Info</h3>

          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Aurangabad, Maharashtra, India</span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <span>info@metroix.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">
        <p>© 2026 NXTGR Metroix Technologies Pvt. Ltd. All Rights Reserved.</p>

        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>

          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
