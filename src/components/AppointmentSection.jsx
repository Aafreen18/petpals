import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import man from "../assets/man.png";
import { Link } from "react-router-dom";

const Service = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "appointmentSection"][0]`)
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#f7f3ea]" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      
      {/* Diagonal background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-red-800"
          style={{ clipPath: "polygon(0 0, 65% 0, 45% 100%, 0% 100%)" }}
        />
        <div
          className="absolute inset-0 bg-yellow-600"
          style={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 25% 100%)" }}
        />
        <div
          className="absolute inset-0 bg-gray-100"
          style={{ clipPath: "polygon(75% 0, 100% 0, 100% 100%, 55% 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Image (shows first on mobile) */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <img
                src={man}
                alt="Veterinarian with dog"
                className="w-full max-w-sm sm:max-w-md lg:max-w-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="text-white space-y-6 order-2 lg:order-1 text-center lg:text-left sm:text-black">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Consult Online Via Telehealth With DCC
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed">
                Avail Convenient Medical Advice Via Our Easy-To-Book Telehealth Consults
              </p>

              <div className="pt-4">
                <Link to="/appointment" className="lg:bg-yellow-600 sm:bg-[#821b1f] hover:bg-yellow-700 text-white px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg transition-colors duration-200">
                  Book An Appointment
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;