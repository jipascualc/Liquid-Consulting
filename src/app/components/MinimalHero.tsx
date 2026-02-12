import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroVideo from "../../assets/liquid_hero.mp4";

export function MinimalHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleRequestSupport = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-support-modal"));
  };

  return (
    <section ref={ref} style={{ position: 'relative' }} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ background: '#0A1628' }}
        />
        <div className="absolute inset-0 bg-[rgba(10,22,40,0.30)]" />
      </motion.div>

      {/* Content — left-aligned */}
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16 pt-36 pb-24">
        <div className="max-w-[820px]">
          {/* Title */}
          <h1 className="text-[clamp(42px,5.5vw,72px)] font-bold tracking-[-2.5px] leading-[1.04] text-[#F0F2F5] mb-8">
            We show up when production goes down.
          </h1>

          {/* Subtitle */}
          <p className="text-[17px] leading-[1.7] text-[rgba(240,242,245,0.65)] max-w-[520px] mb-11">
            Liquid optimizes food and beverage production with long-term maintenance, rapid troubleshooting, and turnkey solutions. We reduce downtime and protect product quality.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#"
              onClick={handleRequestSupport}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#E8520E] text-white font-semibold text-[15px] hover:bg-[#FF6B2B] hover:-translate-y-px transition-all shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            >
              Request Support
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-transparent text-[#F0F2F5] border border-[#6B7A8D] font-semibold text-[15px] hover:border-[#F0F2F5] hover:text-[#F0F2F5] transition-all"
            >
              Our Services
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
