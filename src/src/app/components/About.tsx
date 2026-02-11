import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, Award, Users } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "What we do",
      description: "At Liquid, we optimize food industry operations with long-term maintenance, rapid troubleshooting, and turnkey solutions. Specializing in aseptic knowledge, we minimize downtime and maintain product integrity. Our goal is to reduce costs and improve production performance, offering innovative and tailored solutions for excellence and profitability."
    },
    {
      icon: Award,
      title: "Why Liquid",
      description: "Choosing Liquid means partnering with a responsive team that prioritizes your needs. Our \"make it easier\" approach ensures seamless and efficient processes, delivering top solutions with utmost care and professionalism. Elevate your operations effortlessly with Liquid, enhancing your success with a smile."
    },
    {
      icon: Users,
      title: "Our Approach",
      description: "We combine deep industry expertise with innovative technology solutions to deliver results that exceed expectations. Our team of specialists brings decades of combined experience in food safety, automation, and operational excellence."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#0d1c36]">
            Excellence in Food Industry Solutions
          </h2>
          <div className="w-24 h-1 bg-[#ff6c19] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-[#ff6c19]/20"
            >
              <div className="bg-[#ff6c19]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ff6c19] transition-colors duration-300">
                <feature.icon className="text-[#ff6c19] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-2xl mb-4 text-[#0d1c36]">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "100+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl text-[#ff6c19] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
