import { motion as Motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { MdCheckCircle } from "react-icons/md";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const projects = [
  {
    image: project1,
    title: "Portfólio Pessoal - Front-End Developer",
    description:
      "Meu espaço online onde mostro minhas habilidades, projetos e o caminho que percorri como desenvolvedor front-end.",
    tags: [],
    links: [
      { icon: <FiExternalLink size={25} />, url: "https://lucas-evangelista-portfolio.vercel.app/" },
      // { icon: <FiGithub />, url: "#" },
    ],
  },
  {
    image: project2,
    title: "Portfólio Acadêmico - Educação Física",
    description:
      "Portfólio digital desenvolvido para uma estudante de Educação Física, destacando suas conquistas acadêmicas e experiências profissionais.",
    tags: [],
    links: [
      { icon: <FiExternalLink size={25} />, url: "https://amanda-portfolio-acad.vercel.app/" },
      // { icon: <FiGithub />, url: "#" },
    ],
  },
  {
    image: project3,
    title: "Site Profissional - Nutricionista",
    description:
      "Site criado para uma nutricionista, com foco na divulgação de seus serviços e captação de novos clientes.",
    tags: [],
    links: [
      { icon: <FiExternalLink size={25} />, url: "https://dr-nutricionista.vercel.app/" },
      // { icon: <FiGithub />, url: "#" },
    ],
  },
  {
    image: project4,
    title: "Barber Styles - Site de Barbearia",
    description:
      "Website funcional para barbearia com agendamento online e uma galeria que exibe os melhores trabalhos realizados pelos profissionais.",
    tags: [],
    links: [
      { icon: <FiExternalLink size={25} />, url: "https://lucasevangelistaa.github.io/barber/" },
      // { icon: <FiGithub />, url: "#" },
    ],
  },
  {
    image: project5,
    title: "Energia Total - Soluções Elétricas e Solares",
    description:
      "Site institucional moderno para empresa especializada em energia solar, instalações elétricas e manutenção de sistemas eletrônicos. Inclui seções de serviços, projetos, formulário de contato e integração com WhatsApp.",
    tags: [],
    links: [
      { icon: <FiExternalLink size={25} />, url: "https://energiasolar-iota.vercel.app/" },
      // { icon: <FiGithub />, url: "#" },
    ],
  },
  {
    image: project6,
    title: "Dr. Julius Neto - Advocacia Especializada",
    description:
      "Website profissional para o advogado Dr. Julius Neto, com apresentação dos serviços jurídicos, áreas de atuação, formulário de contato e integração com WhatsApp para atendimento rápido e direto.",
    tags: [],
    links: [
      { icon: <FiExternalLink size={25} />, url: "https://energiasolar-iota.vercel.app/" },
      // { icon: <FiGithub />, url: "#" },
    ],
  },
];


export default function Portfolio() {
  return (
    <section id="Portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex justify-center items-center">
            Trabalhos Concluídos <MdCheckCircle className="text-blue-900"/>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alguns dos trabalhos que desenvolvi para clientes satisfeitos
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-900 transition-colors"
                    >
                      { link.icon }
                    </a>
                  ))}
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
