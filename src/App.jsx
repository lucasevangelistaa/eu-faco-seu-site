import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Guarantee from "./components/Guarantee";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LinkBio from "./pages/LinkBio";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen font-sans bg-white">
            <Header />
            <Home />
            <Benefits />
            <Portfolio />
            <Testimonials />
            <Guarantee />
            <FAQ />
            <Contact />
            <Footer />
          </div>
        }
      />
      <Route path="/contato" element={<LinkBio />} />
    </Routes>
  );
}

export default App;
