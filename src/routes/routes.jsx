import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Referral from "../pages/Referral";
import Plans from "../pages/Plans";
import Register from "../pages/Register";
import Appointment from "../pages/Appointment";
import Service from "../pages/Service";
import Error from "../pages/Error";

// About Pages
import Mission from "../pages/About/Mission";
import Team from "../pages/About/Team";
import Blog from "../pages/About/Blog";
import Contact from "../pages/About/Contact";

// Services Pages
import Packages from "../pages/Services/Packages";
import Recommendations from "../pages/Services/Recommendations";

function AppRoutes() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />

      <Route path="/referral" element={<Referral />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/register" element={<Register />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/service" element={<Service />} />
      {/* About Pages */}
      <Route path="/about/team" element={<Team />} />
      <Route path="/about/mission" element={<Mission />} />
      <Route path="/about/blog" element={<Blog />} />
      <Route path="/about/contact" element={<Contact />} />
      {/* Services Pages */}
      <Route path="/services/packages" element={<Packages />} />
      <Route path="/services/recommendations" element={<Recommendations />} />
      {/* Catch-all for 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;
