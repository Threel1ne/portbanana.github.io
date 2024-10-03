import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isOpen, toggleMenu }) => {
  const menuItems = ["home", "about", "contact"];

  return (
    <>
      <motion.nav
        className="relative w-full md:w-1/2 lg:w-1/3 flex items-center justify-end md:justify-center  rounded-full md:border-2 md:border-black p-4 mt-3 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo or Brand Name */}

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center justify-center">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-black uppercase hover:text-gray-500 transition duration-300"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Hamburger Menu */}
        <motion.div
          className="md:hidden cursor-pointer z-50"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className={`w-6 h-0.5 bg-black mb-1 transition-all ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black mb-1 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black transition-all ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </motion.div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="block text-4xl font-bold my-8 text-white hover:text-gray-300 transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={toggleMenu}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
