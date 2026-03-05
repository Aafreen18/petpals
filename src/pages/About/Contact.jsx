"use client";

import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaw,
  FaHeart,
  FaStethoscope,
  FaClock,
  FaUserMd,
  FaCommentAlt,
} from "react-icons/fa";

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const observerRef = useRef();
  const elementsRef = useRef([]);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you! We'll get back to you within 24 hours.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitMessage(""), 5000);
    }, 2000);
  };

  const addToRefs = (el, index) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current[index] = el;
    }
  };

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap");

        /* Custom Keyframe Animations */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceGentle {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        @keyframes pulseGentle {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }

        @keyframes wiggle {
          0%,
          7% {
            transform: rotateZ(0);
          }
          15% {
            transform: rotateZ(-15deg);
          }
          20% {
            transform: rotateZ(10deg);
          }
          25% {
            transform: rotateZ(-10deg);
          }
          30% {
            transform: rotateZ(6deg);
          }
          35% {
            transform: rotateZ(-4deg);
          }
          40%,
          100% {
            transform: rotateZ(0);
          }
        }

        /* Animation Classes */
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-bounce-gentle {
          animation: bounceGentle 2s infinite;
        }

        .animate-pulse-gentle {
          animation: pulseGentle 2s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out;
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            #f0f0f0 25%,
            #e0e0e0 50%,
            #f0f0f0 75%
          );
          background-size: 200px 100%;
          animation: shimmer 1.5s infinite;
        }

        /* Hover Effects */
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .hover-scale {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .hover-glow {
          transition: all 0.3s ease;
        }

        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(185, 138, 50, 0.4);
        }

        /* Button Animations */
        .btn-primary {
          background: #821b1f;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          background: #b98a32;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(185, 138, 50, 0.3);
        }

        /* Input Focus Effects */
        .input-focus {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .input-focus:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(185, 138, 50, 0.15);
        }

        /* Card Hover Effects */
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateX(8px);
          background: #f0ede4;
        }

        /* Gradient Text */
        .gradient-text {
          background: linear-gradient(135deg, #821b1f 0%, #b98a32 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f7f3ea;
        }

        ::-webkit-scrollbar-thumb {
          background: #b98a32;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #821b1f;
        }

        /* Loading Animation */
        .loading-dots {
          display: inline-block;
        }

        .loading-dots::after {
          content: "";
          animation: dots 1.5s steps(5, end) infinite;
        }

        @keyframes dots {
          0%,
          20% {
            color: rgba(0, 0, 0, 0);
            text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
          }
          40% {
            color: white;
            text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
          }
          60% {
            text-shadow: 0.25em 0 0 white, 0.5em 0 0 rgba(0, 0, 0, 0);
          }
          80%,
          100% {
            text-shadow: 0.25em 0 0 white, 0.5em 0 0 white;
          }
        }

        /* Responsive Font Sizes */
        .text-responsive-xl {
          font-size: clamp(1.5rem, 4vw, 3rem);
        }

        .text-responsive-lg {
          font-size: clamp(1.25rem, 3vw, 2rem);
        }

        .text-responsive-md {
          font-size: clamp(1rem, 2.5vw, 1.5rem);
        }

        /* Background Patterns */
        .bg-pattern {
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(185, 138, 50, 0.1) 1px,
            transparent 0
          );
          background-size: 20px 20px;
        }

        /* Glassmorphism Effect */
        .glass {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>

      <div
        className="bg-[#b98a32] w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden"
        style={{
          fontFamily: "Inter, Lato, sans-serif",
        }}
      >
        {/* Header Section */}
        <header
          ref={(el) => addToRefs(el, 0)}
          data-animate="header"
          className={`text-center py-16 px-4 transition-all duration-1000 ${
            isVisible.header ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
              <FaPaw
                className="text-4xl animate-bounce-gentle hover-scale cursor-pointer animate-wiggle"
                style={{ color: "#b98a32" }}
              />
              <h1 className="text-responsive-xl font-bold gradient-text tracking-tight text-center">
                Get in Touch with Us
              </h1>
              <FaHeart
                className="text-4xl animate-pulse-gentle hover-scale cursor-pointer"
                style={{ color: "#821b1f" }}
              />
            </div>
            <p
              className="text-responsive-md max-w-3xl mx-auto leading-relaxed mb-4"
              style={{ color: "#f7f3ea" }}
            >
              We're here for your furry companions
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <FaStethoscope
                className="text-2xl animate-float"
                style={{ color: "#A2B29F" }}
              />
              <span
                className="font-medium text-lg"
                style={{ color: "#A2B29F" }}
              >
                Professional Care • Compassionate Service
              </span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div
              ref={(el) => addToRefs(el, 1)}
              data-animate="form"
              className={`transition-all duration-1000 delay-200 ${
                isVisible.form
                  ? "animate-slide-in-left"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden hover-lift hover-glow">
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="p-4 rounded-full animate-pulse-gentle"
                      style={{ backgroundColor: "rgba(185, 138, 50, 0.1)" }}
                    >
                      <FaStethoscope
                        className="text-2xl"
                        style={{ color: "#b98a32" }}
                      />
                    </div>
                    <div>
                      <h2
                        className="text-3xl font-bold"
                        style={{ color: "#821b1f" }}
                      >
                        Send us a Message
                      </h2>
                      <p className="text-lg" style={{ color: "#8b7355" }}>
                        We'd love to hear from you
                      </p>
                    </div>
                  </div>

                  {submitMessage && (
                    <div
                      className="mb-6 p-4 rounded-xl font-medium animate-fade-in border"
                      style={{
                        backgroundColor: "rgba(162, 178, 159, 0.1)",
                        borderColor: "rgba(162, 178, 159, 0.2)",
                        color: "#A2B29F",
                      }}
                    >
                      {submitMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-semibold mb-3"
                          style={{ color: "#8b7355" }}
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 input-focus transition-all duration-300 text-lg placeholder-gray-400 hover-scale"
                          style={{ backgroundColor: "#faf8f3" }}
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold mb-3"
                          style={{ color: "#8b7355" }}
                        >
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 input-focus transition-all duration-300 text-lg placeholder-gray-400 hover-scale"
                          style={{ backgroundColor: "#faf8f3" }}
                          placeholder="+91-XXXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-3"
                        style={{ color: "#8b7355" }}
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 input-focus transition-all duration-300 text-lg placeholder-gray-400 hover-scale"
                        style={{ backgroundColor: "#faf8f3" }}
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold mb-3"
                        style={{ color: "#8b7355" }}
                      >
                        Subject *
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 input-focus transition-all duration-300 text-lg placeholder-gray-400 hover-scale"
                        style={{ backgroundColor: "#faf8f3" }}
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold mb-3"
                        style={{ color: "#8b7355" }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 input-focus transition-all duration-300 resize-none text-lg placeholder-gray-400 hover-scale"
                        style={{ backgroundColor: "#faf8f3" }}
                        placeholder="Tell us about your pet's needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary text-white font-bold py-5 px-8 rounded-2xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span className="loading-dots">Sending Message</span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div
              ref={(el) => addToRefs(el, 2)}
              data-animate="contact-info"
              className={`space-y-8 transition-all duration-1000 delay-400 ${
                isVisible["contact-info"]
                  ? "animate-slide-in-right"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden hover-lift hover-glow">
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="p-4 rounded-full animate-pulse-gentle"
                      style={{ backgroundColor: "rgba(130, 27, 31, 0.1)" }}
                    >
                      <FaPaw
                        className="text-2xl"
                        style={{ color: "#821b1f" }}
                      />
                    </div>
                    <div>
                      <h2
                        className="text-3xl font-bold"
                        style={{ color: "#821b1f" }}
                      >
                        Contact Information
                      </h2>
                      <p className="text-lg" style={{ color: "#8b7355" }}>
                        Get in touch with us
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div
                      className="flex items-start gap-5 p-6 rounded-2xl card-hover hover-lift"
                      style={{ backgroundColor: "#faf8f3" }}
                    >
                      <div
                        className="p-3 rounded-full transition-colors duration-300"
                        style={{ backgroundColor: "rgba(185, 138, 50, 0.2)" }}
                      >
                        <FaMapMarkerAlt
                          className="text-xl flex-shrink-0"
                          style={{ color: "#b98a32" }}
                        />
                      </div>
                      <div>
                        <h3
                          className="font-bold mb-2 text-lg"
                          style={{ color: "#821b1f" }}
                        >
                          Visit Our Clinic
                        </h3>
                        <p
                          className="text-lg mb-1"
                          style={{ color: "#8b7355" }}
                        >
                          DCC Animal Hospital, Gurugram
                        </p>
                        <div
                          className="flex items-center gap-2 text-sm"
                          style={{ color: "#A2B29F" }}
                        >
                          <FaClock className="text-xs animate-pulse-gentle" />
                          <span>Open 24/7 for emergencies</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="flex items-start gap-5 p-6 rounded-2xl card-hover hover-lift"
                      style={{ backgroundColor: "#faf8f3" }}
                    >
                      <div
                        className="p-3 rounded-full transition-colors duration-300"
                        style={{ backgroundColor: "rgba(185, 138, 50, 0.2)" }}
                      >
                        <FaPhoneAlt
                          className="text-xl flex-shrink-0"
                          style={{ color: "#b98a32" }}
                        />
                      </div>
                      <div>
                        <h3
                          className="font-bold mb-2 text-lg"
                          style={{ color: "#821b1f" }}
                        >
                          Call Us
                        </h3>
                        <p
                          className="text-lg mb-1"
                          style={{ color: "#8b7355" }}
                        >
                          +91-XXXXXXXXXX
                        </p>
                        <div
                          className="flex items-center gap-2 text-sm"
                          style={{ color: "#A2B29F" }}
                        >
                          <FaUserMd className="text-xs animate-bounce-gentle" />
                          <span>Available 24/7</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="flex items-start gap-5 p-6 rounded-2xl card-hover hover-lift"
                      style={{ backgroundColor: "#faf8f3" }}
                    >
                      <div
                        className="p-3 rounded-full transition-colors duration-300"
                        style={{ backgroundColor: "rgba(185, 138, 50, 0.2)" }}
                      >
                        <FaEnvelope
                          className="text-xl flex-shrink-0"
                          style={{ color: "#b98a32" }}
                        />
                      </div>
                      <div>
                        <h3
                          className="font-bold mb-2 text-lg"
                          style={{ color: "#821b1f" }}
                        >
                          Email Us
                        </h3>
                        <p
                          className="text-lg mb-1"
                          style={{ color: "#8b7355" }}
                        >
                          contact@dccpets.in
                        </p>
                        <div
                          className="flex items-center gap-2 text-sm"
                          style={{ color: "#A2B29F" }}
                        >
                          <FaCommentAlt className="text-xs animate-float" />
                          <span>We'll respond within 24 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden hover-lift">
                <div
                  className="h-80 flex items-center justify-center relative"
                  style={{
                    background:
                      "linear-gradient(135deg, #A2B29F 0%, rgba(185, 138, 50, 0.5) 50%, rgba(130, 27, 31, 0.2) 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="text-center text-white relative z-10">
                    <div className="glass p-6 rounded-full mb-4 mx-auto w-fit">
                      <FaMapMarkerAlt className="text-4xl animate-bounce-gentle" />
                    </div>
                    <p className="text-xl font-bold mb-2">Find Us Here</p>
                    <p className="text-sm opacity-90">
                      Google Maps integration would go here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            ref={(el) => addToRefs(el, 3)}
            data-animate="cta"
            className={`mt-20 text-center transition-all duration-1000 delay-600 ${
              isVisible.cta ? "animate-slide-up" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="text-white shadow-2xl border-0 rounded-3xl overflow-hidden hover-lift"
              style={{
                background: "linear-gradient(135deg, #821b1f 0%, #b98a32 100%)",
              }}
            >
              <div className="p-10 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <FaPaw className="absolute top-4 left-4 text-6xl animate-float" />
                  <FaHeart className="absolute top-8 right-8 text-4xl animate-pulse-gentle" />
                  <FaStethoscope className="absolute bottom-4 left-1/4 text-5xl animate-bounce-gentle" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                    <FaHeart className="text-3xl animate-pulse-gentle" />
                    <h2 className="text-responsive-lg font-bold">
                      Need help? Let's talk!
                    </h2>
                    <FaPaw className="text-3xl animate-bounce-gentle" />
                  </div>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                    Your pet's health is our priority. Book an appointment today
                    and give your furry friend the care they deserve!
                  </p>
                  <NavLink to="/appointment" style={{ textDecoration: "none" }}>
                    <button
                      className="bg-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg hover-glow"
                      style={{ color: "#821b1f" }}
                    >
                      Book an Appointment
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Sticky WhatsApp Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse-gentle hover-glow">
            <FaWhatsapp className="text-3xl" />
            <span className="sr-only">Contact us on WhatsApp</span>
          </button>
        </div>

        {/* Floating Decorative Elements */}
        <div className="fixed top-1/4 left-4 opacity-5 pointer-events-none">
          <FaPaw
            className="text-8xl animate-float"
            style={{ color: "#b98a32" }}
          />
        </div>
        <div className="fixed top-1/3 right-4 opacity-5 pointer-events-none">
          <FaHeart
            className="text-6xl animate-pulse-gentle"
            style={{ color: "#821b1f" }}
          />
        </div>
        <div className="fixed bottom-1/4 left-8 opacity-5 pointer-events-none">
          <FaStethoscope
            className="text-7xl animate-bounce-gentle"
            style={{ color: "#A2B29F" }}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
