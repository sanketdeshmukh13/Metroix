import { Link } from "react-router-dom";
import {
  FaTools,
  FaMicroscope,
  FaIndustry,
  FaDraftingCompass,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
  FaBullseye,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

import { useState, useEffect } from "react";

import automotiveImg from "../assets/images/automotivee.jpg";
import aerospaceImg from "../assets/images/aerospace.jpg";
import manufacturingImg from "../assets/images/manufacturing.jpg";
import defenseImg from "../assets/images/defence.jpg";
import railwaysImg from "../assets/images/railways.jpg";
import powerImg from "../assets/images/power.jpg";
import pharmaImg from "../assets/images/pharma.jpg";
import engineeringImg from "../assets/images/engineering.jpg";

import "../styles/home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
function Home() {
  const services = [
    {
      icon: <FaMicroscope />,
      title: "Calibration Services",
      desc: "NABL & Non-NABL calibration solutions with traceable standards and quick turnaround.",
    },
    {
      icon: <FaTools />,
      title: "Precision Instruments",
      desc: "High-accuracy measuring instruments for manufacturing and quality inspection.",
    },
    {
      icon: <FaShieldAlt />,
      title: "NDT Solutions",
      desc: "Advanced non-destructive testing equipment for quality and safety assurance.",
    },
    {
      icon: <FaIndustry />,
      title: "Gauges & Fixtures",
      desc: "Custom inspection gauges, fixtures, and production tools engineered for precision.",
    },
    {
      icon: <FaChartLine />,
      title: "Repair & Maintenance",
      desc: "Professional repair and preventive maintenance to maximize equipment life.",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Reverse Engineering",
      desc: "3D modeling and reverse engineering services for product development.",
    },
  ];

  const industries = [
    {
      title: "Automotive",
      image: automotiveImg,
      desc: "Precision measurement solutions for automotive manufacturing and quality control.",
    },

    {
      title: "Aerospace",
      image: aerospaceImg,
      desc: "Advanced inspection and calibration systems for aerospace industries.",
    },

    {
      title: "Manufacturing",
      image: manufacturingImg,
      desc: "Reliable metrology solutions that improve production efficiency.",
    },

    {
      title: "Defense",
      image: defenseImg,
      desc: "Accurate testing and measurement equipment for defense applications.",
    },

    {
      title: "Railways",
      image: railwaysImg,
      desc: "Inspection and maintenance tools supporting railway infrastructure.",
    },

    {
      title: "Power",
      image: powerImg,
      desc: "Industrial measurement systems for power generation and distribution.",
    },

    {
      title: "Pharmaceuticals",
      image: pharmaImg,
      desc: "High precision instruments ensuring pharmaceutical quality standards.",
    },

    {
      title: "Engineering",
      image: engineeringImg,
      desc: "Complete engineering metrology and reverse engineering services.",
    },
  ];
  const advantages = [
    "Industry Experienced Team",
    "Reliable Technical Support",
    "Fast Delivery & Response",
    "Advanced Measuring Solutions",
    "Customer-Centric Approach",
    "Quality Compliance Standards",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === industries.length - 1 ? 0 : prev + 1,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [industries.length]);

  return (
    <div className="home">
      {/* HERO SECTION */}

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <span className="hero-tag">
            Measuring Quality • Delivering Perfection
          </span>

          <h1>
            Precision Metrology &<span> Industrial Engineering Solutions</span>
          </h1>

          <p>
            Metroix delivers advanced calibration, inspection, measurement, NDT
            equipment, gauges, fixtures, machining tools and engineering
            solutions that help industries achieve superior quality,
            productivity and compliance.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">
              Explore Services
            </Link>

            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <h3>100%</h3>
              <p>Quality Focused</p>
            </div>

            <div>
              <h3>8+</h3>
              <p>Industrial Sectors</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>Technical Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="about-section container">
        <div className="section-header">
          <span>ABOUT METROIX</span>
          <h2>Your Trusted Industrial Measurement Partner</h2>
        </div>

        <div className="about-grid">
          <div>
            <p>
              NXTGR Metroix Technologies Pvt. Ltd. is a leading provider of
              industrial metrology, calibration, inspection, measurement and
              engineering solutions.
            </p>

            <p>
              We support industries with reliable measuring instruments, NDT
              equipment, gauges, fixtures, machining tools and technical
              services designed to improve operational efficiency and product
              quality.
            </p>
          </div>

          <div className="about-card">
            <h3>Why Metroix?</h3>

            {advantages.map((item, index) => (
              <div className="advantage" key={index}>
                <FaCheckCircle />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span>OUR SERVICES</span>
            <h2>Comprehensive Industrial Solutions</h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.desc}</p>

                <Link to="/services">
                  Learn More
                  <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}

      <section className="industries-section">
        <div className="industries-left">
          <span>INDUSTRIES</span>

          <h2>We Serve</h2>

          <p>
            Metroix provides precision measurement, calibration and engineering
            solutions across multiple industries.
          </p>
        </div>

        <div className="industries-right">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={25}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 1.3,
              },

              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index}>
                <div className="industry-card">
                  <img src={industry.image} alt={industry.title} />

                  <div className="industry-content">
                    <h3>{industry.title}</h3>

                    <p>{industry.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* VISION & MISSION */}

      <section className="vision-mission">
        <div className="container vm-grid">
          <div className="vm-card">
            <FaBullseye />

            <h3>Our Vision</h3>

            <p>
              To become India's most trusted provider of metrology, calibration,
              quality assurance and engineering solutions.
            </p>
          </div>

          <div className="vm-card">
            <FaRocket />

            <h3>Our Mission</h3>

            <p>
              Deliver reliable, accurate and innovative measurement technologies
              while maintaining exceptional customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="stats-section">
        <div className="container stats-grid">
          <div>
            <h2>500+</h2>
            <p>Projects Supported</p>
          </div>

          <div>
            <h2>100+</h2>
            <p>Industrial Clients</p>
          </div>

          <div>
            <h2>99%</h2>
            <p>Client Satisfaction</p>
          </div>

          <div>
            <h2>8+</h2>
            <p>Industries Served</p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="cta-section">
        <div className="container">
          <h2>Ready To Improve Accuracy & Quality Performance?</h2>

          <p>
            Partner with Metroix for world-class calibration, metrology and
            engineering solutions.
          </p>

          <Link to="/contact" className="btn-primary">
            Get A Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
