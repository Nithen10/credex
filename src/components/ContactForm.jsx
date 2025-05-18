import { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="py-16 px-6">
      <motion.h2
        className="text-2xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {[
          { type: 'text', name: 'name', placeholder: 'Name', required: true },
          { type: 'email', name: 'email', placeholder: 'Email', required: true },
          { type: 'text', name: 'company', placeholder: 'Company' },
        ].map(({ type, name, placeholder, required }) => (
          <motion.input
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            variants={itemVariants}
          />
        ))}

        <motion.select
          name="type"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
          variants={itemVariants}
        >
          <option value="">License Type</option>
          <option value="Office">Microsoft Office</option>
          <option value="Adobe">Adobe Suite</option>
          <option value="Other">Other</option>
        </motion.select>

        <motion.textarea
          name="message"
          rows="4"
          placeholder="Message"
          onChange={handleChange}
          className="w-full border p-3 rounded"
          variants={itemVariants}
        />

        <motion.button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700"
          variants={itemVariants}
        >
          Submit
        </motion.button>
      </motion.form>
    </section>
  );
}
