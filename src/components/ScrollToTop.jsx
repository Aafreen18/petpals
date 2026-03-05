import { CiCircleChevUp } from "react-icons/ci";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="ml-auto block rounded-full" // ml-auto pushes it to the right
      aria-label="Scroll to top"
    >
      <CiCircleChevUp className="w-10 h-10" />
    </button>
  );
};

export default ScrollToTop;