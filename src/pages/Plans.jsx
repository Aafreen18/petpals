import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Crown, Shield } from "lucide-react";
import HelpButtonModal from "../components/HelpButtonModal";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("6month");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const plansSectionRef = useRef(null);

  const plans = [
    {
      id: "3month",
      name: "3 Month Membership",
      duration: "3 Months",
      price: "1499",
      originalPrice: "1799",
      savings: "300",
      popular: false,
      icon: Shield,
      gradient: "from-[#b98a32] to-[#821b1f]",
      features: [
        {
          title: "5% off on Pharmacy",
          description:
            "On purchase from pharmacy at DCC for value of Rs. 300 or above",
        },
        {
          title: "Free Consultation",
          description:
            "No consultation fees for up to 3 visits with our veterinarians",
        },
        {
          title: "10% off on Petcare & Medical services",
          description:
            "Discounted petcare services and basic medical treatments",
        },
        {
          title: "Basic Messaging access",
          description: "Messaging access to DCC during working hours",
        },
        { title: "Digital Coupons", description: "1 Bath and Dry coupon" },
      ],
    },
    {
      id: "6month",
      name: "6 Month Membership",
      duration: "6 Months",
      price: "2599",
      originalPrice: "3199",
      savings: "600",
      popular: true,
      icon: Sparkles,
      gradient: "from-[#b98a32] to-[#821b1f]",
      features: [
        {
          title: "10% off on Pharmacy",
          description:
            "On purchase from pharmacy at DCC for value of Rs. 500 or above, enjoy a 10% discount",
        },
        {
          title: "Free Consultation",
          description:
            "No consultation fees no matter how many times you consult our senior veterinarians",
        },
        {
          title: "15% off on Petcare & Medical services",
          description:
            "Discounted petcare services and medical treatments/tests",
        },
        {
          title: "Priority Messaging access",
          description:
            "Priority messaging access to DCC during working hours via app concierge service",
        },
        {
          title: "Digital Coupons",
          description: "1 Bath and Dry + 1 Ear cleaning coupon",
        },
      ],
    },
    {
      id: "annual",
      name: "Annual Membership",
      duration: "12 Months",
      price: "4499",
      originalPrice: "5999",
      savings: "1500",
      popular: false,
      icon: Crown,
      gradient: "from-[#821b1f] to-[#b98a32]",
      features: [
        {
          title: "15% off on Pharmacy",
          description:
            "On purchase from pharmacy at DCC for value of Rs. 500 or above, enjoy a 15% discount",
        },
        {
          title: "Unlimited Free Consultation",
          description:
            "No consultation fees for unlimited visits with our senior veterinarians",
        },
        {
          title: "20% off on Petcare & Medical services",
          description:
            "Maximum discounts on all petcare services and medical treatments",
        },
        {
          title: "24/7 Messaging access",
          description:
            "24/7 messaging access to DCC via premium app concierge service",
        },
        {
          title: "Premium Digital Coupons",
          description:
            "2 Bath and Dry + 2 Ear cleaning + 1 Full grooming coupon",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const validatePhoneNumber = (number) => {
    return number.startsWith("+");
  };

  const formatPhoneNumber = (number) => {
    return number.replace(/[^\d+]/g, "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!phoneNumber) {
      setError("Please enter a phone number");
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setError("Please include country code (e.g., +91 for India)");
      return;
    }
    const formattedNumber = formatPhoneNumber(phoneNumber);
    const message = `Download DCC PetConnect App:\n\nAndroid: https://play.google.com/store/apps/details?id=in.dcc.pets\niOS: https://apps.apple.com/in/app/dcc-petconnect/id1557541454`;
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  const scrollToPlans = () => {
    plansSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HelpButtonModal />
      {/* Hero Content Section */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#b98a32] overflow-hidden pb-12">
        {/* Content Section - Always flex-row */}
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 h-full flex flex-row items-center justify-between pt-20">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-[#821b1f] mb-10 lg:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              DCC Club <br /> Membership <br /> Plans
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90"
            >
              Wellness and happiness for your pets. At DCC, they come first.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPlans}
              className="bg-[#821b1f] hover:bg-white text-center text-white hover:text-[#b98a32] font-semibold py-3 px-8 rounded-3xl w-fit text-lg transition duration-300 transform hover:scale-105 mb-10 border-2 border-transparent hover:border-[#821b1f] shadow-lg hover:shadow-xl"
            >
              View Our Plans
            </motion.button>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              src="/logo.png"
              alt="Feature"
              className="max-w-full h-auto md:max-w-md lg:max-w-lg self-end filter drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div
        ref={plansSectionRef}
        className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-[#821b1f] py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#b98a32] mb-6">
              Stay connected to your vet
            </h2>
            <p className="text-xl md:text-2xl text-[#f7f3ea] max-w-3xl mx-auto">
              Limitless Consultations, Limitless Health & add ons.
              <br />
              Super Saver plans for you and your pet!
            </p>
          </motion.div>

          {/* Plans Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              const isSelected = selectedPlan === plan.id;

              return (
                <motion.div
                  key={plan.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`relative overflow-hidden rounded-3xl bg-white shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                    plan.popular
                      ? "border-[#b98a32] shadow-2xl shadow-[#b98a32]/30"
                      : "border-white hover:border-[#b98a32]/50"
                  } ${isSelected ? "ring-2 ring-[#821b1f]" : ""}`}
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#b98a32] to-[#821b1f] text-white px-4 py-1 rounded-bl-2xl text-sm font-semibold z-10">
                      Most Popular
                    </div>
                  )}

                  {/* Header */}
                  <div
                    className={`p-8 bg-gradient-to-r ${plan.gradient} text-white relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="w-8 h-8" />
                        <div className="text-right">
                          <div className="text-sm opacity-90">
                            Save ₹{plan.savings}
                          </div>
                          <div className="text-xs line-through opacity-70">
                            ₹{plan.originalPrice}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">
                          ₹{plan.price}
                        </span>
                        <span className="text-sm opacity-90 ml-2">*</span>
                      </div>
                      <p className="text-sm opacity-90 mt-1">
                        (Inclusive of Taxes)
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-8">
                    <div className="space-y-6">
                      {plan.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-[#b98a32] rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="text-[#821b1f] font-semibold mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full mt-8 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-[#b98a32] to-[#821b1f] text-white shadow-lg shadow-[#b98a32]/30"
                          : "bg-[#f7f3ea] text-[#821b1f] hover:bg-[#821b1f] hover:text-white border border-[#b98a32]"
                      }`}
                    >
                      {isSelected ? "Selected Plan" : "Select Plan"}
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* App Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 border border-[#b98a32] shadow-lg"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#821b1f] mb-4">
                Get the App to Continue
              </h3>
              <p className="text-[#b98a32] mb-6">
                Enter your phone number to receive the download link
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="tel"
                  placeholder="Enter phone with country code (e.g., +91)"
                  className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#b98a32] text-gray-800 placeholder-[#b98a32] focus:outline-none focus:ring-2 focus:ring-[#b98a32] focus:border-transparent"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#b98a32] to-[#821b1f] text-white font-semibold rounded-xl shadow-lg shadow-[#b98a32]/30 hover:shadow-[#b98a32]/40 transition-all duration-300"
                >
                  {isSubmitted ? "Link Sent!" : "Send Link"}
                </motion.button>
              </form>
              {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
              {isSubmitted && !error && (
                <p className="text-green-600 mt-2 text-sm">
                  Download link has been sent to your WhatsApp!
                </p>
              )}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-[#f7f3ea] text-sm">
              * All prices are inclusive of taxes. Terms and conditions apply.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Plans;
