import {Header} from '../components/Header';
// import Sidebar from '../components/Sidebar';
import {Footer} from '../components/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div className="page-wrapper">
        {/* <Sidebar /> */}

        <main>
          {children}
        </main>
      </div>

      <Footer />
    </>
  );
}

