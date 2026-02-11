import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, TrendingUp, Users, Heart } from "lucide-react";

export function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement in a dynamic industry"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with industry experts in a supportive team environment"
    },
    {
      icon: Briefcase,
      title: "Challenging Projects",
      description: "Engage with cutting-edge food industry technology and solutions"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Competitive benefits and flexible working arrangements"
    }
  ];

  return (
    <section id="careers" className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#0d1c36]">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a team that's transforming the food industry through innovation and excellence
          </p>
          <div className="w-24 h-1 bg-[#ff6c19] mx-auto mt-6" />
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-[#ff6c19]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-[#ff6c19]" size={28} />
              </div>
              <h3 className="text-lg mb-2 text-[#0d1c36]">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-[#0d1c36] to-[#162844] rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl text-white mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about innovation and excellence in the food industry.
          </p>
          <a
            href="mailto:careers@liquidconsulting.com"
            className="inline-block bg-[#ff6c19] hover:bg-[#ff8540] text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6c19]/30"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
