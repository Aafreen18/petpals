import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({ children }) {
  const location = useLocation();

  // Define routes where navbar and footer should be hidden
  const hideNavFooter =
    location.pathname === "/register" ||
    ![
      "/",
      "/telehealth",
      "/referral",
      "/plans",
      "/about/team",
      "/about/mission",
      "/about/blog",
      "/about/contact",
      "/services/offerings",
      "/services/packages",
      "/services/recommendations",
      "/appointment",
      "/service",
      "/contact",
    ].includes(location.pathname);

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <div className={!hideNavFooter ? "container" : ""}>
        {children}
      </div>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default Layout;