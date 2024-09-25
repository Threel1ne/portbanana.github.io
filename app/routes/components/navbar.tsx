import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
      <div className="flex gap-8 rounded-full border-2 border-black p-4 items-center justify-center mt-3">
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
      </div>
  );
}

