import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Target, Award, Users, TrendingUp } from "lucide-react";

export function ModernAbout() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Target,
      title: "What we do",
      description: "At Liquid, we optimize food industry operations with long-term maintenance, rapid troubleshooting, and turnkey solutions. Specializing in aseptic knowledge, we minimize downtime and maintain product integrity.",
      gradient: "from-[#ff6c19] to-[#ff8540]"
    },
    {
      icon: Award,
      title: "Why Liquid",
      description: "Choosing Liquid means partnering with a responsive team that prioritizes your needs. Our 'make it easier' approach ensures seamless and efficient processes, delivering top solutions with utmost care.",
      gradient: "from-[#0254D1] to-[#02B1F2]"
    },
    {
      icon: Users,
      title: "Our Approach",
      description: "We combine deep industry expertise with innovative technology solutions to deliver results that exceed expectations. Our team brings decades of combined experience in food safety and automation.",
      gradient: "from-[#03CA0B] to-[#7FE87F]"
    }
  ];

  return (
    <section id="about" ref={ref} style={{ position: 'relative' }} className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0d1c36] to-[#0a1528]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          style={{ y }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#ff6c19]/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0254D1]/30 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          style={{ opacity }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-[#ff6c19] text-sm font-semibold uppercase tracking-widest mb-4 block">About Liquid</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Excellence in Food Industry Solutions
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#ff6c19] to-transparent mx-auto" />
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Background with Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
              
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full">
                {/* Icon */}
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-[#0d1c36] rounded-2xl flex items-center justify-center">
                    <feature.icon className="text-white" size={32} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Hover Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6c19]/10 via-transparent to-[#0254D1]/10 rounded-3xl blur-xl" />
          
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            {[
              { icon: TrendingUp, value: "15+", label: "Years Experience" },
              { icon: Target, value: "100+", label: "Projects Completed" },
              { icon: Users, value: "50+", label: "Happy Clients" },
              { icon: Award, value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff6c19] to-[#ff8540] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
