import "./Layout.scss";
import Navbar from "../Navbar/Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__content">{children}</main>
    </div>
  );
};
export default Layout;
