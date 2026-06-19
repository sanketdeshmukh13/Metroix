import "../styles/about.css";

import {
  FaCheckCircle,
  FaUsers,
  FaLaptopCode,
  FaRocket,
  FaAward,
  FaGlobe,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

function About() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Modern scalable websites and web applications using advanced technologies.",
    },
    {
      icon: <FaRocket />,
      title: "Startup Solutions",
      desc: "Helping startups build premium digital products and launch successfully.",
    },
    {
      icon: <FaGlobe />,
      title: "Digital Branding",
      desc: "Creative branding and marketing strategies to grow online presence.",
    },
  ];

  const clients = [
    "TechNova",
    "SkyEdge",
    "VisionCraft",
    "Innovexa",
    "NextWave",
    "FutureStack",
  ];

  return (
    <div className="about-page">
      {/* ================= HERO SECTION ================= */}

      <section className="about-hero-section">
        <div className="hero-bg-glow"></div>

        <div className="about-hero-content">
          <div className="about-left">
            <span className="about-tag">🚀 ABOUT OUR COMPANY</span>

            <h1 className="about-title">
              Creating Powerful Digital Experiences For Modern Businesses
            </h1>

            <p className="about-description">
              We are a modern IT solutions company focused on delivering
              innovative digital products, premium user experiences and scalable
              business solutions for startups, enterprises and global brands.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Explore Services
                <FaArrowRight />
              </button>

              <button className="secondary-btn">Contact Us</button>
            </div>
          </div>

          <div className="about-right">
            <div className="about-image-circle"></div>

            <div className="floating-box box1">
              <FaAward />
              <span>Premium Quality</span>
            </div>

            <div className="floating-box box2">
              <FaUsers />
              <span>100+ Happy Clients</span>
            </div>

            <div className="floating-box box3">
              <FaRocket />
              <span>Innovative Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPANY SECTION ================= */}

      <section className="company-section">
        <div className="section-heading">
          <span>WHO WE ARE</span>
          <h2>Building Future-Ready Digital Solutions</h2>
        </div>

        <div className="company-container">
          <div className="company-image">
            <div className="company-image-box"></div>
          </div>

          <div className="company-content">
            <p>
              Our company specializes in creating modern digital solutions that
              combine creativity, strategy and advanced technologies. We help
              businesses establish strong online identities with impactful web
              experiences and scalable software solutions.
            </p>

            <p>
              With a passionate team of developers, designers and digital
              strategists, we focus on delivering high-quality products that
              improve customer engagement and business growth.
            </p>

            <div className="company-features">
              <div className="feature-card">
                <FaCheckCircle />
                <span>Modern Responsive Websites</span>
              </div>

              <div className="feature-card">
                <FaCheckCircle />
                <span>Advanced UI/UX Experiences</span>
              </div>

              <div className="feature-card">
                <FaCheckCircle />
                <span>SEO & Performance Optimization</span>
              </div>

              <div className="feature-card">
                <FaCheckCircle />
                <span>Secure & Scalable Applications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <h2>150+</h2>
            <p>Projects Delivered</p>
          </div>

          <div className="stat-card">
            <h2>100+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="stat-card">
            <h2>5+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <p>Client Support</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}

      <section className="about-services-section">
        <div className="section-heading">
          <span>OUR SERVICES</span>
          <h2>Premium Services We Provide</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <button className="service-btn">
                Learn More
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CLIENTS SECTION ================= */}

      <section className="clients-section">
        <div className="section-heading">
          <span>OUR CLIENTS</span>
          <h2>Trusted By Modern Businesses Worldwide</h2>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <FaStar />
              <h3>{client}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}

      <section className="mission-section">
        <div className="mission-overlay"></div>

        <div className="mission-content">
          <span>OUR MISSION</span>

          <h2>Empowering Businesses Through Technology & Innovation</h2>

          <p>
            Our mission is to help businesses grow digitally by delivering
            innovative solutions, premium designs and scalable technologies that
            create long-term success.
          </p>

          <button className="primary-btn">
            Get Started
            <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
