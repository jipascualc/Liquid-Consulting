import { motion } from "motion/react";
import { MinimalServices } from "../components/MinimalServices";

interface ServicesPageProps {
  onServiceClick: (serviceId: string) => void;
}

export function ServicesPage({ onServiceClick }: ServicesPageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d1c36] to-[#0d1c36]/95 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-[#ff6c19] text-sm uppercase tracking-wider mb-4">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-6xl text-white mb-6">
              Our Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to optimize your food manufacturing operations,
              from emergency response to transformative upgrades.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6c19]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff6c19]/5 rounded-full blur-3xl" />
      </section>

      {/* Services Section */}
      <MinimalServices onServiceClick={onServiceClick} />
    </>
  );
}
