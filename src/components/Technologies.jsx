import { FaHtml5 } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiJest,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io";
import { BsFiletypeScss } from "react-icons/bs";
import { PiFileCssLight, PiFileJsxThin } from "react-icons/pi";

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
        className="flex flex-wrap items-center justify-center gap-4 hover:text-clip"
      >
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-7xl p-1 text-black bg-yellow-300 rounded-lg" />
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-end font-semibold">
            Javascript
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl p-1 text-black bg-blue-900 rounded-lg" />
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-end font-semibold">
            Typescript
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-end font-semibold">
            React
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-7xl text-violet-800" />
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-end font-semibold">
            Redux
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJest className="text-7xl text-pink-900" />
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-end font-semibold">
            Jest
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl" />
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-end font-semibold">
            HTML
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <PiFileJsxThin className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <PiFileCssLight className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BsFiletypeScss className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill Nextjs className="text-7xl text-sky-500" />
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-end font-semibold">
            Tailwind
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="flex rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiStyledcomponents className="text-7xl " />
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-end">
            Styled Component
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
