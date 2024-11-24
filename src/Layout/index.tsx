import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Layout() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: "100px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
