"use client";

import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaStethoscope,
  FaSyringe,
  FaCut,
  FaVideo,
  FaAppleAlt,
  FaTooth,
  FaAmbulance,
  FaHome,
  FaClock,
  FaUserMd,
  FaBuilding,
  FaHeart,
  FaComments,
  FaMapMarkerAlt,
  FaPaw,
} from "react-icons/fa";

const Service = () => {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef();
  const elementsRef = useRef([]);

  const services = [
    { id: 1, icon: FaStethoscope, title: "General Consultation", description: "Routine health checks and personalized advice to keep your pet happy and healthy.", color: "#b98a32" },
    { id: 2, icon: FaSyringe, title: "Vaccinations", description: "Protect your pet from common diseases with our comprehensive vaccination programs.", color: "#821b1f" },
    { id: 3, icon: FaCut, title: "Surgery", description: "State-of-the-art surgical care, from spaying/neutering to advanced procedures.", color: "#b98a32" },
    { id: 4, icon: FaCut, title: "Grooming & Spa", description: "Pamper your pet with professional grooming, baths, and spa treatments.", color: "#821b1f" },
    { id: 5, icon: FaVideo, title: "Telehealth", description: "Expert veterinary advice from the comfort of your home, via secure video calls.", color: "#b98a32" },
    { id: 6, icon: FaAppleAlt, title: "Pet Nutrition Counseling", description: "Tailored diet plans and nutrition advice for pets of all ages and needs.", color: "#821b1f" },
    { id: 7, icon: FaTooth, title: "Dental Care", description: "Keep your pet's smile bright with our dental cleaning and oral health services.", color: "#b98a32" },
    { id: 8, icon: FaAmbulance, title: "Emergency & Critical Care", description: "24/7 emergency services for urgent medical needs and critical care situations.", color: "#821b1f" },
    { id: 9, icon: FaHome, title: "Pet Boarding & Daycare", description: "Safe, comfortable boarding and fun daycare for your pets while you're away.", color: "#b98a32" },
  ];

  const features = [
    { id: 1, icon: FaClock, title: "24/7 Emergency Care", description: "Round-the-clock support for your peace of mind, whenever you need us." },
    { id: 2, icon: FaUserMd, title: "Certified & Caring Veterinarians", description: "Our team combines expertise with genuine compassion for every animal." },
    { id: 3, icon: FaBuilding, title: "Modern Facilities", description: "Advanced equipment and a welcoming environment for pets and owners alike." },
    { id: 4, icon: FaHeart, title: "Personalized Attention", description: "We treat every pet as an individual, with care plans tailored to their unique needs." },
    { id: 5, icon: FaComments, title: "Transparent Communication", description: "Clear, honest updates and advice at every step of your pet's care." },
    { id: 6, icon: FaMapMarkerAlt, title: "Convenient Location", description: "Easily accessible in Gurugram, with ample parking and a friendly team." },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.animate]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const addToRefs = (el, index) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current[index] = el;
    }
  };

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden font-sans">
      {/* Header Section */}
      <section
        ref={(el) => addToRefs(el, 0)}
        data-animate="header"
        className={`text-center py-16 px-4 transition-all duration-1000 ${
          isVisible.header ? "animate-fade-in" : "opacity-0 translate-y-8"
        }`}
        style={{ backgroundColor: "#b98a32", color: "#f7f3ea" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <FaPaw className="text-6xl animate-bounce-gentle mr-4" />
            <h1 className="text-4xl lg:text-6xl font-bold">Our Veterinary Services</h1>
          </div>
          <p className="text-lg font-medium mb-4">
            Comprehensive, compassionate care for every stage of your pet's life.
          </p>
          <p className="max-w-4xl mx-auto text-base leading-relaxed">
            At Petpals, we believe every pet deserves the best. Our experienced team offers a wide range of veterinary services, from routine checkups to advanced medical care, all delivered with love and expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4" style={{ backgroundColor: "#821b1f" }}>
        <div className="max-w-7xl mx-auto text-center mb-12 text-[#f7f3ea]">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Complete Range of Services</h2>
          <p className="text-base lg:text-lg max-w-2xl mx-auto">
            From preventive care to specialized treatments, we're here for every aspect of your pet's health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                ref={(el) => addToRefs(el, index + 10)}
                data-animate={`service-${service.id}`}
                className={`rounded-3xl p-6 shadow-lg transition-all duration-1000 ${
                  isVisible[`service-${service.id}`]
                    ? `animate-scale-in stagger-${(index % 3) + 1}`
                    : "opacity-0 scale-90"
                }`}
                style={{ backgroundColor: "#f7f3ea" }}
              >
                <div className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <IconComponent className="text-3xl" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#821b1f" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#b98a32" }}>
        <div className="max-w-7xl mx-auto text-center text-[#f7f3ea] mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Why Petpals?</h2>
          <p className="text-base lg:text-lg max-w-2xl mx-auto">
            We're more than just a clinic—we're your partner in your pet's lifelong health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                ref={(el) => addToRefs(el, index + 30)}
                data-animate={`feature-${feature.id}`}
                className={`rounded-2xl p-6 shadow-lg transition-all duration-1000 ${
                  isVisible[`feature-${feature.id}`]
                    ? `animate-slide-up stagger-${(index % 3) + 1}`
                    : "opacity-0 translate-y-8"
                }`}
                style={{ backgroundColor: "#f7f3ea" }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#b98a3220" }}>
                    <IconComponent className="text-xl" style={{ color: "#b98a32" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: "#821b1f" }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-700">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => addToRefs(el, 40)}
        data-animate="cta"
        className={`py-16 px-4 transition-all duration-1000 ${
          isVisible.cta ? "animate-slide-up" : "opacity-0 translate-y-8"
        }`}
        style={{ backgroundColor: "#821b1f" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="rounded-3xl p-12 shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #f7f3ea 0%, #f7f3ea 100%)",
              color: "#821b1f",
            }}
          >
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">
              Ready to give your pet the best care?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Book an appointment with our expert team today and experience the Petpals difference.
            </p>
            <NavLink to="/appointment">
              <button className="bg-[#821b1f] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#b98a32] transition duration-300">
                Book an Appointment
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
