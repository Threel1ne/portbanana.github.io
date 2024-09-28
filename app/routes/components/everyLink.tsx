import { motion } from "framer-motion";
import { useEffect } from "react";
import { PiCertificate } from "react-icons/pi";
import { FaWrench } from "react-icons/fa6";
import { LiaAwardSolid } from "react-icons/lia";
import Lenis from "lenis";
export default function EveryLink() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Intercept anchor click events to use Lenis for smooth scrolling
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      if (targetId.startsWith("#")) {
        lenis.scrollTo(targetId);
      }
    };

    // Add event listeners to anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // Cleanup listeners and destroy Lenis on unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <motion.div
        className="flex flex-wrap justify-center gap-8 md:gap-32 items-center text-sm md:text-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.a
          href="#competition"
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex items-center gap-1"
        >
          <LiaAwardSolid />
          <span>competition</span>
        </motion.a>
        <motion.a
          href="#ability"
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="flex items-center gap-1"
        >
          <FaWrench />
          <span>ability</span>
        </motion.a>
        <motion.a
          href="#certificate"
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex items-center gap-1"
        >
          <PiCertificate />
          <span>Certificate</span>
        </motion.a>
      </motion.div>
    </>
  );
}
