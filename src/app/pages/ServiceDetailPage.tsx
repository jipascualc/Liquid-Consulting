import { motion } from "motion/react";
import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";
// Video imports — these work locally but are gitignored (too large for GitHub)
// TODO: host externally and replace imports with URLs for production
import videoFieldService from "../../assets/field_service.mp4";
import videoFoodSafety from "../../assets/Liquid-Food-Safety-Video.mp4";
import videoLegacyUpgrade from "../../assets/Demo-video-Legacy-Upgrade-9-compressed.mp4";
import videoAutomation from "../../assets/Liquid-Automation-Advantage-Presentation-compressed.mp4";
import videoWaveUI from "../../assets/Liquid-Wave-User-Interface-Final-compressed.mp4";

const demoVideos: Record<string, Array<{ label: string; src: string }>> = {
  "field-service": [{ label: "Field Service", src: videoFieldService }],
  "food-safety": [{ label: "Food Safety", src: videoFoodSafety }],
  "legacy-upgrade": [{ label: "Legacy Upgrade", src: videoLegacyUpgrade }],
  "automation-advantage": [
    { label: "Automation Advantage", src: videoAutomation },
    { label: "Wave User Interface", src: videoWaveUI },
  ],
};
import imgTroubleshootingJpg from "../../assets/17f02d56c509a9ebab651232ec0fa0216449906e.webp";
import imgRepairsPng from "../../assets/41e17cc9b8f104de238498bc9a3e3396bbcff442.webp";
import imgSparePartsPng from "../../assets/d9190a58d045e2c0853c6b8f58da381e72e26a64.webp";
import imgFactoryFloor from "../../assets/1fd5ca53f94e73e59cbf77e46d419f6b94205095.webp";
import imgWorkerControl from "../../assets/4a6d644537b2ce9a4f8ada11576477310dcebece.webp";
import imgHACCP from "../../assets/1952028e45895fd90607d7acff6996bdcdddc139.webp";
import imgTraining from "../../assets/1ec88446f72143838a5acbe14bbdb174aaf3bc8b.webp";
import imgProcessing from "../../assets/09432c4bb855aea80441f81582cfa6afe7ae85ad.webp";
import imgPackaging from "../../assets/542d2e45e084ec1813fa5fc7f197dd8c0b5c3b26.webp";
import imgProductionSupport from "../../assets/d5fc9fb8f71b83fb07f93826862450ec58164e12.webp";
import imgQualityAssessments from "../../assets/98126302d7ef8e2c65b1ee2ef371fbb7495d0bfa.webp";
import imgValidation from "../../assets/7b561c751488346bfbbea3d24f9ac8b3d11c67a9.webp";
import imgFoodSafetyTraining from "../../assets/74777bfd0b0aa5b251d3600fd456271b11f32340.webp";
import imgSystematicTroubleshooting from "../../assets/c1f89db6c59df41aa479a5d3e155890c453cd8bd.webp";
import imgControlPanels from "../../assets/12b8f65a3dce589f6f007b36445f70613298ef1f.webp";
import imgMotorControlPanels from "../../assets/e42e313dd5f28575fdfb4ee2da61d7a33d91be41.webp";
import imgEasyModules from "../../assets/0e072a6bf12c84247fd64a0dee250029aacedbf2.webp";
import imgTotalUpgrades from "../../assets/7744d254c7cf6c57a7ec6237418757bbb81a595f.webp";
import imgPartialUpgrades from "../../assets/4bf4d73b27ee8cbcfe7cea4bd7fe4e7578269c16.webp";
import imgOtherCapabilities from "../../assets/9f30747316f3aca696569b9b8f7cd484c3a7dda4.webp";
import imgWaveInterface from "../../assets/2a4e18a74491b6b301db3e8d8c57e58a595ed1c6.webp";
import imgAutomationUpgrade from "../../assets/31267cf631aa738978250dea9ee95b3148761aab.webp";
import imgAutomationSupport from "../../assets/5feca057a2b0c7390a8e6dda2210f6683e584c6b.webp";
import imgProjectDevelopment from "../../assets/0f97a150e299e6476d167434c3fab4716afcfc23.webp";
import imgProgramEnhancement from "../../assets/4a761a6a757f404e040699d112e5f4a41f952ba0.webp";
import imgAutomationTraining from "../../assets/3d6ea3c225492a90955ac8dddd9cc04549fdb143.webp";
import imgEngineeringSolutions from "../../assets/70a074b05d06a956e88da035e5585b2cdb08b296.webp";
import imgEasyTank from "../../assets/b0964a4e96ea7014deb176dfb9882c7ec977b6fb.webp";
import imgEasyMFS from "../../assets/6382ac076a0a12034e70695c0fa5231215cce916.webp";
import imgEasyCIP from "../../assets/81bc2babd8eb4bf406c2419b68901fe3e4533b6b.webp";

interface ServiceDetailPageProps {
  serviceId: string;
  onBack: () => void;
}

interface ServiceData {
  category: string;
  title: string;
  tagline: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

const servicesData: Record<string, ServiceData> = {
  "emergency-support": {
    category: "Field Service",
    title: "Emergency Support",
    tagline: "Protect your product with a safety protocol",
    description: "When emergencies arise, our skilled resources are ready to be dispatched promptly to your site. We provide hands-on expertise to address operational challenges, with the primary goal of getting you up and running immediately. With tailored support and fast response times, we're here to ensure your production systems are restored swiftly and efficiently, helping you maintain operational excellence when you need it most.",
    features: [
      {
        title: "Troubleshooting",
        description: "When unexpected challenges arise, our expert team is just a call away. Whether you're experiencing equipment malfunctions or performance issues, we provide fast, step-by-step guidance to diagnose and resolve problems. Our goal is to minimize downtime and keep your operations running smoothly.",
        image: imgTroubleshootingJpg
      },
      {
        title: "Repairs and Maintenance",
        description: "When your equipment needs urgent attention, our skilled technicians are ready to help. From swift repairs to scheduled maintenance, we ensure your systems are restored to peak performance quickly and efficiently. Trust us to deliver expert solutions tailored to your needs.",
        image: imgRepairsPng
      },
      {
        title: "Spare Parts Procurement",
        description: "Ensure your operations run seamlessly with our ability to quickly source the spare parts you need. Leveraging our trusted network of suppliers, we provide reliable access to high-quality components with expedited delivery. Count on us for expert guidance and efficient procurement solutions.",
        image: imgSparePartsPng
      }
    ]
  },
  "field-service": {
    category: "Field Service",
    title: "Field Service",
    tagline: "Streamlines the transition to full operation",
    description: "Next phase Commissioning streamlines the transition from newly installed OEM equipment to full operational performance. Our Installation-to-Performance (ItP) Process ensures proper installation, commissioning, and optimization for efficient production. Perfect for overcoming challenges when OEM commissioning falls short, we fine-tune equipment and ensure seamless, sustained performance at scale.",
    features: [
      {
        title: "Installation to Performance",
        description: "Ensures a seamless transition from installation to full production. We verify setup, manage commissioning, and train your team—minimizing downtime, optimizing output, and empowering lasting success.",
        image: imgFactoryFloor
      },
      {
        title: "Performance Optimization",
        description: "Keep your equipment running at its best through fine-tuning and monitoring. We tailor settings, resolve bottlenecks, and conduct regular assessments to maintain reliability, lower costs, and enhance long-term performance.",
        image: imgWorkerControl
      }
    ]
  },
  "service-contract": {
    category: "Field Service",
    title: "Service Contract",
    tagline: "Long-term maintenance contracts to enhance trust and reliability",
    description: "Establish a lasting partnership with our comprehensive service contracts. We provide ongoing maintenance, priority support, and guaranteed response times to ensure your operations maintain the highest standards of reliability and performance.",
    features: [
      {
        title: "Processing",
        description: "Comprehensive support for food processing operations, ensuring efficiency, quality control, and optimal performance throughout your production line.",
        image: imgProcessing
      },
      {
        title: "Packaging",
        description: "Expert maintenance and optimization of packaging equipment to maintain speed, accuracy, and reliability in your packaging operations.",
        image: imgPackaging
      },
      {
        title: "Production support",
        description: "Dedicated technical support to keep your production running smoothly, with rapid response times and proactive maintenance strategies.",
        image: imgProductionSupport
      }
    ]
  },
  "food-safety": {
    category: "Transformation Services",
    title: "Food Safety",
    tagline: "Empowering your Food Safety Journey",
    description: "Services designed to boost your Food Safety program and optimize your performance. Because navigating operational challenges can be difficult without the right support, our tailored solutions offer the guidance you need to achieve your Food Safety goals with Operational Excellence.",
    features: [
      {
        title: "Quality Assessments",
        description: "A full review of all processes and procedures resulting on a practical action plan on how to reach your desired quality performance.",
        image: imgQualityAssessments
      },
      {
        title: "Validation",
        description: "A crucial step in ensuring product safety. Our team will support you in the execution of effective Process and CIP Validation protocols.",
        image: imgValidation
      },
      {
        title: "Food Safety Training",
        description: "A unique training program covering aseptic processing and filling concepts, enhancing awareness and providing tools.",
        image: imgFoodSafetyTraining
      },
      {
        title: "Systematic Troubleshooting",
        description: "Make sure that the root cause of a Microbiological Contamination is found and implement measures to avoid it from repeating.",
        image: imgSystematicTroubleshooting
      }
    ]
  },
  "legacy-upgrade": {
    category: "Transformation Services",
    title: "Legacy Upgrades",
    tagline: "Extend your equipment's lifecycle and save costs",
    description: "We provide comprehensive assessments and trainings designed to enhance your product safety and optimize your performance. Because navigating operational challenges across diverse production technologies can be difficult without the right support, our tailored services offer the guidance you need to achieve operational excellence.",
    features: [
      {
        title: "Control Panels",
        description: "We offer custom control panel that adjust to your current process while modernizing your system enhancing functionality and safety with the latest technology.",
        image: imgControlPanels
      },
      {
        title: "Motor Control Panels",
        description: "Upgrade your Motor Control panel to improve performance, reduce energy consumption and extend equipment lifespan.",
        image: imgMotorControlPanels
      },
      {
        title: "Easy modules",
        description: "Our Easy Modules simplify integrating new components into your process line, allowing quick modernization with minimal disruption.",
        image: imgEasyModules
      },
      {
        title: "Total upgrades",
        description: "We completely revitalize your control systems by replacing the entire control panel, components, and wiring, ensuring seamless integration with your process machinery. Our comprehensive approach overhauls both hardware and software to maximize efficiency, reliability, and long-term performance.",
        image: imgTotalUpgrades
      },
      {
        title: "Partial upgrades",
        description: "We offer cost-effective partial upgrades that target specific areas or functionalities of your control system. This includes updating individual components, circuits, or communication protocol devices to enhance performance and reliability, all without requiring a full system overhaul.",
        image: imgPartialUpgrades
      },
      {
        title: "Other capabilities",
        description: "Beyond upgrades, we offer wiring diagram development and revision, assessments, control wiring installation and fixing, maintenance support and custom engineering solutions tailored to you needs.",
        image: imgOtherCapabilities
      }
    ]
  },
  "automation-advantage": {
    category: "Transformation Services",
    title: "Automation Advantage",
    tagline: "Enhance Productivity and Reduce Costs",
    description: "At Liquid, we offer cutting-edge automation technologies and expertise designed to enhance productivity and reduce costs in liquid food production environments. Our comprehensive suite of services ensures your operations are efficient, reliable, and primed for success. Enhances operational efficiency by reducing errors and downtime.",
    features: [
      {
        title: "Wave User Interface",
        description: "With ease of use at its core, your team can focus on optimizing production rather than navigating complicated systems.",
        image: imgWaveInterface
      },
      {
        title: "Automation Upgrade",
        description: "Ensures compatibility with new technologies, reduces maintenance costs, and improves system reliability.",
        image: imgAutomationUpgrade
      },
      {
        title: "Automation Support",
        description: "Consistent support improves machine uptime and boosts production efficiency. Ensuring that your operations remain uninterrupted.",
        image: imgAutomationSupport
      },
      {
        title: "Project Development",
        description: "Automation projects enhance productivity and offer scalability. Systems are perfectly aligned with your operational goals.",
        image: imgProjectDevelopment
      },
      {
        title: "Program Enhancement",
        description: "Enhancements lead to increased throughput without the need for significant new investments.",
        image: imgProgramEnhancement
      },
      {
        title: "Automation Training",
        description: "A well-trained staff is crucial. Empowered employees contribute to increased efficiency and reduced downtime.",
        image: imgAutomationTraining
      }
    ]
  },
  "engineering": {
    category: "Transformation Services",
    title: "Engineering",
    tagline: "Expert engineering services for liquid food plants",
    description: "Our engineering team delivers comprehensive solutions for liquid food manufacturing facilities. From design to implementation, we provide expert guidance to optimize your operations and achieve your production goals.",
    features: [
      {
        title: "Engineering Solutions",
        description: "We provide innovative engineering solutions tailored to new plant development and the optimization of existing facilities. From feasibility studies and site assessments to Process, Automation, Electrical engineering, and full-scale implementation including project management, we ensure efficiency and excellence at every stage.",
        image: imgEngineeringSolutions
      }
    ]
  },
  "easy-products": {
    category: "Transformation Services",
    title: "Easy Products",
    tagline: "Easy Products delivers customized equipment built specifically for liquid food manufacturing.",
    description: "Every solution is engineered around your process, your performance metrics, and your operational realities. Through precise measurement and attention to detail, we tailor each system to improve efficiency, reliability, and long term performance. The result is equipment that fits your operation exactly and performs the way it should from day one.",
    features: [
      {
        title: "Easy Tank",
        description: "Liquid Consulting's EASY Sterile Tank streamlines the sterilization process in an efficient and dependable way to quickly facilitate your product to its destination, wherever that may be. The EASY Sterile Tank for milk and beverage products ensures buffer storage and agitation for sterilized products under completely sterile conditions, thus preserving the product quality between aseptic processing and packaging.",
        image: imgEasyTank
      },
      {
        title: "Easy MFS",
        description: "Do you need an upgrade of your Milk Fat Standardizing module/equipment? We can provide you with a completely new module prepared for industry 4.0! If your main concern is just the hardware/software, we can focus on an upgrade instead! If you are running cold milk separation and have trouble with insufficient separation rates we can provide you with a fully automated solution minimizing down time and manual labor! If your issues concern low accuracy and/or repeatability of your current setup we can provide you with a customized solution. Complete removal of the footprint of the current installation while installing the components in a process optimized way instead of packed in a prefabricated unit!",
        image: imgEasyMFS
      },
      {
        title: "Easy CIP",
        description: "Are you experiencing quality issues with the CIP of your critical components such as Batching, Flex, VTIS, Sterile tanks and/or filling machines? Maybe your CIP system is already performing well, making it hard to add new objects? Let us help you with a solution! Our fully automated easy CIP skid will operate independently and with the industry 4.0 software we make the cost optimizing easy for you! Whether you want to recover or dump the used detergent or if you want a separate system for the concentrated chemicals the choice is yours! If you use a Rockwell based PLC, we deliver Rockwell. If you use a Siemens based PLC, we deliver Siemens! We are here to make operations easier for you!",
        image: imgEasyCIP
      }
    ]
  }
};

export function ServiceDetailPage({ serviceId, onBack }: ServiceDetailPageProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0F2F5]">
        <div className="text-center">
          <h2 className="text-2xl text-[#0A1628] mb-4">Service not found</h2>
          <button
            onClick={onBack}
            className="text-[#6B7A8D] hover:text-[#0A1628] flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F2F5]">
      {/* Back Button */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16 pt-28 relative z-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#6B7A8D] hover:text-[#0A1628] transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs tracking-[3px] uppercase text-[#6B7A8D] mb-4">
            {service.category}
          </p>
          <h1 className="text-4xl md:text-5xl text-[#0A1628] mb-4 font-bold tracking-[-2px]">
            {service.title}
          </h1>
          <p className="text-[17px] text-[#4B5563] mb-6 italic">
            {service.tagline}
          </p>
          <p className="text-[17px] text-[#4B5563] leading-relaxed mb-8">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-support-modal"))}
              className="inline-block px-8 py-3 bg-[#E8520E] text-white hover:bg-[#FF6B2B] transition-colors rounded-lg font-semibold cursor-pointer"
            >
              Request Support
            </button>
            {demoVideos[serviceId]?.some(v => v.src) && (
              <button
                onClick={() => setShowVideo(true)}
                className="inline-block px-8 py-3 bg-transparent text-[#0A1628] border border-[#D0D4DB] hover:border-[#0A1628] transition-all rounded-lg font-semibold"
              >
                Watch a Demo
              </button>
            )}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-[#E5E7EB]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl text-[#0A1628] mb-12 font-bold tracking-[-1px]">Key Capabilities</h2>

          <div className={`grid grid-cols-1 gap-6 ${service.features.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
            {service.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[10px] overflow-hidden border border-[#E0E4EA] hover:shadow-[0_2px_12px_rgba(10,22,40,0.06)] transition-shadow"
              >
                <div className="aspect-[16/9] bg-[#F0F2F5] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[#0A1628] mb-3 font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-[#4B5563] leading-relaxed text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (() => {
        const videos = demoVideos[serviceId] || [{ label: "Demo", src: "" }];
        return (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={() => { setShowVideo(false); setVideoIndex(0); }}
          >
            <div className="absolute inset-0 bg-black/80" />
            <div
              className="relative w-full max-w-5xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => { setShowVideo(false); setVideoIndex(0); }}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>
              {videos.length > 1 && (
                <div className="flex gap-2 mb-3">
                  {videos.map((v, i) => (
                    <button
                      key={v.label}
                      onClick={() => setVideoIndex(i)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        videoIndex === i
                          ? "bg-white text-[#0A1628]"
                          : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              )}
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <video
                  key={videos[videoIndex].src}
                  src={videos[videoIndex].src}
                  autoPlay
                  controls
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
