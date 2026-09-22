import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Layout({ children }) {
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

export default Layout;