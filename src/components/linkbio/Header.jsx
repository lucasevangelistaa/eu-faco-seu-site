import { motion as Motion } from "framer-motion";

export default function Header({ imageUrl, name, profession }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <Motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative"
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-28 h-28 rounded-full object-cover border-[3px] border-white shadow-xl"
        />
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent hover:border-blue-500/30 transition-all duration-300" />
      </Motion.div>
      <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
        {name}
      </h1>
      <p className="text-blue-600 dark:text-blue-400 font-medium mt-1 text-lg">
        {profession}
      </p>
    </Motion.div>
  );
}
