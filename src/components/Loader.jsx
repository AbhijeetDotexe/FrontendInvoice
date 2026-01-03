import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-16 h-16">
        <motion.span
          className="block w-16 h-16 border-4 border-t-transparent border-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="absolute top-0 left-0 block w-16 h-16 border-4 border-b-transparent border-purple-400 rounded-full opacity-50"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <motion.p 
        className="text-gray-400 text-sm animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        AI is drafting your invoice...
      </motion.p>
    </div>
  );
};

export default Loader;