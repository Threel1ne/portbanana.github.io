import Navbar from "./components/navbar";
import Hero from "./components/hero";
import EveryLink from "./components/everyLink";
import { motion, useScroll } from "framer-motion";

export default function Index() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
        style={{ scaleX: scrollYProgress }}
      />{" "}
      <div className="flex justify-center">
        <div className="flex flex-col gap-16 items-center">
          <Navbar />
          <Hero />
          <EveryLink />
          <motion.img
            src="/images/work.jpg"
            className="object-cover rounded-md justify-end"
            alt="work"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </>
  );
}
