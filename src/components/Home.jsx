import { motion as Motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowDown } from "react-icons/fi";
import HomeImg from "../assets/Home-img1.jpg";

export default function Home() {
  return (
    <section id="Home" className="relative bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <Motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-12 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sites profissionais que{" "}
            <span className="text-blue-900">
              convertem visitantes em clientes
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Desenvolvimento focado em performance, design atraente e
            experiência do usuário.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="Contatos" smooth={true} duration={500}>
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Solicitar Orçamento
              </Motion.button>
            </Link>
            <Link to="Beneficios" smooth={true} duration={500}>
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-700 px-8 py-3 rounded-lg font-medium border border-gray-300 hover:border-blue-900 transition-all"
              >
                Conheça os benefícios <FiArrowDown className="ml-2" />
              </Motion.button>
            </Link>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 relative"
        >
          <div className="relative">
            <Motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -inset-4 bg-blue-100 rounded-2xl opacity-20"
            />

            <Motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img
                src={HomeImg}
                alt="Desenvolvedor Front-end trabalhando"
                className="w-full h-auto object-cover"
              />

              {/* Efeito de badge animado */}
              <Motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="font-medium">Disponível para projetos</span>
              </Motion.div>
            </Motion.div>
          </div>

          {/* Elementos decorativos */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -bottom-8 -left-8 w-16 h-16 bg-yellow-400 rounded-full opacity-20"
          />
          <Motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -top-8 -right-8 w-24 h-24 bg-blue-900 rounded-full opacity-10"
          />
        </Motion.div>
      </div>
    </section>
  );
}
