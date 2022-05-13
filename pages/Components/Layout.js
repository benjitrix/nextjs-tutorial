import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <section className="content">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
 
export default Layout;