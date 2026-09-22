import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

export  const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
