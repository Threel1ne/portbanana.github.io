import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";

export default function Index() {
  return (
    <div className="flex h-screen justify-center">
      <div className="flex flex-col gap-16 items-center">
        <Navbar />
        <div className="relative w-64 h-64">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-1 bg-white rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/images/portpic.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <motion.h1
          className="font-bold text-6xl drop-shadow-lg text-transparent
            bg-clip-text bg-gradient-to-r from-blue-600 
            via-green-500 to-indigo-400 mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Hi! I'm{" "}
          <motion.span
            className="text-black underline"
            whileHover={{ scale: 1.2, color: "#ff6347" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Pasitthichai
          </motion.span>{" "}
          :)
        </motion.h1>
        <motion.p
          className="font-semibold text-4xl text-center w-[50%]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          My interest in robotics began at the age of eight when my grandfather
          gifted me several robotics kits. This early exposure sparked a passion
          for the field that has continued to grow ever since.{" "}
        </motion.p>
        <div className="flex gap-32 items-center text-xl">
          <a href="">test</a>
          <a href="">test</a>
          <a href="">test</a>
          <a href="">test</a>
        </div>
      </div>
    </div>
  );
}
