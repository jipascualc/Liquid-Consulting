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
    <section ref={ref} style={{ position: 'relative' }} className="relative min-h-[400px] flex items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <motion.img
          src={imgImage1Jpg}
          alt="Industrial facility"
          style={{ scale }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1628]/70" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#8A96A6] text-xs uppercase tracking-[3px] mb-6 font-mono">Why Choose Us</p>

          <h2 className="text-3xl md:text-4xl text-[#F0F2F5] mb-6 font-bold tracking-[-1px]">
            Experience That Drives Results
          </h2>

          <p className="text-[17px] text-[#8A96A6] leading-relaxed mb-8">
            Our team brings deep expertise in food industry operations, combining technical knowledge with practical experience to deliver solutions that work in the real world.
          </p>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-support-modal"))}
            className="inline-block px-8 py-4 bg-[#E8520E] text-white hover:bg-[#FF6B2B] transition-colors rounded-lg font-semibold text-[15px] cursor-pointer"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
