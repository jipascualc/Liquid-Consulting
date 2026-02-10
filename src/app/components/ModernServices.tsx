import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import svgPaths from "../../imports/svg-cgghg4k7oc";
import { Zap, CheckCircle2 } from "lucide-react";

export function ModernServices() {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState<'field' | 'transformation'>('field');
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const fieldServices = [
    {
      number: "01",
      title: "Emergency Support",
      description: "Minimize downtime and maintain your production with rapid response.",
      color: "#FFC224",
      icon: svgPaths.p118aab00,
      features: ["24/7 Availability", "Expert Technicians", "Rapid Response"]
    },
    {
      number: "02",
      title: "Service Contract",
      description: "Long-term maintenance contracts to enhance trust and reliability.",
      color: "#FFC224",
      icon: svgPaths.pa7e1600,
      features: ["Preventive Care", "Cost Savings", "Priority Service"]
    },
    {
      number: "03",
      title: "Commissioning",
      description: "Streamlines the transition from newly installed equipment to operation.",
      color: "#EC1200",
      icon: svgPaths.p21dbfe10,
      features: ["Smooth Transition", "Full Testing", "Training Included"]
    }
  ];

  const transformationServices = [
    {
      number: "04",
      title: "Food Safety",
      description: "Services designed to navigate food safety challenges.",
      color: "#03CA0B",
      icon: svgPaths.p33ab1600,
      features: ["Compliance Ready", "Risk Mitigation", "Best Practices"]
    },
    {
      number: "05",
      title: "Legacy Upgrade",
      description: "Extend your equipment's lifecycle and save costs.",
      color: "#0254D1",
      icon: svgPaths.p2f7a5a00,
      features: ["Modern Tech", "Cost Effective", "Extended Life"]
    },
    {
      number: "06",
      title: "Automation Advantage",
      description: "Technology designed to enhance productivity and reduce costs.",
      color: "#02B1F2",
      icon: svgPaths.pf130d80,
      features: ["AI Powered", "Efficiency Boost", "Smart Systems"]
    }
  ];

  const services = activeTab === 'field' ? fieldServices : transformationServices;

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      {/* Glow Effect */}
      <div 
        className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-3xl blur transition-all duration-500"
        style={{ 
          backgroundImage: `linear-gradient(135deg, ${service.color}, transparent)` 
        }}
      />
      
      {/* Card */}
      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-white/30 transition-all duration-500 flex flex-col">
        {/* Number Badge */}
        <div className="flex items-start justify-between mb-6">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
            style={{ backgroundColor: service.color }}
          >
            <svg className="w-9 h-9" fill="none" viewBox="0 0 30 30">
              <g clipPath="url(#clip)">
                <path d={service.icon} fill="white" />
              </g>
              <defs>
                <clipPath id="clip">
                  <rect fill="white" height="30" width="30" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span className="text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
            {service.number}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl mb-4 text-white group-hover:text-white transition-colors">
            {service.title}
          </h3>
          <p className="text-white/60 leading-relaxed mb-6 text-lg">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {service.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-center space-x-3 text-white/70">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: service.color }} />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Accent */}
        <div 
          className="h-1.5 w-full rounded-full mt-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ backgroundColor: service.color }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a1528] via-[#0d1c36] to-[#0a1528]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#ff6c19]/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#0254D1]/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#ff6c19] text-sm font-semibold uppercase tracking-widest mb-4 block">Our Services</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Comprehensive Solutions
          </h2>
          <p className="text-white/60 text-xl max-w-3xl mx-auto mb-12">
            From emergency support to complete transformation, we deliver excellence at every stage
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2">
            <button
              onClick={() => setActiveTab('field')}
              className={`relative px-8 py-4 rounded-full transition-all duration-300 ${
                activeTab === 'field' 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              {activeTab === 'field' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#ff6c19] to-[#ff8540] rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 font-semibold flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Field Service</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('transformation')}
              className={`relative px-8 py-4 rounded-full transition-all duration-300 ${
                activeTab === 'transformation' 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              {activeTab === 'transformation' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#ff6c19] to-[#ff8540] rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 font-semibold flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Transformation</span>
              </span>
            </button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
