import { motion } from "motion/react";

export function MinimalWhatWeDo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#ff6c19] text-sm uppercase tracking-wider mb-4">Our Services</p>
          <h2 className="text-4xl md:text-5xl text-[#0d1c36] mb-6">What we do</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            At Liquid, we optimize food industry operations with long-term maintenance, rapid troubleshooting, and turnkey solutions. As experts in Aseptic and multiple efficient processing systems, we specialize in minimizing downtime and safeguarding product quality, helping our customers maintain the highest standards of safety and reliability. Our goal is to reduce cost and improve production performance, through innovative, customized solutions that drive excellence and profitability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
