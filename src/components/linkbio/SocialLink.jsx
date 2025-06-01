import { motion as Motion } from "framer-motion";

export default function SocialLink({ icon, url }) {
  return (
    <Motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: 2,
        scale: 1.3,
        color: "#3b82f6",
      }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-75 text-2xl"
    >
      {icon}
    </Motion.a>
  );
}
