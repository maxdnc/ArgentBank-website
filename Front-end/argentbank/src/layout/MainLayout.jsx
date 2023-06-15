// import layout
import Head from "./Head";
import Footer from "./Footer";

// import react-router-dom
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Head />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
