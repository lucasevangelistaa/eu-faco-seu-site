import { motion as Motion } from "framer-motion";

export default function LinkButton({ icon, text, url }) {
  return (
    <Motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
      }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-md"
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span className="font-medium text-lg">{text}</span>
    </Motion.a>
  );
}
