import { motion } from "framer-motion";

export default function Arms({ a, top, left, bottom, right }) {
  return (
    <motion.p
      className="text-4xl text-white font-thin px-8 py-2 border border-white rounded-lg absolute w-fit h-fit"
      initial={{ x:0,y:0, translateX: '-50%', translateY: '-50%' }}
      animate={{ x:top | bottom, y: left | right, translateX: '0%', translateY: '0%' }}
      transition={{ duration: 0.8 }}
    >
      {a}
    </motion.p>
  );
}