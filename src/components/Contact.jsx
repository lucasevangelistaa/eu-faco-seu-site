import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

  return (
    <section id="Contatos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-1 shadow-xl">
          <div className="bg-white rounded-lg p-8 md:p-12">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-lg text-gray-600">
                Entre em contato agora mesmo para discutirmos seu projeto
              </p>
            </Motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="bg-blue-100 text-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FaWhatsapp size={24} />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Resposta rápida</p>
                <a
                  href="https://wa.me/5598984986243?text=Olá%20Lucas,%20gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
                >
                  Enviar mensagem
                </a>
              </Motion.div>

              <Motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="bg-blue-100 text-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FiMail size={24} />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">lucasevangelistadra@gmail.com</p>
                <a
                  href="mailto:lucasevangelistadra@gmail.com"
                  className="inline-block bg-blue-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
                >
                  Enviar email
                </a>
              </Motion.div>

              <Motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="bg-blue-100 text-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FiPhone size={24} />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Telefone</h3>
                <p className="text-gray-600 mb-4">(98) 98498-6243</p>
                <a
                  href="tel:+5598984986243"
                  className="inline-block bg-blue-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
                >
                  Ligar agora
                </a>
              </Motion.div>
            </div>

            <Motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gray-600 mb-6">
                Ou se preferir, preencha o formulário abaixo:
              </p>

              <form className="max-w-lg mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    required
                  />
                </div>
                <textarea
                  placeholder="Conte mais sobre seu projeto..."
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                ></textarea>
                <a
                  href={
                    isFormValid
                      ? `https://wa.me/5598984986243?text=${encodeURIComponent(
                          `Olá Lucas! Me chamo ${name}.\n\nMeu e-mail é: ${email}\n\nSobre o projeto: ${message}`
                        )}`
                      : "#"
                  }
                  onClick={(e) => {
                    if (!isFormValid) {
                      e.preventDefault();
                      alert("Preencha todos os campos antes de enviar.");
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-8 py-3 rounded-lg font-medium shadow-lg transition-all w-full md:w-auto text-center ${
                    isFormValid
                      ? "bg-blue-900 text-white hover:shadow-xl"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Enviar mensagem
                </a>
              </form>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
