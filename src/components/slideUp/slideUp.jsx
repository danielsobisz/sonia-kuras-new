import React from 'react';

import { motion } from 'framer-motion';

const SlideUp = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
