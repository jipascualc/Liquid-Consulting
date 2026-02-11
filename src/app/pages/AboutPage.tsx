import { motion } from "motion/react";
import { Target, Lightbulb, Zap, Users, Award, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  const stats = [
    { number: "100+", label: "Professionals" },
    { number: "2006", label: "Founded" },
    { number: "24/7", label: "Support" },
    { number: "100%", label: "Dedicated" },
  ];

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
      <section className="bg-[#0A1628] text-[#F0F2F5] py-20" style={{ borderRadius: 0 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-[3px] uppercase text-[#8A96A6] mb-4">
              About Liquid
            </p>
            <h1 className="text-5xl font-bold tracking-[-2px] mb-6">
              Excellence in Food Industry Solutions
            </h1>
            <p className="text-xl text-[#8A96A6] leading-relaxed">
              Driving performance and reliability in food manufacturing since 2006
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#F0F2F5] py-16 border-b border-[#D0D4DB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-[#0A1628] mb-2 font-mono font-bold">{stat.number}</div>
                <div className="text-[#6B7A8D] text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="bg-[#E5E7EB] py-20">
        <div className="max-w-7xl mx-auto px-6">
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
      <section className="bg-[#F0F2F5] py-20">
        <div className="max-w-7xl mx-auto px-6">
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
                Liquid provides innovative, on-demand solutions and expert support to optimize and enhance food industry operations. Founded in 2006 in Sweden, Liquid has grown into a robust organization of approximately 100 dedicated professionals.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-6">
                We specialize in a wide range of services, including equipment upgrades, maintenance, and troubleshooting, tailored to meet the unique needs of each client. Our mission is to deliver exceptional results that boost efficiency, reduce costs, and ensure the highest standards of quality in your production processes.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                With Liquid, you gain a partner committed to your success and the seamless operation of your business.
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
                src="https://images.unsplash.com/photo-1764114235891-66ff86abaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNjc0NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Manufacturing Technology"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-[#E5E7EB] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-lg order-2 md:order-1"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcwNjE2ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Collaboration"
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
                At Liquid, we provide a comprehensive range of services to optimize and enhance food industry operations. Our offerings include tailored long-term maintenance contracts, rapid-response troubleshooting, and turnkey engineering solutions for any customer demand.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-6">
                We have specialized expertise in aseptic knowledge, training, and troubleshooting, ensuring minimal downtime and maintaining product integrity. Our goal is to reduce operational costs, improve production line performance, and deliver innovative solutions tailored to your needs.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                Whether you need immediate assistance or long-term support, Liquid is your trusted partner in achieving operational excellence and profitability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Liquid Section */}
      <section className="bg-[#F0F2F5] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[3px] uppercase text-[#6B7A8D] mb-4">Why Choose Us</p>
            <h2 className="text-4xl text-[#0A1628] mb-6 font-bold tracking-[-1px]">Why Liquid</h2>
            <p className="text-[#4B5563] max-w-3xl mx-auto leading-relaxed mb-4">
              Choosing Liquid means partnering with a team that puts your needs first, providing exceptional responsiveness and personalized attention with unwavering integrity.
            </p>
            <p className="text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
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
                className="text-center bg-white p-8 rounded-[10px] border border-[#E0E4EA]"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgba(45,74,111,0.08)] rounded-[10px] mb-6">
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
            className="mt-16 text-center bg-[#E5E7EB] p-12 rounded-[10px]"
          >
            <p className="text-[#4B5563] text-lg leading-relaxed max-w-4xl mx-auto">
              From the moment you start working with us, you'll experience our <span className="text-[#0A1628] font-semibold">"make it easier"</span> approach, ensuring a seamless and efficient process. We always strive to deliver the best solutions for your operational needs, ensuring you receive the highest level of care and professionalism.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
