import { motion as Motion } from "framer-motion";
import { FiCheckCircle, FiClock } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Guarantee() {
  return (
    <section id="Guarantee" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center bg-white text-blue-900 rounded-full p-3 mb-6">
            <FiCheckCircle size={32} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Garantia de Satisfação
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center">
              <FiClock className="mr-2 text-blue-200" size={24} />
              <span>Entrega rápida</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-blue-700"></div>
            <div className="flex items-center">
              <FiCheckCircle className="mr-2 text-blue-200" size={24} />
              <span>7 dias de garantia</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-blue-700"></div>
            <div className="flex items-center">
              <FiCheckCircle className="mr-2 text-blue-200" size={24} />
              <span>Suporte pós-entrega</span>
            </div>
          </div>

          <p className="text-lg text-blue-100 mb-8">
            Caso não esteja completamente satisfeito com o resultado, nós trabalharemos junto com você para ajustes rápidos, garantindo que seu site atenda perfeitamente às suas necessidades.
          </p>

          <Link
            to="Contatos"
            smooth={true}
            duration={500} 
          >
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Quero meu site agora
            </Motion.button>
          </Link>
        </Motion.div>
      </div>
    </section>
  );
}
