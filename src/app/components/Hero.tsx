import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import imgLiquidHeroWebm from "../../assets/37924a4e8637f08e9ce2cf094e682ac9bf64f3d0.webp";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={imgLiquidHeroWebm}
          alt="Food industry worker"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c36]/95 via-[#0d1c36]/80 to-[#0d1c36]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="font-['Brush_Script_MT',cursive] text-6xl md:text-7xl lg:text-8xl text-white mb-4">
            We make it easier
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Delivering outstanding performance in food & beverage knowledge
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <a
              href="#services"
              className="bg-[#ff6c19] hover:bg-[#ff8540] text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6c19]/30 hover:scale-105"
            >
              Explore Services
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0d1c36] px-8 py-4 rounded-full transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
