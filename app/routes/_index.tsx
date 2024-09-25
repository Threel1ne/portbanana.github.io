
import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";

export default function Index() {
  return (
    <div className="flex h-screen justify-center bg-gray-50">
      <div className="flex flex-col gap-16 items-center">
        <Navbar />
        <motion.img  
        className="rounded-full w-56 h-56 border-4 border-black"  
        src="/images/portpic.jpg" 
        initial={{ opacity: 0, scale: 0.8}}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.7, ease: "easeOut" }}/>

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
        >I've interested in robotics, When I was 8 years old ,Because my gradpa buy me some robotics kits, So  that make me fell in love with robotics
        </motion.p>
      </div>
    </div>
  );
}

