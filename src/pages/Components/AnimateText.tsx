"use client"
import { motion } from "framer-motion";

const quote= {
  initial :{
    opacity:1,
  },
  animate:{
    opacity:1,
    transition:{
       delay:0.5,
       staggerChildren: 0.08,
    }
  }
}
const singleWord= {
  initial :{
    opacity:0,
    y:50,

  },
  animate:{
    opacity:1,
    y:0,
    transition:{
       duration:1
    }
  }
}
const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <div className="py-2 w-full mx-auto flex flex-col items-center justify-center text-center overflow-hidden">
      <motion.h1 className={`inline-block text-dark font-bold w-full capitalize break-words text-left  ${className} dark:text-light`}
      variants={quote}
      initial="initial"
      animate="animate"
      >
        {typeof text === "string" &&
          text.split(" ").map((word, index) => (
            <motion.span key={word+ '-'+index} className="inline-block"
            variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
