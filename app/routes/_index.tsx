import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import EveryLink from "./components/everyLink";
import ImageSlideRevealGrid from "./components/ImageSlideRevealGrid";
import Cer from "./components/Certificate";

export default function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  console.log(isOpen);
  return (
    <>
      <motion.div
        className="progress-bar fixed top-0 left-0 h-1 md:h-2 right-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% z-50"
        style={{ scaleX: scaleX }}
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
