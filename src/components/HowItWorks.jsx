import { motion } from 'framer-motion';

const steps = [
  { icon: '📤', title: 'Upload License', desc: 'Submit your unused license info.' },
  { icon: '💰', title: 'Get Valuation', desc: 'We’ll estimate your license value.' },
  { icon: '🏦', title: 'Get Paid', desc: 'Receive fast and secure payments.' },
];

export default function HowItWorks() {
  return (
    <motion.section
      id="how"
      className="py-16 px-6 bg-slate-900 text-white text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map(({ icon, title, desc }) => (
          <motion.div
            key={title}
            className="p-6 bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-slate-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
