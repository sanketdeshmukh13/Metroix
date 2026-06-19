import { useNavigate } from "react-router-dom";
import {
  FaClipboardCheck,
  FaTachometerAlt,
  FaRulerCombined,
  FaSearch,
  FaBullseye,
  FaTools,
  FaCogs,
} from "react-icons/fa";

import "../styles/services.css";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: "nabl-calibration",
      icon: <FaClipboardCheck />,
      title: "NABL Calibration Services",
      description:
        "NABL accredited calibration services covering all major scopes.",
    },

    {
      id: "non-nabl-calibration",
      icon: <FaTachometerAlt />,
      title: "Non NABL Calibration Services",
      description:
        "Reliable and accurate calibration services for industrial equipment.",
    },

    {
      id: "metrology-instruments",
      icon: <FaRulerCombined />,
      title: "Metrology Measuring Instruments Sales",
      description: "Sales of precision metrology and measuring instruments.",
    },

    {
      id: "ndt-instruments",
      icon: <FaSearch />,
      title: "NDT Instruments & Gauges",
      description:
        "Plug gauges, ring gauges, taper plug gauges, thread plug gauges and more.",
    },

    {
      id: "special-gauges",
      icon: <FaBullseye />,
      title: "Special Type Gauges",
      description:
        "Manufacturing, sales and relation gauges for industrial applications.",
    },

    {
      id: "repair-maintenance",
      icon: <FaTools />,
      title: "Repair & Maintenance Services",
      description: "Repair and maintenance of all measuring instruments.",
    },

    {
      id: "cnc-tools",
      icon: <FaCogs />,
      title: "CNC / VMC / HMC Cutting Tools",
      description:
        "Sales and services of CNC, VMC, HMC cutting tools and accessories.",
    },
  ];

  return (
    <section className="services-page">
      <div className="services-header">
        <span>OUR SERVICES</span>

        <h1>
          Complete Calibration, Metrology &
          <br />
          Industrial Solutions
        </h1>

        <p>
          Metroix delivers precision calibration services, metrology
          instruments, gauges, maintenance solutions, and industrial tooling
          support for manufacturing and engineering industries.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => navigate(`/services/${service.id}`)}
          >
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <button>View Details →</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
