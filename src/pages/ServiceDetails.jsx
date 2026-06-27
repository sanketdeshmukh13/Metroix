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
// NABL
import nabl1 from "../assets/services/nabl/na1.jpg";
import nabl2 from "../assets/services/nabl/na2.jpg";
import nabl3 from "../assets/services/nabl/na3.jpg";
import nabl4 from "../assets/services/nabl/na4.jpeg";
// import nabl5 from "../assets/services/nabl/na5.jpg";

// NON NABL
import non1 from "../assets/services/nonnabl/no1.jpg";
import non2 from "../assets/services/nonnabl/no2.jpg";
import non3 from "../assets/services/nonnabl/no3.jpg";
import non4 from "../assets/services/nonnabl/no4.png";
// import non5 from "../assets/services/nonnabl/no5.jpg";

// METROLOGY
import metro1 from "../assets/services/metrology/me1.jpg";
import metro2 from "../assets/services/metrology/me2.jpg";
import metro3 from "../assets/services/metrology/me3.png";
import metro4 from "../assets/services/metrology/me4.png";
// import metro5 from "../assets/services/metrology/me5.jpg";

// NDT
import ndt1 from "../assets/services/ndt/ndt1.jpg";
import ndt2 from "../assets/services/ndt/ndt2.jpeg";
import ndt3 from "../assets/services/ndt/ndt3.jpeg";
import ndt4 from "../assets/services/ndt/ndt4.jpg";
// import ndt5 from "../assets/services/ndt/5.jpg";

// SPECIAL GAUGES
import gauge1 from "../assets/services/gauges/ga1.jpg";
import gauge2 from "../assets/services/gauges/ga2.png";
import gauge3 from "../assets/services/gauges/ga3.png";
import gauge4 from "../assets/services/gauges/ga4.png";
// import gauge5 from "../assets/services/gauges/5.jpg";

// REPAIR
import repair1 from "../assets/services/repair/re1.png";
import repair2 from "../assets/services/repair/re2.png";
import repair3 from "../assets/services/repair/re3.png";
import repair4 from "../assets/services/repair/re4.jpg";
// import repair5 from "../assets/services/repair/5.jpg";

// CNC
import cnc1 from "../assets/services/cnc/cnc1.png";
import cnc2 from "../assets/services/cnc/cnc2.jpg";
import cnc3 from "../assets/services/cnc/cnc3.jpg";
import cnc4 from "../assets/services/cnc/cnc4.jpg";
// import cnc5 from "../assets/services/cnc/cnc5.jpg";
function ServiceDetails() {
  const { serviceId } = useParams();

  const serviceData = {
    "nabl-calibration": {
      title: "NABL Calibration Services",

      description:
        "Metroix provides NABL accredited calibration services covering dimensional, pressure, temperature, electrical, mass, torque and various industrial calibration requirements.",

      images: [
        {
          img: nabl1,
          title: "Dimensional Calibration",
          desc: "High precision dimensional calibration for industrial measuring equipment.",
        },
        {
          img: nabl2,
          title: "Pressure Calibration",
          desc: "Accurate pressure calibration complying with NABL standards.",
        },
        {
          img: nabl3,
          title: "Temperature Calibration",
          desc: "Reliable temperature calibration ensuring consistent process control.",
        },
        {
          img: nabl4,
          title: "Electrical Calibration",
          desc: "Calibration of electrical instruments with certified accuracy.",
        },
        // {
        //   img: nabl5,
        //   title: "Torque Calibration",
        //   desc: "Precision torque calibration for manufacturing and assembly applications.",
        // },
      ],
    },

    "non-nabl-calibration": {
      title: "Non NABL Calibration Services",

      description:
        "Reliable and cost-effective calibration solutions for industries requiring routine equipment verification and compliance.",

      images: [
        {
          img: non1,
          title: "Routine Instrument Calibration",
          desc: "Reliable calibration services for measuring instruments to ensure consistent performance in daily industrial operations.",
        },
        {
          img: non2,
          title: "Equipment Performance Testing",
          desc: "Comprehensive testing and verification of industrial equipment for dependable operational accuracy.",
        },
        {
          img: non3,
          title: "Dimensional Verification",
          desc: "Inspection and dimensional verification of gauges and measuring tools to maintain production quality.",
        },
        {
          img: non4,
          title: "Industrial Equipment Inspection",
          desc: "Thorough inspection of instruments to identify deviations and improve operational efficiency.",
        },
        // {
        //   img: non5,
        //   title: "Preventive Calibration Support",
        //   desc: "Scheduled calibration services that help reduce downtime and extend the life of measuring equipment.",
        // },
      ],
    },
    "metrology-instruments": {
      title: "Metrology Measuring Instruments Sales",

      description:
        "Complete range of precision measuring instruments including calipers, micrometers, height gauges, dial indicators and more.",

      images: [
        {
          img: metro1,
          title: "Digital Vernier Calipers",
          desc: "High-precision digital calipers designed for accurate external, internal, and depth measurements.",
        },
        {
          img: metro2,
          title: "Outside Micrometers",
          desc: "Premium micrometers engineered for precise measurement of small components in manufacturing.",
        },
        {
          img: metro3,
          title: "Height Gauges",
          desc: "Precision height gauges suitable for layout work, inspection, and quality control applications.",
        },
        {
          img: metro4,
          title: "Dial Indicators",
          desc: "Reliable dial indicators for measuring displacement, alignment, flatness, and runout with high accuracy.",
        },
        // {
        //   img: metro5,
        //   title: "Precision Measuring Solutions",
        //   desc: "A complete range of metrology instruments from trusted manufacturers to meet industrial quality standards.",
        // },
      ],
    },

    "ndt-instruments": {
      title: "NDT Instruments & Gauges",

      description:
        "Supply of NDT instruments and gauges including plug gauges, ring gauges, taper gauges and thread gauges.",

      images: [
        {
          img: ndt1,
          title: "Plug Gauges",
          desc: "High-precision plug gauges designed to inspect hole dimensions and ensure compliance with industrial standards.",
        },
        {
          img: ndt2,
          title: "Ring Gauges",
          desc: "Premium ring gauges used for accurate inspection of external thread dimensions and component quality.",
        },
        {
          img: ndt3,
          title: "Thread Gauges",
          desc: "Reliable thread gauges that verify thread accuracy and maintain consistency in manufacturing processes.",
        },
        {
          img: ndt4,
          title: "Taper Gauges",
          desc: "Precision taper gauges for measuring tapered holes and components with exceptional accuracy.",
        },
        // {
        //   img: ndt5,
        //   title: "Industrial NDT Solutions",
        //   desc: "A comprehensive range of non-destructive testing instruments and gauges for quality inspection and process reliability.",
        // },
      ],
    },

    "special-gauges": {
      title: "Special Type Gauges",

      description:
        "Custom gauge manufacturing and supply based on client specifications and industrial standards.",

      images: [
        {
          img: gauge1,
          title: "Custom Plug Gauges",
          desc: "Precision-engineered custom plug gauges manufactured according to specific industrial requirements.",
        },
        {
          img: gauge2,
          title: "Special Ring Gauges",
          desc: "Custom-designed ring gauges developed for specialized inspection applications and tight tolerances.",
        },
        {
          img: gauge3,
          title: "Thread Inspection Gauges",
          desc: "Tailor-made thread gauges ensuring accurate verification of unique thread profiles and dimensions.",
        },
        {
          img: gauge4,
          title: "Profile & Form Gauges",
          desc: "Special profile gauges manufactured for complex component inspection and quality assurance.",
        },
        // {
        //   img: gauge5,
        //   title: "Customized Gauging Solutions",
        //   desc: "Complete design and manufacturing of special gauges to meet customer drawings and international quality standards.",
        // },
      ],
    },

    "repair-maintenance": {
      title: "Repair & Maintenance Services",

      description:
        "Professional servicing, maintenance and repair of all types of measuring instruments.",

      images: [
        {
          img: repair1,
          title: "Instrument Inspection & Diagnosis",
          desc: "Comprehensive inspection and fault diagnosis to identify performance issues and restore measurement accuracy.",
        },
        {
          img: repair2,
          title: "Precision Instrument Repair",
          desc: "Expert repair services for damaged or malfunctioning measuring instruments using high-quality replacement components.",
        },
        {
          img: repair3,
          title: "Preventive Maintenance",
          desc: "Scheduled maintenance solutions that improve equipment reliability, reduce unexpected failures, and extend service life.",
        },
        {
          img: repair4,
          title: "Calibration After Repair",
          desc: "Complete recalibration of repaired instruments to ensure compliance with industry standards and accurate performance.",
        },
        // {
        //   img: repair5,
        //   title: "On-Site Technical Support",
        //   desc: "Fast and dependable on-site maintenance support provided by experienced engineers to minimize production downtime.",
        // },
      ],
    },

    "cnc-tools": {
      title: "CNC / VMC / HMC Cutting Tools",

      description:
        "Premium cutting tools, holders, inserts, drills and industrial machining solutions.",

      images: [
        {
          img: cnc1,
          title: "Carbide Cutting Inserts",
          desc: "High-performance carbide inserts engineered for precision machining, extended tool life, and superior surface finishes.",
        },
        {
          img: cnc2,
          title: "CNC Tool Holders",
          desc: "Precision-balanced tool holders designed to provide maximum rigidity, stability, and machining accuracy.",
        },
        {
          img: cnc3,
          title: "Solid Carbide Drills & End Mills",
          desc: "Premium drilling and milling tools delivering exceptional cutting performance across a wide range of materials.",
        },
        {
          img: cnc4,
          title: "Indexable Milling Cutters",
          desc: "Efficient milling solutions for high-speed material removal, improved productivity, and consistent machining quality.",
        },
        // {
        //   img: cnc5,
        //   title: "Complete Machining Solutions",
        //   desc: "A comprehensive portfolio of CNC, VMC, and HMC cutting tools tailored to meet the demands of modern manufacturing industries.",
        // },
      ],
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

      {/* SERVICE GALLERY */}

      <section className="metroix-gallery">
        <h2 className="metroix-gallery-title">Our {service.title}</h2>

        <div className="metroix-gallery-grid">
          {service.images.map((item, index) => (
            <div className="metroix-gallery-card" key={index}>
              <img src={item.img} alt={item.title} />

              <div className="metroix-gallery-content">
                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
