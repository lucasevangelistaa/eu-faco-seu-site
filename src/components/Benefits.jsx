import { motion as Motion } from "framer-motion";
import { FiCode, FiSmartphone, FiZap, FiShield } from "react-icons/fi";

const benefits = [
  {
    icon: <FiCode size={32} />,
    title: "Código Limpo",
    description:
      "Desenvolvimento com as melhores práticas para sites rápidos e fáceis de manter",
  },
  {
    icon: <FiSmartphone size={32} />,
    title: "Responsivo",
    description:
      "Sites que se adaptam perfeitamente a qualquer dispositivo móvel ou desktop",
  },
  {
    icon: <FiZap size={32} />,
    title: "Performance",
    description:
      "Otimização para carregamento ultrarrápido e melhor rankeamento no Google",
  },
  {
    icon: <FiShield size={32} />,
    title: "Segurança",
    description:
      "Implementação de boas práticas de segurança para proteger seu site",
  },
];

export default function Benefits() {
  return (
    <section id="Beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vantagens Exclusivas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções personalizadas que fazem a diferença para o seu negócio
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-900 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
