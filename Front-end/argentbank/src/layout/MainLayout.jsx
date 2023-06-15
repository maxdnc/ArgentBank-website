// import layout
import Head from "./Head";
import Footer from "./Footer";

// import react-router-dom
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Head />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
