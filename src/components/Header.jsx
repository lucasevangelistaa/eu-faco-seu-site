import { motion as Motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/LogoTechLev.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Itens do menu que fazem scroll
  const scrollItems = ["Home", "Beneficios", "Portfolio", "Feedback", "FAQ", "Contatos"];

  return (
    <Motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Motion.div whileHover={{ scale: 1.05 }}>
          <img src={logo} alt="Logo TechLev" className="w-36" />
        </Motion.div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          {scrollItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              {item}
            </Link>
          ))}

          <a
            href="/contato"
            className="cursor-pointer text-gray-700 hover:text-blue-900 font-medium transition-colors"
          >
            LinkBio
          </a>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <Motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="bg-white px-6 py-4 space-y-4 shadow-md">
          {scrollItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="block py-2 text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              {item}
            </Link>
          ))}

          <a
            href="/contato"
            onClick={closeMenu}
            className="block py-2 text-gray-700 hover:text-blue-900 font-medium transition-colors"
          >
            LinkBio
          </a>
        </div>
      </Motion.div>
    </Motion.header>
  );
}
