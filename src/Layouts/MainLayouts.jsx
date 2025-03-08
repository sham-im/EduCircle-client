import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import LoginRegister from "../authPages/Login";
import RegisterPage from "../authPages/RegisterPage";

const MainLayouts =() => {
  return (
    <div className="max-w-10/12 mx-auto">
      <Outlet />
   <RegisterPage></RegisterPage>
<Footer></Footer>
    </div>
  );
};
export default MainLayouts;