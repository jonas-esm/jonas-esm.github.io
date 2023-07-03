import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/app/utils/motion";
import { styles } from "@/app/styles";
const PageTransitionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        // variants={{ show: { rotateX: 90, translateX: 200 } }}
        // initial="hidden"
        initial={"hidden"}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id={idName}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default PageTransitionWrapper;
