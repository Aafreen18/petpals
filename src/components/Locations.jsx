import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { client } from "../lib/sanity";
import { getLocationsQuery } from "../lib/queries";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await client.fetch(getLocationsQuery);
      setLocations(data);
    };
    fetchLocations();
  }, []);

  return (
    <div className="bg-[#f7f3ea] p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
        {locations.map((location, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-lg font-semibold text-[#821b1f]">{location.title}</h3>
            <div className="space-y-2">
              {location.items.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  {item.isTime ? (
                    <FaClock className="text-[#b98a32] mr-2 mt-0.5 flex-shrink-0" />
                  ) : (
                    <FaMapMarkerAlt className="text-[#821b1f] mr-2 mt-0.5 flex-shrink-0" />
                  )}
                  {item.map ? (
                    <a
                      href={item.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#821b1f] text-sm hover:text-[#b98a32] hover:underline"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className={`text-sm ${item.isTime ? "text-[#b98a32]" : "text-[#821b1f]"}`}>
                      {item.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="max-w-7xl mx-auto border-[#821b1f] border-t" />
    </div>
  );
};

export default Locations;
