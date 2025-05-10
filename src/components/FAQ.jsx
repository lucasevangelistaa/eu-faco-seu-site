import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer:
      "O prazo varia conforme a complexidade do projeto. Sites institucionais simples levam em média 1 semana, enquanto e-commerces podem levar de 2 a 5 semanas.",
  },
  {
    question: "Você faz o design também ou só o desenvolvimento?",
    answer:
      "Posso trabalhar com um design fornecido por você ou seu designer, ou posso sugerir templates profissionais que podem ser customizados conforme sua identidade visual.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Trabalho com parcelamento em até 5x sem juros no cartão de crédito, ou desconto para pagamento à vista via PIX ou transferência bancária.",
  },
  {
    question: "Você oferece suporte após a entrega?",
    answer:
      "Sim, todos os projetos incluem 7 dias de suporte gratuito para ajustes menores. Após esse período, ofereço planos de manutenção mensal conforme necessidade.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o processo de desenvolvimento
          </p>
        </Motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <h3 className="font-medium text-gray-900">{faq.question}</h3>
                {activeIndex === index ? (
                  <FiMinus size={20} />
                ) : (
                  <FiPlus size={20} />
                )}
              </button>

              <Motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-b-lg shadow-sm"
              >
                <div className="p-6 pt-0 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </Motion.div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
