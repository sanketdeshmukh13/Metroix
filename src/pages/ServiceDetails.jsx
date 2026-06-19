import { useParams } from "react-router-dom";
import {
  FaCheckCircle,
  FaIndustry,
  FaShieldAlt,
  FaClock,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/servicedetails.css";

function ServiceDetails() {
  const { serviceId } = useParams();

  const serviceData = {
    "nabl-calibration": {
      title: "NABL Calibration Services",
      description:
        "Metroix provides NABL accredited calibration services covering dimensional, pressure, temperature, electrical, mass, torque and various industrial calibration requirements.",
    },

    "non-nabl-calibration": {
      title: "Non NABL Calibration Services",
      description:
        "Reliable and cost-effective calibration solutions for industries requiring routine equipment verification and compliance.",
    },

    "metrology-instruments": {
      title: "Metrology Measuring Instruments Sales",
      description:
        "Complete range of precision measuring instruments including calipers, micrometers, height gauges, dial indicators and more.",
    },

    "ndt-instruments": {
      title: "NDT Instruments & Gauges",
      description:
        "Supply of NDT instruments and gauges including plug gauges, ring gauges, taper gauges and thread gauges.",
    },

    "special-gauges": {
      title: "Special Type Gauges",
      description:
        "Custom gauge manufacturing and supply based on client specifications and industrial standards.",
    },

    "repair-maintenance": {
      title: "Repair & Maintenance Services",
      description:
        "Professional servicing, maintenance and repair of all types of measuring instruments.",
    },

    "cnc-tools": {
      title: "CNC / VMC / HMC Cutting Tools",
      description:
        "Premium cutting tools, holders, inserts, drills and industrial machining solutions.",
    },
  };

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="metroix-service-page">
        <h1 style={{ textAlign: "center", padding: "150px 20px" }}>
          Service Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="metroix-service-page">
      {/* HERO */}

      <div className="metroix-service-hero">
        <div className="metroix-service-hero-content">
          <span>METROIX SERVICES</span>

          <h1>{service.title}</h1>

          <p>{service.description}</p>
        </div>
      </div>

      {/* OVERVIEW */}

      <div className="metroix-service-overview">
        <div className="metroix-service-overview-left">
          <h2>Service Overview</h2>

          <p>
            Metroix delivers high-quality industrial solutions backed by
            precision engineering, technical expertise, and industry standards.
            Our team ensures every project meets the highest quality and
            accuracy requirements.
          </p>

          <button className="metroix-service-btn">
            Request a Quote
            <FaArrowRight />
          </button>
        </div>

        <div className="metroix-service-feature-grid">
          <div className="metroix-feature-card">
            <FaShieldAlt />
            <h4>Certified Quality</h4>
          </div>

          <div className="metroix-feature-card">
            <FaClock />
            <h4>Fast Turnaround</h4>
          </div>

          <div className="metroix-feature-card">
            <FaTools />
            <h4>Expert Engineers</h4>
          </div>

          <div className="metroix-feature-card">
            <FaIndustry />
            <h4>Industry Support</h4>
          </div>
        </div>
      </div>

      {/* BENEFITS */}

      <section className="metroix-benefits">
        <h2 className="metroix-benefits-title">Key Benefits</h2>

        <div className="metroix-benefits-grid">
          <div className="metroix-benefit-card">
            <FaCheckCircle />
            <h4>Accurate Results</h4>
          </div>

          <div className="metroix-benefit-card">
            <FaCheckCircle />
            <h4>Compliance Assurance</h4>
          </div>

          <div className="metroix-benefit-card">
            <FaCheckCircle />
            <h4>Reduced Downtime</h4>
          </div>

          <div className="metroix-benefit-card">
            <FaCheckCircle />
            <h4>Long-Term Reliability</h4>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="metroix-process">
        <h2 className="metroix-process-title">Our Process</h2>

        <div className="metroix-process-grid">
          <div className="metroix-process-card">
            <span>01</span>
            <h4>Requirement Analysis</h4>
          </div>

          <div className="metroix-process-card">
            <span>02</span>
            <h4>Inspection & Evaluation</h4>
          </div>

          <div className="metroix-process-card">
            <span>03</span>
            <h4>Execution & Calibration</h4>
          </div>

          <div className="metroix-process-card">
            <span>04</span>
            <h4>Testing & Delivery</h4>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="metroix-industries">
        <h2 className="metroix-industries-title">Industries We Serve</h2>

        <div className="metroix-industries-grid">
          <div className="metroix-industry-box">Automotive</div>

          <div className="metroix-industry-box">Aerospace</div>

          <div className="metroix-industry-box">Manufacturing</div>

          <div className="metroix-industry-box">Oil & Gas</div>

          <div className="metroix-industry-box">Pharmaceutical</div>

          <div className="metroix-industry-box">Power & Energy</div>
        </div>
      </section>

      {/* CTA */}

      <section className="metroix-service-cta">
        <div className="metroix-service-cta-box">
          <h2>Need Professional Industrial Solutions?</h2>

          <p>
            Partner with Metroix for precision, reliability and unmatched
            technical expertise.
          </p>

          <button>Contact Our Experts</button>
        </div>
      </section>
    </section>
  );
}

export default ServiceDetails;
