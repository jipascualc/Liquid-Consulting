import { motion } from "motion/react";
import { Target, Lightbulb, Users, Award, Zap, Shield } from "lucide-react";
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
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-[#0d1c36] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1652211955967-99c892925469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmb29kJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb24lMjBsaW5lfGVufDF8fHx8MTc3MDY3NDU4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Food Production Facility"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#ff6c19] text-sm uppercase tracking-wider mb-4"
          >
            About Liquid
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl text-white mb-6"
          >
            Excellence in Food Industry Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg"
          >
            Your agile partner for profitable growth since 2006
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-[#ff6c19] mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="bg-[#f9fafb] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-l-4 border-[#ff6c19]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#ff6c19]" />
                <h3 className="text-xl text-[#0d1c36]">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Be the most agile partner for our customers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-l-4 border-[#0d1c36]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-[#0d1c36]" />
                <h3 className="text-xl text-[#0d1c36]">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Make it easier for liquid food producers to drive profitable growth
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Liquid Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[#ff6c19] text-sm uppercase tracking-wider mb-4">Our Story</p>
              <h2 className="text-4xl text-[#0d1c36] mb-6">What is Liquid</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Liquid provides innovative, on-demand solutions and expert support to optimize and enhance food industry operations. Founded in 2006 in Sweden, Liquid has grown into a robust organization of approximately 100 dedicated professionals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We specialize in a wide range of services, including equipment upgrades, maintenance, and troubleshooting, tailored to meet the unique needs of each client. Our mission is to deliver exceptional results that boost efficiency, reduce costs, and ensure the highest standards of quality in your production processes.
              </p>
              <p className="text-gray-600 leading-relaxed">
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
      <section className="bg-[#0d1c36] py-20">
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
              <p className="text-[#ff6c19] text-sm uppercase tracking-wider mb-4">Services</p>
              <h2 className="text-4xl text-white mb-6">What We Offer</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                At Liquid, we provide a comprehensive range of services to optimize and enhance food industry operations. Our offerings include tailored long-term maintenance contracts, rapid-response troubleshooting, and turnkey engineering solutions for any customer demand.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                We have specialized expertise in aseptic knowledge, training, and troubleshooting, ensuring minimal downtime and maintaining product integrity. Our goal is to reduce operational costs, improve production line performance, and deliver innovative solutions tailored to your needs.
              </p>
              <p className="text-white/80 leading-relaxed">
                Whether you need immediate assistance or long-term support, Liquid is your trusted partner in achieving operational excellence and profitability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Liquid Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#ff6c19] text-sm uppercase tracking-wider mb-4">Why Choose Us</p>
            <h2 className="text-4xl text-[#0d1c36] mb-6">Why Liquid</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Choosing Liquid means partnering with a team that puts your needs first, providing exceptional responsiveness and personalized attention with unwavering integrity.
            </p>

            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the fun and easy way to elevate your operations with Liquid, and let us bring a smile to your face as we enhance your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6c19]/10 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-[#ff6c19]" />
                </div>
                <h3 className="text-xl text-[#0d1c36] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gray-50 p-12 rounded-lg"
          >
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              From the moment you start working with us, you'll experience our <span className="text-[#ff6c19] font-semibold">"make it easier"</span> approach, ensuring a seamless and efficient process. We always strive to deliver the best solutions for your operational needs, ensuring you receive the highest level of care and professionalism.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
