import { motion as Motion } from "framer-motion";
import { FiUser } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "O Lucas transformou completamente minha presença online. O trabalho foi além das expectativas e realmente fez a diferença no meu negócio.",
    name: "Amanda Vieira Cardoso",
    role: "Acadêmica em Educação Física",
  },
  {
    quote:
      "Profissionalismo e atenção aos detalhes. Entregou antes do prazo e superou nossas expectativas.",
    name: "Ana Oliveira",
    role: "Diretora de Marketing - DigitalPlus",
  },
  {
    quote:
      "O trabalho do Lucas foi além do esperado! Profissionalismo, atenção aos detalhes e uma entrega que realmente impressiona. O resultado ficou impecável!",
    name: "João Talison",
    role: "Empreendedor",
  },
];

export default function Testimonials() {
  return (
    <section id="Feedback" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que dizem meus clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feedback de quem já trabalhou comigo
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 shadow-sm"
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-4">
                  <FiUser className="text-blue-700 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
