import { motion } from 'framer-motion';

const reasons = [
  { icon: '⚡', title: 'Fast Transactions', desc: 'Quick and secure payments.' },
  { icon: '🔒', title: 'Secure Process', desc: 'End-to-end encrypted workflow.' },
  { icon: '💼', title: 'Enterprise Trusted', desc: 'Used by over 200+ companies.' },
  { icon: '🌍', title: 'Global Reach', desc: 'Buyers from all over the world.' },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 text-center bg-slate-900 text-white">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {reasons.map(({ icon, title, desc }) => (
          <motion.div
            key={title}
            className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            variants={cardVariants}
          >
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-sm text-slate-300">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
