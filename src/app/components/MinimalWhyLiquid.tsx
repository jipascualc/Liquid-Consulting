import { motion } from "motion/react";

export function MinimalWhyLiquid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#ff6c19] text-sm uppercase tracking-wider mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl text-[#0d1c36] mb-6">Why Liquid</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Choosing Liquid means partnering with a responsive team that prioritizes your needs. Our "make it easier" approach ensures seamless and efficient processes, delivering top solutions with utmost care and professionalism. Elevate your operations effortlessly with Liquid, enhancing your success with a smile.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
