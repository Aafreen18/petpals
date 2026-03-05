"use client"

import { useState, useEffect, useRef } from "react"
import {
  FaGift,
  FaUsers,
  FaHeart,
  FaPaw,
  FaLink,
  FaPaperPlane,
  FaUserPlus,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaPercentage,
  FaCut,
  FaTshirt,
  FaClock,
  FaCrown,
  FaShare,
  FaCheck,
  FaSpinner,
} from "react-icons/fa"

const Referral = () => {
  const [isVisible, setIsVisible] = useState({})
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const observerRef = useRef()
  const elementsRef = useRef([])

  // Steps data
  const steps = [
    {
      id: 1,
      icon: FaPaperPlane,
      title: "Invite",
      description: "Send your unique referral link to friends and family.",
      color: "#f7f3ea",
    },
    {
      id: 2,
      icon: FaUserPlus,
      title: "They Join",
      description: "Your friend signs up and books their first appointment.",
      color: "#f7f3ea",
    },
    {
      id: 3,
      icon: FaGift,
      title: "You Both Earn",
      description: "You and your friend receive exclusive discounts or rewards.",
      color: "#f7f3ea",
    },
  ]

  // Rewards data
  const rewards = [
    {
      id: 1,
      icon: FaPercentage,
      title: "20% Off Next Visit",
      description: "Get 20% discount on your next consultation or service.",
      color: "#f7f3ea",
      isBest: false,
    },
    {
      id: 2,
      icon: FaCut,
      title: "Free Grooming Session",
      description: "Complimentary grooming session for your furry friend.",
      color: "#f7f3ea",
      isBest: true,
    },
    {
      id: 3,
      icon: FaTshirt,
      title: "Petpals Merchandise",
      description: "Exclusive branded merchandise and pet accessories.",
      color: "#f7f3ea",
      isBest: false,
    },
    {
      id: 4,
      icon: FaClock,
      title: "Priority Booking",
      description: "Skip the queue with priority appointment booking.",
      color: "#f7f3ea",
      isBest: false,
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Aditi Sharma",
      petName: "Bruno",
      avatar: "👩",
      text: "Referring my friends was so easy, and we both got great discounts! Bruno loves his new vet friends too.",
      reward: "20% Off + Free Grooming",
    },
    {
      id: 2,
      name: "Raj Patel",
      petName: "Simba",
      avatar: "👨",
      text: "I love the Petpals community. The referral program is a win-win! Simba gets the best care and I save money.",
      reward: "Priority Booking",
    },
    {
      id: 3,
      name: "Meera Gupta",
      petName: "Coco",
      avatar: "👩‍🦳",
      text: "Thanks to the referral rewards, my dog got a free grooming session! Coco has never looked better.",
      reward: "Free Grooming",
    },
    {
      id: 4,
      name: "Sandeep Kumar",
      petName: "Milo",
      avatar: "👨‍💼",
      text: "The referral process was seamless. My friends are now part of the Petpals family and we all benefit!",
      reward: "Merchandise + Discount",
    },
  ]

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.animate]: true,
            }))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current.observe(el)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const addToRefs = (el, index) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current[index] = el
    }
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }, 2000)
  }

  const socialShareLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      color: "#25D366",
      url: "https://wa.me/?text=Join%20me%20at%20Petpals%20for%20amazing%20pet%20care!",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      color: "#1877F2",
      url: "https://facebook.com/sharer/sharer.php?u=petpals.com/referral",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      color: "#1DA1F2",
      url: "https://twitter.com/intent/tweet?text=Join%20me%20at%20Petpals!",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      color: "#EA4335",
      url: "mailto:?subject=Join%20Petpals&body=I%20think%20you'd%20love%20Petpals!",
    },
  ]

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');
        
        /* Custom Keyframe Animations */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceGentle {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -10px, 0);
          }
          70% {
            transform: translate3d(0, -5px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        @keyframes pulseGentle {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes wiggle {
          0%, 7% {
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
          40%, 100% {
            transform: rotateZ(0);
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(185, 138, 50, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(185, 138, 50, 0.4);
          }
          100% {
            box-shadow: 0 0 5px rgba(185, 138, 50, 0.2);
          }
        }

        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          14% {
            transform: scale(1.1);
          }
          28% {
            transform: scale(1);
          }
          42% {
            transform: scale(1.1);
          }
          70% {
            transform: scale(1);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Animation Classes */
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
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

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 1.5s ease-in-out infinite;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }

        /* Hover Effects */
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
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
          box-shadow: 0 0 30px rgba(247, 243, 234, 0.4);
        }

        /* Button Animations */
        .btn-primary {
          background: #821b1f;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
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

        /* Social Button Hover */
        .social-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .social-btn:hover {
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        /* Card Hover Effects */
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Icon Hover Effects */
        .icon-hover {
          transition: all 0.3s ease;
        }

        .icon-hover:hover {
          transform: scale(1.1) rotate(5deg);
        }

        /* Best Reward Badge */
        .best-badge {
          background: linear-gradient(135deg, #821b1f 0%, #b98a32 100%);
          animation: sparkle 2s ease-in-out infinite;
        }

        /* Step Connection Line */
        .step-line {
          background: linear-gradient(90deg, #f7f3ea 0%, #b98a32 100%);
          height: 2px;
          position: relative;
        }

        .step-line::after {
          content: '';
          position: absolute;
          right: -8px;
          top: -3px;
          width: 0;
          height: 0;
          border-left: 8px solid #b98a32;
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
        }

        /* Form Input Focus */
        .input-focus {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .input-focus:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(247, 243, 234, 0.15);
        }

        /* Success Animation */
        .success-checkmark {
          animation: scaleIn 0.5s ease-out forwards;
        }

        /* Gradient Text */
        .gradient-text {
          background: linear-gradient(135deg, #821b1f 0%, #b98a32 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Background Pattern */
        .bg-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(185,138,50,0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }

        /* Responsive Text */
        .text-responsive-xl {
          font-size: clamp(2rem, 5vw, 4rem);
        }

        .text-responsive-lg {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
        }

        .text-responsive-md {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
        }

        /* Stagger Animation Delays */
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
        .stagger-3 { animation-delay: 0.5s; }
        .stagger-4 { animation-delay: 0.7s; }

        /* Reward Badge */
        .reward-badge {
          background: rgba(247, 243, 234, 0.1);
          color: #f7f3ea;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          border: 1px solid rgba(247, 243, 234, 0.2);
        }
      `}</style>

      <div
        className="min-h-screen w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden pb-10"
        style={{ backgroundColor: "#b98a32", fontFamily: "Inter, Lato, sans-serif" }}
      >
        {/* Header Section */}
        <header
          ref={(el) => addToRefs(el, 0)}
          data-animate="header"
          className={`text-center py-16 px-4 transition-all duration-1000 ${
            isVisible.header ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
          style={{ backgroundColor: "#821b1f" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <FaGift
                className="text-6xl animate-bounce-gentle hover-scale cursor-pointer mr-4 animate-wiggle"
                style={{ color: "#f7f3ea" }}
              />
              <h1 className="text-responsive-xl font-bold text-white tracking-tight">
                Refer a Friend, Spread the Love!
              </h1>
            </div>
            <p className="text-responsive-md font-medium mb-6 text-white">
              Share the gift of pet wellness and earn exclusive rewards.
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-white opacity-90">
                Love Petpals? Invite your friends and family to join our community! When they sign up and book their
                first appointment, you both enjoy special perks. It's our way of saying thank you for helping us care
                for more pets.
              </p>
            </div>
          </div>
        </header>

        {/* How It Works Section */}
        <section 
          className="py-16 px-4"
          style={{ backgroundColor: "#b98a32" }}
        >
          <div className="max-w-6xl mx-auto">
            <div
              ref={(el) => addToRefs(el, 1)}
              data-animate="steps-title"
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible["steps-title"] ? "animate-slide-up" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-responsive-lg font-bold mb-4 text-white">
                How It Works
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-white opacity-90">
                Three simple steps to start earning rewards while helping your friends discover amazing pet care.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={step.id} className="relative">
                    <div
                      ref={(el) => addToRefs(el, index + 10)}
                      data-animate={`step-${step.id}`}
                      className={`bg-white rounded-3xl p-8 shadow-lg card-hover hover-glow text-center transition-all duration-1000 ${
                        isVisible[`step-${step.id}`] ? `animate-scale-in stagger-${index + 1}` : "opacity-0 scale-90"
                      }`}
                    >
                      <div
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 icon-hover"
                        style={{ backgroundColor: "#821b1f" }}
                      >
                        <IconComponent className="text-4xl text-white" />
                      </div>
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto"
                        style={{ backgroundColor: "#b98a32" }}
                      >
                        {step.id}
                      </div>
                      <h3 className="text-2xl font-bold mb-4" style={{ color: "#821b1f" }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Connection Line (Desktop only) */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 step-line transform -translate-y-1/2 z-10"></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Referral Form Section */}
        <section 
          className="py-16 px-4"
          style={{ backgroundColor: "#821b1f" }}
        >
          <div className="max-w-4xl mx-auto">
            <div
              ref={(el) => addToRefs(el, 20)}
              data-animate="form-title"
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible["form-title"] ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-responsive-lg font-bold mb-4 text-white">
                Get Your Referral Link
              </h2>
              <p className="text-lg text-white opacity-90">
                Enter your email to receive your unique referral link, or share directly on social media!
              </p>
            </div>

            <div
              ref={(el) => addToRefs(el, 21)}
              data-animate="form-section"
              className={`transition-all duration-1000 ${
                isVisible["form-section"] ? "animate-slide-up" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
                <form onSubmit={handleEmailSubmit} className="mb-8">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      disabled={isSubmitting || isSubmitted}
                      className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-200 input-focus transition-all duration-300 text-lg placeholder-gray-400"
                      style={{ backgroundColor: "#f7f3ea" }}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="btn-primary text-white font-bold py-4 px-8 rounded-2xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-3 min-w-[200px]"
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          Getting Link...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <FaCheck className="success-checkmark" />
                          Link Sent!
                        </>
                      ) : (
                        <>
                          <FaLink />
                          Get My Link
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="text-center">
                  <p className="text-gray-600 mb-6">Or share directly:</p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    {socialShareLinks.map((social) => {
                      const IconComponent = social.icon
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-btn p-4 rounded-full text-white shadow-lg"
                          style={{ backgroundColor: social.color }}
                          title={`Share on ${social.name}`}
                        >
                          <IconComponent className="text-2xl" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards Section */}
        <section 
          className="py-16 px-4"
          style={{ backgroundColor: "#b98a32" }}
        >
          <div className="max-w-6xl mx-auto">
            <div
              ref={(el) => addToRefs(el, 30)}
              data-animate="rewards-title"
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible["rewards-title"] ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-responsive-lg font-bold mb-4 text-white">
                Referral Rewards
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-white opacity-90">
                Amazing rewards await you and your friends when you share the Petpals experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rewards.map((reward, index) => {
                const IconComponent = reward.icon
                return (
                  <div
                    key={reward.id}
                    ref={(el) => addToRefs(el, index + 40)}
                    data-animate={`reward-${reward.id}`}
                    className={`relative bg-white rounded-3xl p-6 shadow-lg card-hover hover-glow text-center transition-all duration-1000 ${
                      isVisible[`reward-${reward.id}`]
                        ? `animate-scale-in stagger-${(index % 4) + 1}`
                        : "opacity-0 scale-90"
                    }`}
                  >
                    {reward.isBest && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="best-badge text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <FaCrown className="text-xs" />
                          Best Reward
                        </div>
                      </div>
                    )}

                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 icon-hover"
                      style={{ backgroundColor: "#821b1f" }}
                    >
                      <IconComponent className="text-3xl text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: "#821b1f" }}>
                      {reward.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{reward.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          className="py-16 px-4"
          style={{ backgroundColor: "#821b1f" }}
        >
          <div className="max-w-4xl mx-auto">
            <div
              ref={(el) => addToRefs(el, 50)}
              data-animate="testimonials-title"
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible["testimonials-title"] ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-responsive-lg font-bold mb-4 text-white">
                Happy Referrers
              </h2>
              <p className="text-lg text-white opacity-90">
                See what our community members say about the referral program.
              </p>
            </div>

            <div
              ref={(el) => addToRefs(el, 51)}
              data-animate="testimonials-carousel"
              className={`transition-all duration-1000 ${
                isVisible["testimonials-carousel"] ? "animate-slide-up" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
                <div className="text-center">
                  <div className="text-4xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                  <blockquote className="text-lg leading-relaxed mb-6 italic text-gray-700">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-lg" style={{ color: "#821b1f" }}>
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-600 mb-2">Pet parent to {testimonials[currentTestimonial].petName}</p>
                    <span className="reward-badge" style={{ backgroundColor: "#b98a32", color: "white" }}>
                      {testimonials[currentTestimonial].reward}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "scale-125" : "hover:scale-110"
                    }`}
                    style={{
                      backgroundColor: index === currentTestimonial ? "#f7f3ea" : "rgba(247, 243, 234, 0.5)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section
          ref={(el) => addToRefs(el, 60)}
          data-animate="cta"
          className={`py-16 px-4 transition-all duration-1000 ${
            isVisible.cta ? "animate-slide-up" : "opacity-0 translate-y-8"
          }`}
          style={{ backgroundColor: "#b98a32" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="rounded-3xl p-12 shadow-2xl hover-lift"
              style={{ background: "linear-gradient(135deg, #821b1f 0%, #b98a32 100%)" }}
            >
              <div className="text-white relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <FaPaw className="absolute top-4 left-4 text-4xl animate-float" />
                  <FaUsers className="absolute top-8 right-8 text-3xl animate-pulse-gentle" />
                  <FaHeart className="absolute bottom-4 right-4 text-4xl animate-heartbeat" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-responsive-md font-bold mb-6">Ready to share the love?</h2>
                  <p className="text-xl mb-8 opacity-90 leading-relaxed">
                    Start referring and enjoy exclusive rewards for you and your friends!
                  </p>
                  <button
                    className="bg-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg hover-glow inline-flex items-center gap-3"
                    style={{ color: "#821b1f" }}
                  >
                    <FaShare />
                    Start Referring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Decorative Elements */}
        <div className="fixed top-1/4 left-4 opacity-10 pointer-events-none">
          <FaGift className="text-8xl animate-float" style={{ color: "#f7f3ea" }} />
        </div>
        <div className="fixed top-1/3 right-4 opacity-10 pointer-events-none">
          <FaUsers className="text-6xl animate-pulse-gentle" style={{ color: "#f7f3ea" }} />
        </div>
        <div className="fixed bottom-1/4 left-8 opacity-10 pointer-events-none">
          <FaHeart className="text-7xl animate-heartbeat" style={{ color: "#f7f3ea" }} />
        </div>
      </div>
    </>
  )
}

export default Referral