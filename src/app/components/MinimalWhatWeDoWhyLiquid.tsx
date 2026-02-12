import { motion } from "motion/react";

export function MinimalWhatWeDoWhyLiquid() {
  return (
    <section className="py-16 md:py-20 lg:py-[120px] bg-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* What we do */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl text-[#0A1628] mb-6 font-bold tracking-[-1px]">What we do</h2>
            <p className="text-[#4B5563] text-base leading-relaxed text-left">
              At Liquid, we optimize food industry operations with long-term maintenance, rapid troubleshooting, and turnkey solutions. As experts in Aseptic and multiple efficient processing systems, we specialize in minimizing downtime and safeguarding product quality, helping our customers maintain the highest standards of safety and reliability. Our goal is to reduce cost and improve production performance, through innovative, customized solutions that drive excellence and profitability.
            </p>
          </motion.div>

          {/* Why Liquid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl text-[#0A1628] mb-6 font-bold tracking-[-1px]">Why Liquid</h2>
            <p className="text-[#4B5563] text-base leading-relaxed text-left">
              Choosing Liquid means partnering with a responsive team that prioritizes your needs. Our "make it easier" approach ensures seamless and efficient processes, delivering top solutions with utmost care and professionalism. Elevate your operations effortlessly with Liquid, enhancing your success with a smile.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
