"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { client, urlFor } from "../lib/sanity";
import sectionDog from "../assets/dogg.png";


export default function Service() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "packageData"]`)
      .then((res) => setPackages(res))
      .catch((error) => console.error("Error fetching packages:", error));
  }, []);

  const fallbackPackages = [
    {
      id: 1,
      color: "#FF6B6B",
      image: sectionDog,
      title: "Adult Dog",
      price: "12,240",
      features: ["Vaccine Shots", "Health Construction"],
    },
    {
      id: 2,
      color: "#8B9FE8",
      image: sectionDog,
      title: "Puppy Care",
      price: "15,240",
      features: ["Vaccine Shots", "Health Construction", "Ear Cleaning"],
    },
    {
      id: 3,
      color: "#FFD93D",
      image: sectionDog,
      title: "Cat Care",
      price: "10,240",
      features: ["Vaccine Shots", "Health Construction", "Ear Cleaning"],
    },
    {
      id: 4,
      color: "#87CEEB",
      image: sectionDog,
      title: "Pet Nutrition",
      price: "8,240",
      features: ["Vaccine Shots", "Health Construction", "Ear Cleaning"],
    },
  ];

  const displayPackages = packages.length > 0 ? packages : fallbackPackages;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? displayPackages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === displayPackages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#f7f3ea]" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-[#8B4513] mb-8 tracking-tight">
            Our Packages
          </h1>
          <p className="text-gray-500 text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed font-light">
            Choose From An Extensive Set Of Curated Plans And Select The One That Fits Your
            <br />
            Pet's Needs The Best. Individual Service Options Are Also Available.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#B8860B] hover:bg-[#A0750A] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#B8860B] hover:bg-[#A0750A] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div className="flex items-end justify-center px-20 gap-6 h-[750px]">
            {displayPackages.map((pkg, index) => {
              const cardConfigs = [
                {
                  width: "w-[280px]",
                  height: "h-[520px]",
                  imageSize: "w-32 h-32",
                  titleSize: "text-2xl",
                  priceSize: "text-2xl",
                  padding: "p-7",
                },
                {
                  width: "w-[300px]",
                  height: "h-[580px]",
                  imageSize: "w-36 h-36",
                  titleSize: "text-3xl",
                  priceSize: "text-3xl",
                  padding: "p-6",
                },
                {
                  width: "w-[320px]",
                  height: "h-[660px]",
                  imageSize: "w-40 h-40",
                  titleSize: "text-3xl",
                  priceSize: "text-3xl",
                  padding: "p-4",
                },
                {
                  width: "w-[340px]",
                  height: "h-[740px]",
                  imageSize: "w-44 h-44",
                  titleSize: "text-4xl",
                  priceSize: "text-4xl",
                  padding: "p-4",
                },
              ];

              const config = cardConfigs[index] || cardConfigs[0];

              return (
                <div
                  key={pkg._id || pkg.id}
                  className={`${config.width} ${config.height} rounded-3xl shadow-xl ${config.padding} flex flex-col transition-all duration-300 hover:scale-105 hover:-translate-y-2`}
                  style={{ backgroundColor: pkg.color }}
                >
                  {/* Image Section */}
                  <div className="flex justify-center mb-4">
                    <div className={`${config.imageSize} relative overflow-hidden rounded-2xl`}>
                      {pkg.image && typeof pkg.image === 'object' ? (
                        <img
                          src={urlFor(pkg.image).url()}
                          alt={pkg.title || "Package image"}
                          className="w-full h-full object-cover"
                        />
                      ) : pkg.image && typeof pkg.image === 'string' ? (
                        <img
                          src={pkg.image}
                          alt={pkg.title || "Package image"}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/20 flex items-center justify-center">
                          <span className="text-white text-2xl">🐕</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Section - Takes remaining space */}
                  <div className="flex-1 flex flex-col">
                    {/* Title and Price */}
                    <div className="mb-4">
                      <h2 className={`${config.titleSize} font-bold text-white mb-3`}>
                        {pkg.title || "Package"}
                      </h2>
                      <div> 
                        <p className="text-lg text-white mb-1 font-medium">Starting At</p>
                        <p className={`${config.priceSize} font-bold text-white mb-1`}>
                          ₹{pkg.price || "0"}
                        </p>
                        <p className="text-sm text-white opacity-90 font-light">
                          * Prices Inclusive Of GST
                        </p>
                      </div>
                    </div>

                    {/* Features Section - Takes remaining space */}
                    <div className="flex-1 mb-6">
                      <h3 className="text-xl font-bold text-white mb-4">What You'll Get</h3>
                      <ul className="space-y-3 text-white text-base">
                        {(pkg.features || []).map((feature, idx) => (
                          <li key={idx} className="flex items-center font-medium">
                            <span className="mr-3 text-lg">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button Section - Always at bottom */}
                    <div>
                      <button className="w-full bg-white text-gray-800 hover:bg-gray-100 font-bold py-3 text-lg rounded-full shadow-md transition-all duration-300">
                        {pkg.buttonText || "Choose"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden relative">
          <div className="flex items-end justify-center gap-4 h-[600px] px-8">
            {displayPackages.map((pkg, index) => {
              const tabletHeights = ["h-[400px]", "h-[460px]", "h-[520px]", "h-[580px]"];

              return (
                <div
                  key={pkg._id || pkg.id}
                  className={`w-[200px] ${tabletHeights[index]} rounded-2xl shadow-xl p-4 flex flex-col justify-between`}
                  style={{ backgroundColor: pkg.color }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-24 h-24 relative overflow-hidden rounded-xl">
                      {pkg.image && typeof pkg.image === 'object' ? (
                        <img
                          src={urlFor(pkg.image).url()}
                          alt={pkg.title || "Package image"}
                          className="w-full h-full object-cover"
                        />
                      ) : pkg.image && typeof pkg.image === 'string' ? (
                        <img
                          src={pkg.image}
                          alt={pkg.title || "Package image"}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/20 flex items-center justify-center">
                          <span className="text-white text-lg">🐕</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <h2 className="text-xl font-bold text-white mb-2">{pkg.title || "Package"}</h2>
                    <div className="mb-3">
                      <p className="text-sm text-white mb-1">Starting At</p>
                      <p className="text-xl font-bold text-white">₹{pkg.price || "0"}</p>
                      <p className="text-xs text-white opacity-90">
                        * Prices Inclusive Of GST
                      </p>
                    </div>
                    <div className="mb-4 flex-1">
                      <h3 className="text-sm font-bold text-white mb-2">What You'll Get</h3>
                      <ul className="space-y-1 text-white text-xs">
                        {(pkg.features || []).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <button className="w-full bg-white text-gray-800 font-bold py-2 text-sm rounded-full">
                        {pkg.buttonText || "Choose"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative">
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#B8860B] hover:bg-[#A0750A] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#B8860B] hover:bg-[#A0750A] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {displayPackages.map((pkg) => (
                <div key={pkg._id || pkg.id} className="w-full flex-shrink-0 flex justify-center px-4">
                  <div
                    className="w-80 h-[500px] rounded-3xl shadow-xl p-6 flex flex-col justify-between"
                    style={{ backgroundColor: pkg.color }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-28 h-28 relative overflow-hidden rounded-2xl">
                        {pkg.image && typeof pkg.image === 'object' ? (
                          <img
                            src={urlFor(pkg.image).url()}
                            alt={pkg.title || "Package image"}
                            className="w-full h-full object-cover"
                          />
                        ) : pkg.image && typeof pkg.image === 'string' ? (
                          <img
                            src={pkg.image}
                            alt={pkg.title || "Package image"}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-white/20 flex items-center justify-center">
                            <span className="text-white text-xl">🐕</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <h2 className="text-3xl font-bold text-white mb-3">{pkg.title || "Package"}</h2>
                      <div className="mb-4">
                        <p className="text-lg text-white mb-1">Starting At</p>
                        <p className="text-3xl font-bold text-white">₹{pkg.price || "0"}</p>
                        <p className="text-sm text-white opacity-90">
                          * Prices Inclusive Of GST
                        </p>
                      </div>
                      <div className="mb-6 flex-1">
                        <h3 className="text-xl font-bold text-white mb-3">What You'll Get</h3>
                        <ul className="space-y-2 text-white text-base">
                          {(pkg.features || []).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="mr-3">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto">
                        <button className="w-full bg-white text-gray-800 font-bold py-3 text-lg rounded-full shadow-md">
                          {pkg.buttonText || "Choose"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {displayPackages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? "bg-[#B8860B]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
