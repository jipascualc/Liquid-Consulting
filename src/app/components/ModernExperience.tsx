import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import imgImage1Jpg from "../../assets/1c9ec8aeebb00a6059b4b11353db67f92bae7471.png";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function ModernExperience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  const highlights = [
    "Specialized aseptic processing knowledge",
    "Proven track record of minimizing downtime",
    "24/7 emergency response capability",
    "Comprehensive maintenance programs",
    "Cutting-edge automation solutions",
    "Industry-leading safety standards"
  ];

  return (
    <section ref={ref} style={{ position: 'relative' }} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={imgImage1Jpg}
          alt="Industrial production facility"
          className="w-full h-full object-cover"
        />
        {/* Advanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c36] via-[#0d1c36]/95 to-[#0d1c36]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1c36]/80" />
      </motion.div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 108, 25, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 108, 25, 0.5) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-[#ff6c19] text-sm font-semibold uppercase tracking-widest mb-4 block">
                Why Choose Us
              </span>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent leading-tight">
                Experience That Drives Results
              </h2>
              
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#ff6c19] to-transparent mb-8" />
              
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12">
                Our team brings <span className="text-[#ff6c19] font-semibold">deep expertise</span> in food industry operations, combining technical knowledge with practical experience to deliver solutions that work in the real world.
              </p>

              {/* CTA */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#ff6c19] to-[#ff8540] text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff6c19]/50 hover:scale-105"
              >
                <span className="relative z-10 font-semibold text-lg">Get Started Today</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8540] to-[#ff6c19] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6c19]/20 to-transparent rounded-3xl blur-3xl" />
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
                <h3 className="text-2xl md:text-3xl text-white mb-8 font-semibold">
                  What Sets Us Apart
                </h3>
                
                <div className="space-y-6">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6c19] to-[#ff8540] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white/80 text-lg leading-relaxed group-hover:text-white transition-colors">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
                  {[
                    { value: "99%", label: "Success Rate" },
                    { value: "<2h", label: "Avg Response" },
                    { value: "100%", label: "Satisfaction" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#ff6c19] to-[#ff8540] bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
