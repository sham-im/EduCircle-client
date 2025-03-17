import { Outlet } from "react-router-dom";
// import Footer from "../pages/Footer";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const MainLayouts = () => {
  return (
    <div className="max-w-10/12 mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainLayouts;