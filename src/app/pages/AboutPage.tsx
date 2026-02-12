import { motion } from "motion/react";
import { Target, Lightbulb, Zap, Users, Award, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import whatWeDoImg from "../../assets/What we do.webp";
import whyLiquidImg from "../../assets/why liquid .webp";

export function AboutPage() {

  const benefits = [
    {
      icon: Zap,
      title: "Rapid Response",
      description: "24/7 emergency support and quick turnaround times for critical issues"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Specialized expertise in aseptic technology and food industry operations"
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Highest standards of quality and product integrity in every project"
    },
    {
      icon: Shield,
      title: "Reliable Partner",
      description: "Long-term contracts and trusted support for your success"
    }
  ];

  return (
    <div className="relative pt-[72px]" style={{ backgroundColor: '#0A1628', borderRadius: 0 }}>
      {/* Hero Section */}
      <section className="bg-[#0A1628] text-[#F0F2F5] py-16 md:py-20" style={{ borderRadius: 0 }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-[3px] uppercase text-[#8A96A6] mb-4">
              About Liquid
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-[-2px] mb-6">
              Excellence in Industry Solutions
            </h1>
            <p className="text-[17px] text-[#8A96A6] leading-relaxed max-w-2xl">
              Driving performance and reliability across manufacturers since 2006
            </p>
          </motion.div>
        </div>
      </section>


      {/* Vision & Mission Cards */}
      <section className="bg-[#E5E7EB] py-16 md:py-20 lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[10px] border border-[#E0E4EA] border-l-4 border-l-[#2D4A6F]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#2D4A6F]" />
                <h3 className="text-xl text-[#0A1628] font-semibold">Our Vision</h3>
              </div>
              <p className="text-[#4B5563] leading-relaxed">
                Be the most agile partner for our customers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[10px] border border-[#E0E4EA] border-l-4 border-l-[#0A1628]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-[#0A1628]" />
                <h3 className="text-xl text-[#0A1628] font-semibold">Our Mission</h3>
              </div>
              <p className="text-[#4B5563] leading-relaxed">
                Make it easier for liquid food producers to drive profitable growth
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Liquid Section */}
      <section className="bg-[#F0F2F5] py-16 md:py-20 lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs tracking-[3px] uppercase text-[#6B7A8D] mb-4">Our Story</p>
              <h2 className="text-4xl text-[#0A1628] mb-6 font-bold tracking-[-1px]">What is Liquid</h2>
              <p className="text-[#4B5563] leading-relaxed mb-6">
                Liquid provides field service, industrial automation, and engineering solutions for manufacturers across industries. Founded in 2006 in Sweden, we've grown into a global team of dedicated professionals serving facilities in over 45 countries.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-6">
                We specialize in emergency support, controls engineering, equipment upgrades, and long-term service partnerships — all tailored to each client's operation. Our mission is to keep production running and make it better, delivering results that boost uptime, reduce costs, and raise the standard of your processes.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                With Liquid, you gain a partner committed to your success — responsive, hands-on, and built for the field.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <ImageWithFallback
                src={whyLiquidImg}
                alt="Liquid technician in facility"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-[#E5E7EB] py-16 md:py-20 lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-lg order-2 md:order-1"
            >
              <ImageWithFallback
                src={whatWeDoImg}
                alt="What We Offer"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <p className="font-mono text-xs tracking-[3px] uppercase text-[#6B7A8D] mb-4">Services</p>
              <h2 className="text-4xl text-[#0A1628] mb-6 font-bold tracking-[-1px]">What We Offer</h2>
              <p className="text-[#4B5563] leading-relaxed mb-6">
                Experienced, hands-on technicians and engineers — emergency support, scheduled maintenance, and service contracts that keep your lines running without building a larger in-house team.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-6">
                Industrial automation — PLC and controls programming, HMI and SCADA development, line integration, safety systems, and commissioning.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                Engineering and project delivery — process design, legacy upgrades, compliance consulting, and custom-built equipment and skids. From scoping through handover.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Liquid Section */}
      <section className="bg-[#F0F2F5] py-16 md:py-20 lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="mb-16">
            <p className="font-mono text-xs tracking-[3px] uppercase text-[#6B7A8D] mb-4">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl text-[#0A1628] mb-6 font-bold tracking-[-1px]">Why Liquid</h2>
            <p className="text-[#4B5563] max-w-3xl leading-relaxed mb-4">
              Choosing Liquid means partnering with a team that puts your needs first, providing exceptional responsiveness and personalized attention with unwavering integrity.
            </p>
            <p className="text-[#4B5563] max-w-3xl leading-relaxed">
              Discover the fun and easy way to elevate your operations with Liquid, and let us bring a smile to your face as we enhance your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[10px] border border-[#E0E4EA]"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-[rgba(45,74,111,0.08)] rounded-[10px] mb-6">
                  <benefit.icon className="w-7 h-7 text-[#2D4A6F]" />
                </div>
                <h3 className="text-lg text-[#0A1628] mb-3 font-semibold">{benefit.title}</h3>
                <p className="text-[#6B7A8D] text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#E5E7EB] p-12 rounded-[10px]"
          >
            <p className="text-[#4B5563] text-lg leading-relaxed max-w-4xl">
              From the moment you start working with us, you'll experience our <span className="text-[#0A1628] font-semibold">"make it easier"</span> approach, ensuring a seamless and efficient process. We always strive to deliver the best solutions for your operational needs, ensuring you receive the highest level of care and professionalism.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
