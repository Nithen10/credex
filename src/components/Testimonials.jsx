import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dhoni',
    role: 'IT Manager',
    company: 'TechCorp',
    review: 'SoftSell helped us recover value from unused tools. Quick and efficient!',
  },
  {
    name: 'Kohli',
    role: 'Procurement Lead',
    company: 'GlobalSoft',
    review: 'Highly recommend for any business managing software licenses.',
  },
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

export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">What Customers Say</h2>
      <motion.div
        className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map(({ name, role, company, review }) => (
          <motion.div
            key={name}
            className="bg-white p-6 rounded-lg shadow-md text-left text-gray-800"
            variants={cardVariants}
          >
            <p className="mb-4 italic">"{review}"</p>
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-600">
                {role}, {company}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
