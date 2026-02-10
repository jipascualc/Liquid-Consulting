import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import svgPaths from "../../imports/svg-cgghg4k7oc";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fieldServices = [
    {
      number: "1",
      title: "Emergency Support",
      description: "Minimize downtime and maintain your production.",
      color: "#FFC224",
      icon: svgPaths.p118aab00
    },
    {
      number: "2",
      title: "Service Contract",
      description: "Long-term maintenance contracts to enhance trust and reliability.",
      color: "#FFC224",
      icon: svgPaths.pa7e1600
    },
    {
      number: "3",
      title: "Commissioning",
      description: "Streamlines the transition from newly installed equipment to operation.",
      color: "#EC1200",
      icon: svgPaths.p21dbfe10
    }
  ];

  const transformationServices = [
    {
      number: "4",
      title: "Food Safety",
      description: "Services designed to navigate food safety challenges.",
      color: "#03CA0B",
      icon: svgPaths.p33ab1600
    },
    {
      number: "5",
      title: "Legacy Upgrade",
      description: "Extend your equipment's lifecycle and save costs.",
      color: "#0254D1",
      icon: svgPaths.p2f7a5a00
    },
    {
      number: "6",
      title: "Automation Advantage",
      description: "Technology designed to enhance productivity and reduce costs.",
      color: "#02B1F2",
      icon: svgPaths.pf130d80
    }
  ];

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Hover Effect Background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
        style={{ backgroundColor: service.color }}
      />
      
      <div className="p-8 relative">
        {/* Number Badge */}
        <div className="mb-6 relative">
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
            style={{ backgroundColor: service.color }}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 30 30">
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
        </div>

        {/* Content */}
        <h3 className="text-2xl mb-4 text-[#0d1c36] group-hover:text-[#ff6c19] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center text-[#ff6c19] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="mr-2">Learn more</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Bottom Accent */}
      <div 
        className="h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: service.color }}
      />
    </motion.div>
  );

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#0d1c36] to-[#162844]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Field Service Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-12 flex items-center">
            <span className="mr-4">Field Service</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#ff6c19] to-transparent" />
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {fieldServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Transformation Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-12 flex items-center">
            <span className="mr-4">Transformation Services</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#ff6c19] to-transparent" />
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {transformationServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index + 3} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
