import { FaHtml5 } from "react-icons/fa";
import {
  RiJavascriptLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiJest, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJest className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill Nextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 Nextjs className="text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
