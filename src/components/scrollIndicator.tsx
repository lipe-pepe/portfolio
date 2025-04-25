"use client";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="flex justify-center items-center text-white"
      animate={{
        y: [0, 10, 0],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
    >
      <FaChevronDown size={32} />
    </motion.div>
  );
};

export default ScrollIndicator;
