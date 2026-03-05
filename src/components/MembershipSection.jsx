import { motion } from "framer-motion";
import MembershipCard from '../components/MembershipCard';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { client } from "../lib/sanity";


const MembershipSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "membership"] | order(_createdAt asc)`);
      setMemberships(data);
    };

    fetchData();
  }, []);


  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? memberships.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === memberships.length - 1 ? 0 : prev + 1));
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], 
      },
    },
  };

  
  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#f7f3ea]" style={{ paddingTop: "120px", paddingBottom: "80px" }}>

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Left Logo - Hidden on mobile, visible on large screens */}
        <div className="hidden lg:flex p-4 justify-center">
          <img
            src="/logo.png"
            alt="Petpals Logo"
            className="w-32 h-32 xl:w-40 xl:h-40 object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center px-2 sm:px-4 flex-1 max-w-3xl">
          {/* Mobile Logo - Only visible on mobile */}
          <div className="lg:hidden mb-6">
            <img
              src="/logo.png"
              alt="Petpals Logo"
              className="w-24 h-24 sm:w-28 sm:h-28 object-cover mx-auto"
            />
          </div>

          <h1 className="text-[#821b1f] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4">
            Limitless Consultations, Limitless Health
          </h1>
          <h2 className="text-[#5e3a1f] font-medium text-base sm:text-lg md:text-xl lg:text-2xl mb-6 lg:mb-10 max-w-2xl">
            Love for pets is a simple concept, so are our membership plans.
          </h2>
        </div>

        {/* Right Logo - Hidden on mobile, visible on large screens */}
        <div className="hidden lg:flex p-4 justify-center">
          <img
            src="/logo.png"
            alt="Petpals Logo"
            className="w-32 h-32 xl:w-40 xl:h-40 object-cover"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {/* Mobile and Tablet Carousel */}
        <div className="lg:hidden flex flex-col items-center relative">
          <div className="relative w-full flex justify-center items-center px-12 sm:px-16">
            {/* Left Arrow */}
            <button
              onClick={prev}
              className="absolute left-0 p-2 sm:p-3 bg-[#821b1f] text-[#f7f3ea] rounded-full hover:bg-[#5e3a1f] transition-colors duration-300 shadow-lg z-10"
              aria-label="Previous membership plan"
            >
              <FaArrowLeft className="text-sm sm:text-base" />
            </button>

            {/* Animated Card */}
            {memberships.length > 0 && (
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full flex justify-center max-w-sm mx-auto"
              >
                <MembershipCard
                  time={memberships[currentIndex].time}
                  price={memberships[currentIndex].price}
                  hoverColor={memberships[currentIndex].hoverColor}
                  benefits={memberships[currentIndex].benefits}
                />
              </motion.div>
            )}

            {/* Right Arrow */}
            <button
              onClick={next}
              className="absolute right-0 p-2 sm:p-3 bg-[#821b1f] text-[#f7f3ea] rounded-full hover:bg-[#5e3a1f] transition-colors duration-300 shadow-lg z-10"
              aria-label="Next membership plan"
            >
              <FaArrowRight className="text-sm sm:text-base" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {memberships.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-[#821b1f]' : 'bg-[#b98a32]'
                }`}
                aria-label={`Go to membership plan ${index + 1}`}
              />
            ))}
          </div>
        </div>

       <div className="hidden lg:flex items-center justify-center mt-8 lg:mt-10 overflow-visible px-4">
        <motion.div
          className="relative flex justify-center gap-10"
          style={{
            width: '100%',
            maxWidth: '1200px',
            height: '500px',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {memberships.map((m, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`relative ${i === 1 ? 'top-[-16px]' : ''}`}
                style={{
                  width: '320px',
                }}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  y: isHovered ? -8 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <MembershipCard
                  time={m.time}
                  price={m.price}
                  hoverColor={m.hoverColor}
                  benefits={m.benefits}
                  isHovered={isHovered}
                  cardIndex={i}
                  hoveredIndex={hoveredIndex}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      </div>
    </div>
  );
};

export default MembershipSection;