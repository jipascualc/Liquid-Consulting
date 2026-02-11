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

  return (
    <section ref={ref} style={{ position: 'relative' }} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
       <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d1c36]/70 bg-[rgba(0,0,0,0.3)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 text-white">
          We make it <span className="italic text-[#ff6c19]">easier</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
          Delivering outstanding performance in food & beverage knowledge
        </p>

        <a
          href="#services"
          className="inline-block px-8 py-4 bg-[#ff6c19] text-white hover:bg-[#ff8540] transition-colors rounded-full"
        >
          Explore Services
        </a>
      </motion.div>
    </section>
  );
}
