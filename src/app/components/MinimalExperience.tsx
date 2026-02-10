import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import imgImage1Jpg from "../../assets/633907679ef9a4487c5f84e39dfd956e6956733b.webp";

export function MinimalExperience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section ref={ref} style={{ position: 'relative' }} className="relative min-h-[600px] flex items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <motion.img
          src={imgImage1Jpg}
          alt="Industrial facility"
          style={{ scale }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d1c36]/80" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-[#ff6c19] text-sm uppercase tracking-wider mb-6">Why Choose Us</p>
          
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Experience That Drives Results
          </h2>
          
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Our team brings deep expertise in food industry operations, combining technical knowledge with practical experience to deliver solutions that work in the real world.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#ff6c19] text-white hover:bg-[#ff8540] transition-colors rounded-full"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
