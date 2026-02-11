import { motion } from "motion/react";
import { MinimalServices } from "../components/MinimalServices";

interface ServicesPageProps {
  onServiceClick: (serviceId: string) => void;
}

export function ServicesPage({ onServiceClick }: ServicesPageProps) {
  return (
    <div className="relative pt-[72px]" style={{ backgroundColor: '#0A1628', borderRadius: 0 }}>
      {/* Hero Section */}
      <section className="bg-[#0A1628] text-[#F0F2F5] py-20" style={{ borderRadius: 0 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-[3px] uppercase text-[#8A96A6] mb-4">
              What We Offer
            </p>
            <h1 className="text-5xl font-bold tracking-[-2px] mb-6">
              Our Services
            </h1>
            <p className="text-xl text-[#8A96A6] leading-relaxed">
              Comprehensive solutions designed to optimize your food manufacturing operations,
              from emergency response to transformative upgrades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <MinimalServices onServiceClick={onServiceClick} />
    </div>
  );
}
