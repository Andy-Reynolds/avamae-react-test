import "./Layout.scss";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
