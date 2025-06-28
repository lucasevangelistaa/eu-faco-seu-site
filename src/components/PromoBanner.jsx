import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import TpImg from "../assets/anuncio/templatepizza.png";
import TaImg from "../assets/anuncio/templateacai.png";
import ThImg from "../assets/anuncio/templateburguer.png";
import TdImg from "../assets/anuncio/templatedoce.png";

const templates = [
  {
    title: "Cardápio para Pizzaria",
    description: "Layout moderno com foco em combos e sabores.",
    image: TpImg,
    link: "https://templatepizzaria.vercel.app/",
    badge: "Mais popular",
  },
  {
    title: "Cardápio para Hamburgueria",
    description: "Ideal para lanches artesanais com identidade forte.",
    image: ThImg,
    link: "https://templatehamburgueria.vercel.app/",
},
{
    title: "Cardápio para Açaíteria",
    description: "Escolha de tamanho, adicionais e envio via WhatsApp.",
    image: TaImg,
    link: "https://templateacaiteria.vercel.app/",
    badge: "Novidade",
  },
  {
    title: "Cardápio para Doceria",
    description: "Visual encantador para bolos, doces e sobremesas.",
    image: TdImg,
    link: "https://templatedoces.vercel.app/",
  },
];

export default function PromoBanner() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container && window.innerWidth < 768) {
      container.scrollLeft = 0;
    }
  }, []);

  return (
    <section className="w-full pt-8 md:pt-16 pb-20 px-4 md:px-20 bg-white">
      <div className="text-center mb-12">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-3">
            Modelos profissionais
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Templates que <span className="text-blue-600">vendem por você</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Feitos sob medida para negócios locais de alimentação. Visual
            profissional, pronto para receber pedidos!
          </p>
        </Motion.div>
      </div>

      {/* Grid em desktop, carrossel em mobile */}
      <div
        ref={containerRef}
        className="flex md:grid gap-8 md:grid-cols-2 lg:grid-cols-4 overflow-x-auto scroll-smooth no-scrollbar pb-6 px-2"
      >
        {templates.map((template, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="min-w-[280px] max-w-[300px] md:min-w-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 border border-gray-100 overflow-hidden group"
          >
            <div className="relative h-[260px] md:h-[360px] flex items-center justify-center bg-gray-50">
              {template.badge && (
                <span
                  className={`absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full z-10 ${
                    template.badge === "Mais popular"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                  {template.badge}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              <img
                src={template.image}
                alt={template.title}
                className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                {template.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 min-h-[40px]">
                {template.description}
              </p>
              <Link
                to={template.link}
                className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-sm md:text-base group/button"
              >
                Ver Modelo
                <FiArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
              </Link>
            </div>
          </Motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            Todos os templates são 100% personalizáveis e otimizados para mobile
          </p>
        </Motion.div>
      </div>
    </section>
  );
}
