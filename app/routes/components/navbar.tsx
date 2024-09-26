import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      className="flex gap-8 rounded-full border-2 border-black p-4 items-center justify-center mt-3 drop-shadow-lg"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5}}
    >
      <motion.a
        href="#"
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-black hover:text-gray-500 transition duration-300"
      >
        Home
      </motion.a>
      <motion.a
        href="#"
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-black hover:text-gray-500 transition duration-300"
      >
        About
      </motion.a>
      <motion.a
        href="#"
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-black hover:text-gray-500 transition duration-300"
      >
        Services
      </motion.a>
      <motion.a
        href="#"
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-black hover:text-gray-500 transition duration-300"
      >
        Contact
      </motion.a>
    </motion.div>
  );
}
