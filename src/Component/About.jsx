import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MissionSlider from "./MissionSlider";
import { FaHeartbeat, FaLightbulb, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      if (location.hash) {
        const elementId = location.hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 50, behavior: "smooth" });
        }
      }
    };

    scrollToSection();
    window.addEventListener("hashchange", scrollToSection);
    return () => window.removeEventListener("hashchange", scrollToSection);
  }, [location]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  const coreValues = [
    {
      title: "Patient-Centricity",
      description: "Our patients are at the heart of everything we do. We listen to their needs and prioritize their health, comfort, and safety.",
      icon: <FaHeartbeat className="text-red-500 text-4xl mb-3" />
    },
    {
      title: "Innovation",
      description: "We invest in research and development to discover breakthrough solutions and redefine what’s possible in healthcare.",
      icon: <FaLightbulb className="text-yellow-500 text-4xl mb-3" />
    },
    {
      title: "Integrity",
      description: "Our actions are guided by strong moral principles, transparency, and a commitment to honesty.",
      icon: <FaShieldAlt className="text-blue-500 text-4xl mb-3" />
    },
    {
      title: "Collaboration",
      description: "We value partnerships, open communication, shared goals, and a multidisciplinary approach to drive impactful change.",
      icon: <FaHandsHelping className="text-green-500 text-4xl mb-3" />
    }
  ];

  return (
    <div className="w-full pb-12">
      <MissionSlider
        title="Our Mission"
        description="At Skypetel Global Healthcare Pvt Ltd, our leadership team brings over 37 years of extensive experience in establishing top healthcare brands. With a strong emphasis on team leadership, innovative marketing strategies, and effective customer partnership management, our directors possess deep expertise in the healthcare industry. Their proven skills and unwavering dedication to excellence pave the way for a promising future.

          We believe in harnessing the power of technology to enhance patient care and streamline healthcare processes. Our team of experienced professionals is committed to delivering high-quality medical services.

          Our mission is to bridge the gap in healthcare accessibility and improve health outcomes for individuals and communities. We strive to empower patients through education, support, and cutting-edge technology, ensuring that quality healthcare is within reach for everyone.
          Our commitment goes beyond delivering products; we aim to create trust and hope through every step of our journey. As we expand our global footprint, we remain focused on making healthcare affordable, safe, and effective for diverse populations and contribute towards a healthier, more equitable world."
      />

      {/* Section Container */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Core Values Section */}
        <motion.section
          id="core-values"
          className="py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all"
              >
                {value.icon}
                <h3 className="text-xl font-semibold mt-3">{value.title}</h3>
                <p className="text-blue-600 mt-2">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Unique Identity Section */}
        <motion.section
          id="unique-identity"
          className="py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
            Our Unique Identity
          </h2>
          <div className="flex flex-col space-y-6">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <p className="text-lg font-medium text-blue-900">
                We are more than a pharmaceutical company; we are a partner in health.
              </p>
              <p className="text-blue-600 mt-2">
                By blending compassionate care with rigorous science, we distinguish ourselves as an organization focused on improving lives.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <p className="text-lg font-medium text-blue-900">
                Our commitment to innovation and excellence enables us to deliver solutions that truly make a difference.
              </p>
              <p className="text-blue-600 mt-2">
                We strive to be leaders in healthcare by creating pathways to better patient outcomes and accessible medical services for all.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Purpose Statement Section */}
        <motion.section
          id="purpose-statement"
          className="py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
            Our Purpose Statement
          </h2>
          <div className="flex flex-col space-y-6">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <p className="text-lg font-semibold">"Empowering Health, Enriching Lives"</p>
              <p className="text-blue-600 mt-2">
                Our purpose is to inspire hope and nurture healthier futures. We dedicate ourselves to the relentless pursuit of innovation, integrity, and social responsibility.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <p className="text-lg font-semibold">A Step Towards a Healthier World.</p>
              <p className="text-blue-600 mt-2">
                Every product we deliver is a testament to our mission of bridging affordability and innovation, making healthcare accessible to all.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
