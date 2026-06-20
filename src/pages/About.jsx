import "../styles/about.css";

import {
  FaCheckCircle,
  FaBullseye,
  FaEye,
  FaTools,
  FaCogs,
  FaSearch,
  FaRulerCombined,
  FaCube,
  FaArrowRight,
  FaUsers,
  FaAward,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

function About() {
  const industries = [
    "Manufacturing",
    "Automotive",
    "Aerospace",
    "Railways",
    "Power & Energy",
    "Defense",
    "Pharmaceutical",
    "Engineering",
  ];

  const solutions = [
    {
      icon: <FaShieldAlt />,
      title: "NABL Calibration",
    },
    {
      icon: <FaTools />,
      title: "Non NABL Calibration",
    },
    {
      icon: <FaRulerCombined />,
      title: "Metrology Instruments",
    },
    {
      icon: <FaSearch />,
      title: "NDT Instruments",
    },
    {
      icon: <FaBullseye />,
      title: "Gauges & Fixtures",
    },
    {
      icon: <FaTools />,
      title: "Repair & Maintenance",
    },
    {
      icon: <FaCogs />,
      title: "CNC Cutting Tools",
    },
    {
      icon: <FaCube />,
      title: "3D Modeling & Reverse Engineering",
    },
  ];

  return (
    <div className="mx-about-page">
      {/* HERO SECTION */}

      <section className="mx-about-hero">
        <div className="mx-about-content">
          <span className="mx-about-tag">
            MEASURING QUALITY • DELIVERING PERFECTION
          </span>

          <h1>
            Precision Metrology & Calibration Solutions For Modern Industries
          </h1>

          <p>
            NXTGR Metroix Technologies Pvt. Ltd. delivers industrial metrology,
            calibration, inspection, measurement and engineering solutions that
            help organizations achieve accuracy, compliance, productivity and
            operational excellence.
          </p>

          <div className="mx-hero-buttons">
            <button className="mx-primary-btn">
              Explore Services
              <FaArrowRight style={{ marginLeft: "8px" }} />
            </button>

            <button className="mx-secondary-btn">Contact Us</button>
          </div>
        </div>

        {/* FLOATING CARDS */}

        <div className="mx-floating-card mx-card1">
          <FaAward />
          <span>Industry Expertise</span>
        </div>

        <div className="mx-floating-card mx-card2">
          <FaUsers />
          <span>Trusted By Industries</span>
        </div>

        <div className="mx-floating-card mx-card3">
          <FaRocket />
          <span>Advanced Solutions</span>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}

      <section className="mx-company-section">
        <div className="mx-company-left">
          <span>WHO WE ARE</span>

          <h2>
            Engineering Precision.
            <br />
            Delivering Confidence.
          </h2>

          <p>
            Metroix is a leading provider of industrial metrology, calibration,
            inspection, measurement and engineering solutions.
          </p>

          <p>
            We serve manufacturing, automotive, aerospace, railways, power,
            defense and pharmaceutical industries with reliable measurement
            technologies and technical expertise.
          </p>

          <div className="mx-feature-list">
            <div className="mx-feature-item">
              <FaCheckCircle />
              <span>NABL & Non-NABL Calibration</span>
            </div>

            <div className="mx-feature-item">
              <FaCheckCircle />
              <span>Precision Measuring Instruments</span>
            </div>

            <div className="mx-feature-item">
              <FaCheckCircle />
              <span>Gauges & Fixtures</span>
            </div>

            <div className="mx-feature-item">
              <FaCheckCircle />
              <span>CNC / VMC / HMC Tooling Solutions</span>
            </div>
          </div>
        </div>

        <div className="mx-company-right">
          <div className="mx-image-box"></div>
        </div>
      </section>

      {/* VISION & MISSION */}

      <section className="mx-vision-mission">
        <div className="mx-vision-card">
          <FaEye />

          <h3>Our Vision</h3>

          <p>
            To become India's most trusted provider of metrology, calibration,
            quality assurance and industrial engineering solutions.
          </p>
        </div>

        <div className="mx-mission-card">
          <FaBullseye />

          <h3>Our Mission</h3>

          <p>
            Deliver accurate, reliable and cost-effective calibration, metrology
            and engineering solutions while maintaining the highest standards of
            customer satisfaction.
          </p>
        </div>
      </section>

      {/* STATS SECTION */}

      <section className="mx-stats">
        <div className="mx-stats-grid">
          <div className="mx-stat-card">
            <h2>500+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="mx-stat-card">
            <h2>100+</h2>
            <p>Industrial Clients</p>
          </div>

          <div className="mx-stat-card">
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>

          <div className="mx-stat-card">
            <h2>24/7</h2>
            <p>Technical Support</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="mx-about-cta">
        <div className="mx-about-cta-box">
          <h2>
            Ready To Improve
            <br />
            Your Measurement Accuracy?
          </h2>

          <p>
            Partner with Metroix for industry-leading calibration, metrology,
            inspection and engineering solutions tailored to your business
            requirements.
          </p>

          <div className="mx-hero-buttons">
            <button className="mx-primary-btn">Request A Quote</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
