import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const AppLayout = () => {
  return (
    <main className="w-full bg-[#ffffff] dark:bg-[#181A2A]">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AppLayout;
