import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import EveryLink from "./components/everyLink";
import ImageSlideRevealGrid from "./components/ImageSlideRevealGrid";

export default function Index() {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  console.log(isOpen);
  return (
    <>
      <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div
        className={`flex flex-col gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        {" "}
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        <Hero />
        <EveryLink />
        <ImageSlideRevealGrid />
      </div>
    </>
  );
}
