import Header from "../components/linkbio/Header";
import LinkButton from "../components/linkbio/LinkButton";
import SocialLink from "../components/linkbio/SocialLink";
import "../styles/LinkBio.css";

import {
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { motion as Motion } from "framer-motion";

export default function Linktree() {
  return (
    <Motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        backgroundPosition: ["0% 50%", "100% 50%"],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-24"
      style={{
        background: "linear-gradient(270deg, #001f3f, #000000, #001f3f)",
        backgroundSize: "600% 600%",
      }}
    >
      <div className="glass-card w-full max-w-md mx-auto p-8 sm:p-10 z-10 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
        <Header
          imageUrl="https://www.lucasevangelista.site/assets/perfil-BCmArH_m.jpg"
          name="Lucas Evangelista"
          profession="Desenvolvedor Front-end"
        />

        <div className="mt-10 space-y-5">
          <LinkButton
            icon={<FaWhatsapp size={20} />}
            text="WhatsApp"
            url="https://wa.me/5598984986243?text=Ol%C3%A1%2C+Lucas%21+Gostaria+de+falar+sobre+um+site."
          />
          <LinkButton
            icon={<FaEnvelope size={20} />}
            text="E-mail"
            url="mailto:lucasevangelistadra@gmail.com?subject=Orçamento%20de%20site"
          />
          <LinkButton
            icon={<FaGlobe size={20} />}
            text="Portfólio"
            url="https://www.lucasevangelista.site/"
          />
          <LinkButton
            icon={<FaGlobe size={20} />}
            text="Site Profissional"
            url="https://www.techlev.site/"
          />
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex justify-center space-x-6">
          <SocialLink
            icon={<FaGithub size={22} />}
            url="https://github.com/lucasevangelistaa"
          />
          <SocialLink
            icon={<FaLinkedin size={22} />}
            url="https://www.linkedin.com/in/lucas1108"
          />
          <SocialLink
            icon={<FaInstagram size={22} />}
            url="https://www.instagram.com/lucassss.lc"
          />
        </div>
        <div className="mt-4 flex justify-center z-10">
          <Motion.a
            href="/"
            className="mt-4 inline-flex items-center m-auto text-white/70 hover:text-white transition-colors z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <FiArrowLeft className="mr-2" size={18} />
            Voltar
          </Motion.a>
        </div>
      </div>

      <Motion.p
        className="mt-8 text-sm text-white/80 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        © {new Date().getFullYear()} Lucas Evangelista. Todos os direitos
        reservados.
      </Motion.p>
    </Motion.div>
  );
}
