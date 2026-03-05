import { useState, useEffect, useRef } from "react";

const cityFacilitiesMap = {
  Gurugram: ["DCC Animal Hospital, Gurugram", "DCC Petcare Gurugram"],
  "New Delhi": ["DCC Animal Hospital, GK2, Delhi", "DCC Animal Hospital, Uday Park, Delhi"],
  Jaipur: ["DCC Animal Hospital, Jaipur"],
  Rewari: ["DCC Animal Hospital, Rewari"],
  "Tele-consult From Home": ["Not Applicable"],
};

const Carousel = ({ slides = [], interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  // Booking form state
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedFacility, setSelectedFacility] = useState("");
  const cities = Object.keys(cityFacilitiesMap);
  const availableFacilities = selectedCity ? cityFacilitiesMap[selectedCity] : [];

  // Carousel navigation functions
  const nextSlide = () => {
    if (!slides.length) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 200);
    resetTimer();
  };

  const goToSlide = (index) => {
    if (!slides.length || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 200);
    resetTimer();
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, interval);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length]);

  // Booking form handlers
  const onCityChange = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
    setSelectedFacility("");
  };
  const onFacilityChange = (e) => {
    setSelectedFacility(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking requested for ${selectedFacility} in ${selectedCity}`);
  };

  // Prevent rendering if no slides
  if (!slides.length) {
    return <div className="text-center py-20">No slides available</div>;
  }

  // Defensive current slide & image URL
  const current = slides[currentSlide] || {};
  

  return (
    <div className="relative full-width-breakout h-[500px] md:h-[550px] overflow-hidden select-none">
      {/* Background image */}
      {current.image ? (
        <img
          src={current.image}
          alt={current.title || ""}
          className={`w-full h-full object-cover object-center absolute inset-0 z-0 transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />
      ) : (
        <div className="absolute inset-0 bg-gray-300" />
      )}

      {/* Centered text content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 text-center mb-20">
        <h1
          className={`text-white text-3xl md:text-5xl font-bold drop-shadow-lg transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {current.title}
        </h1>
        <p
          className={`mt-3 text-white text-lg md:text-2xl drop-shadow-lg transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {current.description}
        </p>
      </div>

  <form
  onSubmit={handleSubmit}
  className="
    absolute left-0 bottom-0 z-20
    shadow-2xl
    rounded-tr-[2.2rem] rounded-br-[2rem]
    w-full max-w-[600px]
  "
  style={{
    minWidth: 320,
    borderTopRightRadius: 36,
    borderBottomRightRadius: 32,
  }}
>
  <h1 
    className="text-[#b98a32] bg-[#821b1f] text-left font-semibold text-base px-4 p-3 tracking-wide whitespace-nowrap inline-block relative pr-12"
    style={{
      clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0% 100%)',
    }}
  >
    Book an Appointment
  </h1>

  <div 
    className="
      flex flex-col sm:flex-row gap-2 sm:gap-3
      w-full
      bg-[#821b1f]
      py-4 px-4
      overflow-hidden
    "
    style={{
      clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)', // Changed from 75% to 85%
      paddingRight:'100px'
    }}
  >
    <select
      className="rounded-2xl bg-[#821b1f] text-white px-2 py-1.5 text-sm border focus:ring-2 focus:ring-[#b98a32] w-full sm:min-w-[100px]"
      value={selectedCity}
      onChange={onCityChange}
      required
      aria-label="Select City"
    >
      <option value="">Select City</option>
      {cities.map((city, idx) => (
        <option value={city} key={idx}>
          {city}
        </option>
      ))}
    </select>
    
    <select
      className="rounded-2xl bg-[#821b1f] text-white px-2 py-1.5 text-sm border focus:ring-2 focus:ring-[#b98a32] w-full sm:min-w-[120px]"
      value={selectedFacility}
      onChange={onFacilityChange}
      required
      disabled={!selectedCity}
      aria-label="Select Facility"
    >
      <option value="">
        {selectedCity === ""
          ? "Select Facility"
          : availableFacilities[0] === "Not Applicable"
          ? "Not applicable"
          : "Select Facility"}
      </option>
      {availableFacilities &&
        availableFacilities[0] !== "Not Applicable" &&
        availableFacilities.map((f, idx) => (
          <option value={f} key={idx}>
            {f}
          </option>
        ))}
    </select>
    
    <button
      type="submit"
      className="rounded-2xl bg-white text-[#821b1f] text-sm px-3 py-1.5 font-semibold hover:bg-[#f7f3ea] hover:text-[#821b1f] transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap w-full sm:w-auto"
      disabled={!selectedCity}
      aria-label="Book an Appointment"
    >
      Book an Appointment
    </button>
  </div>
</form>


      {/* Slide indicators (dots only, at bottom right) */}
      <div className="absolute right-6 bottom-4 flex space-x-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              idx === currentSlide ? "bg-[#b98a32]" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;