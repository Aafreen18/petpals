import { useState } from 'react';
import { FaQuestionCircle, FaTimes } from 'react-icons/fa';
import image from '../assets/cat-behavior.jpg'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

export default function HelpButtonModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed top-60 right-0 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-[#821b1f] text-[#f7f3ea] h-12 p-3 hover:bg-[#b98a32] transition-all duration-300 overflow-hidden flex items-center justify-center ${
            isOpen ? 'w-20' : 'w-12'
          } rounded-l-lg shadow-lg`}
        >
          <FaQuestionCircle className="w-full h-full" />
          {isOpen && <span className="ml-2 text-xs font-medium">HELP</span>}
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed top-60 right-0 z-40"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-[#f7f3ea] rounded-lg shadow-xl p-6 w-[400px] max-w-full relative border border-[#b98a32]/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#821b1f] hover:text-[#b98a32] transition-colors"
            >
              <FaTimes size={20} />
            </button>

            {/* Image and Content */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Image */}
              <div className="md:w-1/2 w-full mt-10">
                <img
                  src={image}
                  alt="Help Visual"
                  className="w-full h-auto rounded-md object-cover border-2 border-[#b98a32]/50"
                />
              </div>

              {/* Text Content */}
              <div className="md:w-1/2 w-full flex flex-col items-center justify-center gap-4">
                
                <img
                  src="/Petpals-logo.png"
                  alt="Petpals Logo"
                  className="w-[150px] h-auto object-contain"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(130, 27, 31, 0.2))'
                  }}
                />

                <h2 className="text-xl font-semibold text-[#821b1f]">
                  We are here <br /> for you!
                </h2>

                <Link to="/about/team"
                  className="bg-[#821b1f] text-[#f7f3ea] py-2 px-4 rounded-full hover:bg-[#b98a32] transition-all duration-300 whitespace-nowrap shadow-md"
                >
                  Know More
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}