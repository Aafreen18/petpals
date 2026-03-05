import { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanity";
import { Link } from "react-router-dom";
import img from "../assets/section-dog.png"; // Adjust the path as necessary

const Service = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "serviceSection"][0]`).then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <div className="full-width-breakout flex flex-col md:flex-row items-center justify-between bg-[#b37e2f] min-h-screen px-6 md:px-20 py-10">
      {/* Left: Doctor and Dog Image */}
      <div className="w-full md:w-2/3 flex item-left  justify-center mb-10 md:mb-0">
        <img
          src={img}
          alt="Veterinarian with dog"
          className="w-[80%] max-w-md object-contain md:justify-start"
        />
      </div>
      {/* Right: Text and Button */}
      <div className="w-full md:w-2/3 text-white text-left space-y-6">
        <h1 className="text-5xl font-extrabold leading-snug text-center md:text-left">
          If You're A Pet Parent, <br />
          We Have It All Planned <br />
          For You.
        </h1>
        <div className="flex flex-col items-end space-y-4">
          <p className="text-lg text-right font-light">
            If You're A Pet Parent, We HWellness And Happiness For Your Pets.{" "}
            <br /> At DCC, They Come First. <br /> Ave It All Planned For You.
          </p>
          <Link to="/services" className="bg-[#6b1212] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#530e0e] transition duration-300">
            View Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
