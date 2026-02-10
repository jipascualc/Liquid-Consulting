import { useEffect, useRef, useState } from "react";
import { ArrowRight, AlertCircle, Wrench, FileText, Shield, RefreshCw, Cpu, Settings, Package } from "lucide-react";

function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

interface MinimalServicesProps {
  onServiceClick: (serviceId: string) => void;
}

export function MinimalServices({ onServiceClick }: MinimalServicesProps) {
  const fieldServices = [
    {
      id: "emergency-support",
      title: "Emergency Support",
      description: "Rapid on-site assistance to address urgent issues and restore production.",
      icon: AlertCircle,
    },
    {
      id: "field-service",
      title: "Field Service",
      description: "On-site maintenance and troubleshooting to protect uptime and performance.",
      icon: Wrench,
    },
    {
      id: "service-contract",
      title: "Service Contract",
      description: "Long-term maintenance contracts to enhance trust and reliability.",
      icon: FileText,
    }
  ];

  const transformationServices = [
    {
      id: "food-safety",
      title: "Food Safety",
      description: "Navigate complex food safety regulations with expert guidance and solutions.",
      icon: Shield,
    },
    {
      id: "legacy-upgrade",
      title: "Legacy Upgrade",
      description: "Modernize equipment to extend lifecycle and improve performance.",
      icon: RefreshCw,
    },
    {
      id: "automation-advantage",
      title: "Automation Advantage",
      description: "Implement smart technology to boost productivity and reduce costs.",
      icon: Cpu,
    },
    {
      id: "engineering",
      title: "Engineering",
      description: "Engineering services for Liquid Food Plants.",
      icon: Settings,
    },
    {
      id: "easy-products",
      title: "Easy Products",
      description: "Custom Equipment for Liquid Food Manufacturers",
      icon: Package,
    }
  ];

  const FadeInTitle = () => {
    const { ref, visible } = useFadeIn(0.15);
    return (
      <div
        ref={ref}
        className={`text-center mb-16 transition-opacity duration-700 ease-out ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-[#ff6c19] text-sm uppercase tracking-wider mb-4">Our Services</p>
        <h2 className="text-4xl md:text-5xl text-[#0d1c36] mb-4">
          Comprehensive Solutions
        </h2>
      </div>
    );
  };

  const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const Icon = service.icon;
    const { ref, visible } = useFadeIn(0.15);
    return (
      <div
        ref={ref}
        onClick={() => onServiceClick(service.id)}
        style={{ transitionDelay: `${index * 100}ms` }}
        className={`group bg-white p-8 border border-gray-200 hover:border-[#ff6c19] transition-all duration-700 ease-out cursor-pointer relative ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Icon */}
        <div className="w-12 h-12 bg-[#ff6c19]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ff6c19] transition-colors duration-300">
          <Icon className="w-6 h-6 text-[#ff6c19] group-hover:text-white transition-colors duration-300" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl text-[#0d1c36] mb-3">{service.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
        
        {/* Arrow */}
        <div className="flex justify-end">
          <ArrowRight className="w-5 h-5 text-[#ff6c19] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInTitle />

        <div className="space-y-16 relative">
          {/* Field Service Section */}
          <div className="relative">
            <div className="mb-8">
              <h3 className="text-2xl text-[#0d1c36] mb-2">Field Service</h3>
              <p className="text-gray-600">Rapid response and maintenance solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {fieldServices.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>

          {/* Transformation Services Section */}
          <div className="relative">
            <div className="mb-8">
              <h3 className="text-2xl text-[#0d1c36] mb-2">Transformation Services</h3>
              <p className="text-gray-600">Innovation and modernization for the future</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {transformationServices.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
