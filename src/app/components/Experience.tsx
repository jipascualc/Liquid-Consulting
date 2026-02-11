import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import imgImage1Jpg from "../../assets/1c9ec8aeebb00a6059b4b11353db67f92bae7471.webp";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgImage1Jpg}
          alt="Industrial production facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c36]/95 via-[#0d1c36]/85 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Experience That Drives Results
            </h2>
            <div className="w-24 h-1 bg-[#ff6c19] mb-8" />
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Our team brings deep expertise in food industry operations, combining technical knowledge with practical experience to deliver solutions that work in the real world.
            </p>
            <div className="space-y-6">
              {[
                "Specialized aseptic processing knowledge",
                "Proven track record of minimizing downtime",
                "24/7 emergency response capability",
                "Comprehensive maintenance programs"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-[#ff6c19] rounded-full" />
                  <span className="text-white/90 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="inline-block bg-[#ff6c19] hover:bg-[#ff8540] text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6c19]/30"
              >
                Get Started Today
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
