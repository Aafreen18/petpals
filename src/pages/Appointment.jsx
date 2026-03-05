import { useState } from "react";
import { motion } from "framer-motion";
import { Video, Users, UserCheck, Calendar, Clock, Star } from "lucide-react";

import PetConnect from "../components/PetConnect";
import HelpButtonModal from "../components/HelpButtonModal";

const Appointment = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const consultationOptions = [
    {
      id: "general",
      title: "General Consultation",
      description: "Basic health check-ups and routine care for your pet",
      icon: Video,
      price: "$45",
      duration: "30 min",
      features: [
        "Health Assessment",
        "Vaccination Guidance",
        "Nutrition Advice",
      ],
      gradient: "from-[#821b1f] to-[#a5252a]",
      hoverGradient: "from-[#a5252a] to-[#c02f34]",
    },
    {
      id: "senior",
      title: "Teleconsultation (Senior Veterinarian)",
      description:
        "Expert consultation with experienced veterinary specialists",
      icon: UserCheck,
      price: "$75",
      duration: "45 min",
      features: ["Specialized Care", "Complex Diagnosis", "Treatment Plans"],
      gradient: "from-[#b98a32] to-[#d4a445]",
      hoverGradient: "from-[#d4a445] to-[#e8b54c]",
    },
    {
      id: "head",
      title: "Teleconsultation (Head Veterinarian)",
      description: "Premium consultation with our head veterinarian",
      icon: Users,
      price: "$95",
      duration: "60 min",
      features: ["Premium Care", "Second Opinion", "Comprehensive Review"],
      gradient: "from-[#821b1f] to-[#b98a32]",
      hoverGradient: "from-[#a5252a] to-[#d4a445]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <HelpButtonModal />

      {/* Hero Section */}
      <motion.div
        className="full-width-breakout bg-[#b98a32] w-full overflow-hidden pb-10 bg-gradient-to-br from-[#821b1f] to-[#b98a32] py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            DCC Tele Health Booking
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            With DCC's telehealth services, you can book appointments with
            doctors, keep your pet's schedule in check and get all your pet's
            healthcare resources in one place.
          </motion.p>
        </div>
      </motion.div>

      {/* Consultation Options Section */}
      <div className="py-16 bg-[#f7f3ea] full-width-breakout">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#821b1f] mb-4">
              Choose Your Consultation Type
            </h2>
            <p className="text-[#5a5a5a] text-lg max-w-2xl mx-auto">
              Select the perfect consultation option for your pet's needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {consultationOptions.map((option) => {
              const IconComponent = option.icon;
              const isSelected = selectedOption === option.id;

              return (
                <motion.div
                  key={option.id}
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform-gpu ${
                    isSelected ? "ring-4 ring-[#b98a32]" : ""
                  }`}
                  variants={cardVariants}
                  whileHover="hover"
                  onClick={() => setSelectedOption(option.id)}
                >
                  {/* Gradient Header */}
                  <motion.div
                    className={`h-32 bg-gradient-to-r ${option.gradient} flex items-center justify-center relative overflow-hidden`}
                    whileHover={{
                      background: `linear-gradient(to right, ${option.hoverGradient})`,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white opacity-10"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div variants={iconVariants}>
                      <IconComponent className="w-12 h-12 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {option.description}
                    </p>

                    {/* Price and Duration */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-[#821b1f]">
                          {option.price}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {option.duration}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {option.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <Star className="w-3 h-3 text-[#b98a32] mr-2 fill-current" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* Book Button */}
                    <motion.button
                      className={`w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r ${option.gradient} hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Book Now</span>
                      </div>
                    </motion.button>
                  </div>

                  {/* Selection Indicator */}
                  {isSelected && (
                    <motion.div
                      className="absolute top-4 right-4 bg-[#b98a32] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      ✓
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-md max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-[#821b1f] mb-2">
                Why Choose DCC Telehealth?
              </h3>
              <p className="text-gray-600 text-sm">
                Our certified veterinarians provide professional care from the
                comfort of your home. Get expert advice, prescriptions, and
                follow-up care for your beloved pets.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <PetConnect />
    </>
  );
};

export default Appointment;
