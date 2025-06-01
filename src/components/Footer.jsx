import { motion as Motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiGlobe } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h3 className="text-xl font-bold mb-4">Lucas E. - Dev Front-end</h3>
            <p className="text-gray-400 max-w-xs">
              Criação de sites profissionais e de alta conversão para seu
              negócio
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-8 md:mb-0"
          >
            <a
              href="https://github.com/lucasevangelistaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/lucas1108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com/lucassss.lc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiInstagram size={24} />
            </a>
            <a
              href="https://www.lucasevangelista.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiGlobe size={24} />
            </a>
            <a
              href="https://wa.me/5598984986243"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://wa.me/5598984986243"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              <FaWhatsapp className="mr-2" size={20} />
              Fale pelo WhatsApp
            </a>
          </Motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 mb-4 md:mb-0"
          >
            &copy; {currentYear} Lucas E. - Desenvolvedor Front-end. Todos os
            direitos reservados.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Termos de Serviço
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Política de Privacidade
            </a>

            <a
              href="/contato"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              LinkBio
            </a>
          </Motion.div>
        </div>
      </div>
    </footer>
  );
}
