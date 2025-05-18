import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sell Unused Software Licenses Easily
      </motion.h1>

      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Turn idle software assets into cash with SoftSell.
      </motion.p>

      <motion.button
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        Sell My Licenses
      </motion.button>
    </section>
  );
}
