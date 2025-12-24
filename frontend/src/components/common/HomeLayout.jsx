import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CallToACtion from "./CallToAction";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <CallToACtion />
      <Footer />
    </>
  );
};

export default HomeLayout;
