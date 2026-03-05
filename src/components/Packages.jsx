const Packages = ({
  title,
  price,
  backgroundColor,
  features,
  imageUrl,
  height,
  dimmed = false,
  buttonPaddingBottom = '0px', 
}) => {
  return (
    <div
      className="w-90 flex flex-col rounded-t-3xl h-[500px] overflow-hidden shadow-lg p-8 font-sans bg-no-repeat bg-[right_2rem_bottom] bg-[length:200px] hover:z-100 transition-all duration-300"
      style={{
        backgroundColor: dimmed ? '#b98a32' : backgroundColor,
        height: `${height}px`,
        backgroundImage: `url('${imageUrl}')`,
      }}
    >
      {/* Main content (flex-grow takes remaining space) */}
      <div className="flex-grow">
        <div className="mb-4">
          <h2 className="text-5xl font-extrabold text-white">{title}</h2>
        </div>

        <div className="mb-6">
          <p className="text-2xl font-bold text-white">Starting at </p>
          <p className="text-2xl font-bold text-white">₹{price}</p>
          <p className="text-sm text-gray-100">* Prices Inclusive of GST</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">What you'll get</h3>
          <ul className="space-y-2 text-white">
            {features.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

    
      <div 
        className="pt-4" 
        style={{ 
          paddingBottom: buttonPaddingBottom, 
        }}
      >
        <button className="bg-[#821b1f] text-center font-bold hover:bg-white hover:text-[#821b1f] text-white py-2 px-4 rounded-3xl transition duration-200">
          Choose
        </button>
      </div>
    </div>
  );
};

export default Packages;