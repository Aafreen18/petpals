import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const MembershipCard = ({ time, price, hoverColor, benefits, isHovered, cardIndex, hoveredIndex }) => {
  const shadowClass = isHovered ? 'shadow-2xl' : 'shadow-xl';
  const isDimmed = hoveredIndex !== null && hoveredIndex !== cardIndex;

  return (
    <div
      className={`w-full bg-[#821b1f] rounded-2xl sm:rounded-3xl ${shadowClass} overflow-hidden transition-all duration-300 ${hoverColor || ''}`}
      style={{
        ...(isDimmed
          ? {
              backgroundColor: "#5e3a1f",
              filter: 'brightness(0.8)'
            }
          : {
              backgroundColor: "#821b1f"
            }),
        transform: isHovered ? 'translateY(-16px)' : 'translateY(0)',
      }}
    >
      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <div className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-[#f7f3ea] leading-tight">
          {time}<br /> Membership
        </div>
        <p className="text-[#f7f3ea] text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 border-b pb-2 border-[#b98a32]">
          ₹{price}
        </p>

        <p className="text-[#f7f3ea] text-xs sm:text-sm mb-2 sm:mb-3 opacity-80 leading-relaxed">
          Purchase possible on DCC PetConnect App
        </p>
        <p className="text-[#f7f3ea] text-xs sm:text-sm mb-3 sm:mb-4 opacity-70">
          (GST Included + T&C Apply)
        </p>

        <div className="mb-4 sm:mb-6 text-[#f7f3ea]">
          <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Inclusive of:</h3>
          <ul className="space-y-1 sm:space-y-2">
            {benefits && benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-[#b98a32] mt-0.5 flex-shrink-0">
                  <IoMdCheckmarkCircleOutline className="text-sm sm:text-base" />
                </span>
                <span className="text-gray-200 text-xs sm:text-sm leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 sm:pt-4">
          <Link to="/plans">
            <button className="w-full bg-[#b98a32] font-bold hover:bg-[#f7f3ea] hover:text-[#821b1f] text-[#f7f3ea] py-2 sm:py-3 px-4 rounded-2xl sm:rounded-3xl transition duration-200 border border-transparent hover:border-[#821b1f] text-sm sm:text-base">
              Choose Plan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
