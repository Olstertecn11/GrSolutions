import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";


const MainLayout = ({ children }) => {
  console.log('MainLayout');

  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
