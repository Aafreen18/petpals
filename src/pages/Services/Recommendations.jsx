// Save as Recommendations.jsx
import {Link} from "react-router-dom"
"use client"

import { useState, useEffect, useRef } from "react"
import {
  FaLightbulb,
  FaPaw,
  FaStar,
  FaAppleAlt,
  FaRunning,
  FaShieldAlt,
  FaCut,
  FaBrain,
  FaSnowflake,
  FaHeart,
  FaBaby,
  FaUserMd,
  FaCalendarAlt,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"
import Testimonial from "../../components/Testimonial"

const Recommendations = () => {
  const [isVisible, setIsVisible] = useState({})
  const [currentStory, setCurrentStory] = useState(0)
  const observerRef = useRef()
  const elementsRef = useRef([])

  const recommendations = [
    {
      id: 1,
      icon: FaAppleAlt,
      title: "Nutrition Tips",
      description: "Balanced diets for every breed and age—see our vet-approved food guides.",
      color: "#b98a32",
      category: "Nutrition",
    },
    {
      id: 2,
      icon: FaRunning,
      title: "Exercise & Play",
      description: "Fun activities and routines to keep your pet active and engaged.",
      color: "#821b1f",
      category: "Activity",
    },
    {
      id: 3,
      icon: FaShieldAlt,
      title: "Preventive Care",
      description: "Vaccination schedules, parasite control, and regular checkups for lifelong health.",
      color: "#b98a32",
      category: "Health",
    },
    {
      id: 4,
      icon: FaCut,
      title: "Grooming Advice",
      description: "Best practices for coat, skin, and dental care at home.",
      color: "#821b1f",
      category: "Grooming",
    },
    {
      id: 5,
      icon: FaBrain,
      title: "Mental Wellness",
      description: "Enrichment ideas and stress-busting tips for a happy, calm pet.",
      color: "#b98a32",
      category: "Wellness",
    },
    {
      id: 6,
      icon: FaSnowflake,
      title: "Seasonal Care",
      description: "How to keep your pet safe and comfortable through every season.",
      color: "#821b1f",
      category: "Seasonal",
    },
    {
      id: 7,
      icon: FaHeart,
      title: "Senior Pet Care",
      description: "Special recommendations for aging pets—mobility, diet, and comfort.",
      color: "#b98a32",
      category: "Senior Care",
    },
    {
      id: 8,
      icon: FaBaby,
      title: "Puppy/Kitten Essentials",
      description: "Early-life care tips for a strong, healthy start.",
      color: "#821b1f",
      category: "Young Pets",
    },
  ]

  const successStories = [
    {
      id: 1,
      petName: "Rocky",
      petType: "Golden Retriever",
      owner: "Priya Sharma",
      image: "🐕",
      story:
        "Following Petpals' nutrition recommendations, Rocky lost 5kg and is now more energetic than ever! His coat is shinier and he loves his new exercise routine.",
      achievement: "Lost 5kg, improved energy",
    },
    {
      id: 2,
      petName: "Simba",
      petType: "Persian Cat",
      owner: "Rahul Mehta",
      image: "🐱",
      story:
        "The senior pet care advice helped Simba stay comfortable in his golden years. The mobility exercises and diet changes made a huge difference in his quality of life.",
      achievement: "Improved mobility & comfort",
    },
    {
      id: 3,
      petName: "Coco",
      petType: "Labrador Puppy",
      owner: "Anjali & Family",
      image: "🐶",
      story:
        "Petpals' seasonal care tips kept Coco safe through her first winter. The grooming advice and preventive care schedule helped her grow into a healthy, happy dog.",
      achievement: "Healthy first year",
    },
    {
      id: 4,
      petName: "Bruno",
      petType: "Rescue Dog",
      owner: "Sandeep Kumar",
      image: "🦮",
      story:
        "Bruno was anxious when we adopted him. The mental wellness recommendations and behavioral tips helped him become a confident, loving family member.",
      achievement: "Overcame anxiety",
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
      { threshold: 0.1, rootMargin: "50px" }
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [successStories.length])

  const addToRefs = (el, index) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current[index] = el
    }
  }

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length)
  }

  return (
    <>
      {/* Section: Header */}
      <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-[#b98a32] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <FaLightbulb className="text-5xl animate-float mr-4" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Personalized Pet Recommendations</h1>
          </div>
          <p className="text-xl mb-4">Expert advice for a healthier, happier pet.</p>
          <p className="max-w-3xl mx-auto leading-relaxed text-white/90">
            Every pet is unique! Discover tailored recommendations for nutrition, wellness, activities, and more—curated by our veterinary experts to help your furry friend thrive.
          </p>
        </div>
      </section>

      {/* Section: Recommendations */}
      <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-[#821b1f] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">Expert-Curated Recommendations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => {
              const Icon = rec.icon
              return (
                <div
                  key={rec.id}
                  ref={(el) => addToRefs(el, index)}
                  data-animate={`rec-${index}`}
                  className={`
                    bg-[#f7f3ea] text-[#333] rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all
                    transform duration-700 ease-out
                    ${isVisible[`rec-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  `}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${rec.color}22` }}>
                      <Icon className="text-2xl" style={{ color: rec.color }} />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border" style={{ color: rec.color, borderColor: `${rec.color}66` }}>
                      {rec.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#821b1f]">{rec.title}</h3>
                  <p className="text-sm leading-relaxed text-[#555]">{rec.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section: Success Stories */}
      <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-[#f7f3ea] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#b98a32]">Pet Success Stories</h2>
          <div className="bg-white text-[#333] rounded-3xl p-8 shadow-xl max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="text-center md:text-left">
                <div className="text-5xl mb-2">{successStories[currentStory].image}</div>
                <h3 className="text-2xl font-bold text-[#821b1f] mb-1">{successStories[currentStory].petName}</h3>
                <p className="text-sm text-[#555]">{successStories[currentStory].petType}</p>
                <p className="text-sm font-medium text-[#b98a32]">Owner: {successStories[currentStory].owner}</p>
                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-[#f0e8d4] border border-[#b98a32] rounded-full text-[#b98a32]">
                  {successStories[currentStory].achievement}
                </span>
              </div>
              <div className="flex-1 text-left">
                <FaQuoteLeft className="text-2xl text-[#b98a32] mb-3" />
                <p className="italic text-[#555]">{successStories[currentStory].story}</p>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-between items-center mt-6">
              <button onClick={prevStory} className="p-3 rounded-full bg-[#f7f3ea] shadow hover:scale-110 transition">
                <FaChevronLeft className="text-[#821b1f]" />
              </button>
              <div className="flex gap-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`w-3 h-3 rounded-full ${index === currentStory ? "bg-[#821b1f]" : "bg-[#ccc]"} transition`}
                  />
                ))}
              </div>
              <button onClick={nextStory} className="p-3 rounded-full bg-[#f7f3ea] shadow hover:scale-110 transition">
                <FaChevronRight className="text-[#821b1f]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Testimonial (external component) */}
      <section className="w-full bg-[#821b1f] text-white">
        <Testimonial />
      </section>

      {/* Section: CTA Footer */}
      <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-[#821b1f] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white text-[#821b1f] p-12 rounded-3xl shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10 pointer-events-none">
              <FaPaw className="absolute top-4 left-4 text-3xl animate-float" />
              <FaUserMd className="absolute top-10 right-10 text-2xl animate-pulse-gentle" />
              <FaHeart className="absolute bottom-4 right-4 text-3xl animate-heartbeat" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Have questions or need more guidance?</h2>
              <p className="mb-8 text-lg opacity-90">
                Book a consultation with our experts today and get personalized advice for your pet's unique needs!
              </p>
              <Link
                to="/appointment"
                className="bg-[#b98a32] text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition inline-flex items-center justify-center gap-2"
              >
                <FaCalendarAlt />
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recommendations
