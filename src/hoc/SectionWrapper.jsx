import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName, options = {}) => {
  const { forceVisibleOnMount } = options;
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0.05)}
        initial={forceVisibleOnMount ? "show" : "hidden"}
        whileInView={forceVisibleOnMount ? undefined : "show"}
        viewport={
          forceVisibleOnMount
            ? undefined
            : {
                once: true,
                amount: 0.05,
                margin: "80px 0px",
              }
        }
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;