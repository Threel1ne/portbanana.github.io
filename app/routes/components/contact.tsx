import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <motion.div
        className="flex flex-col items-center gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <a
            href="mailto:achxpj@gmail.com"
            className="text-xl font-inter uppercase font-semibold md:font-bold lg:font-bold md:text-4xl lg:text-4xl text-gray-800 border-b-2 border-gray-800 border-opacity-70 text-opacity-70 hover:text-opacity-100 hover:border-opacity-100 transition duration-300"
          >
            achxpj@gmail.com
          </a>
        </div>

        <a
          href="https://github.com/yourgithubprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4"
        >
          <button className="px-6 py-3 text-lg font-bold text-white bg-gray-800 hover:bg-gray-900 rounded-md transition duration-300">
            GitHub
          </button>
        </a>

        <p className="mt-10 text-center text-lg text-gray-600">
          Be the one in KMITL
        </p>
      </motion.div>
    </section>
  );
}
