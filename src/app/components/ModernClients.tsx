import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import imgClient1Jpg from "../../assets/29fe148fce8935431e062d6a7905a780364a21ec.png";
import imgClient2Jpg from "../../assets/ecd85f3e366b711f135575fb5ab290c6928ad877.png";
import imgClient3Jpg from "../../assets/de8db03f585829b36adf7a464c98b8f56b1199b5.png";
import imgClient4Jpg from "../../assets/432a495d39838960af3082bfc68ef142a612cfb8.png";
import imgClient5Jpg from "../../assets/627d7c5be7fc455a01371b26fa24d1119a8e8007.png";
import imgClient6Jpg from "../../assets/78a4cd2745334d6c80666b74061c2c795ee67d54.png";
import { Quote, Star } from "lucide-react";

export function ModernClients() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const clients = [
    { img: imgClient1Jpg, name: "SunOpta" },
    { img: imgClient2Jpg, name: "Aurora" },
    { img: imgClient3Jpg, name: "Danone" },
    { img: imgClient4Jpg, name: "Saputo" },
    { img: imgClient5Jpg, name: "Niagara" },
    { img: imgClient6Jpg, name: "Califia Farms" }
  ];

  return (
    <section id="clients" ref={ref} style={{ position: 'relative' }} className="relative py-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          style={{ y }}
          className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#ff6c19]/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#ff6c19] text-sm font-semibold uppercase tracking-widest mb-4 block">Our Partners</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-[#0d1c36]">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            We're proud to partner with some of the world's most recognized food and beverage brands
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#ff6c19] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Clients Grid with Bento Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-24">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6c19] to-[#ff8540] rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
              
              {/* Card */}
              <div className="relative flex items-center justify-center p-10 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 group-hover:border-[#ff6c19]/30 transition-all duration-500 aspect-square">
                <img
                  src={client.img}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c36] via-[#162844] to-[#0d1c36] rounded-3xl blur-xl opacity-50" />
          
          {/* Testimonial Card */}
          <div className="relative bg-gradient-to-br from-[#0d1c36] to-[#162844] rounded-3xl p-12 md:p-16 border border-white/10">
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-[#ff6c19] to-[#ff8540] rounded-2xl flex items-center justify-center"
            >
              <Quote className="w-10 h-10 text-white" />
            </motion.div>

            {/* Content */}
            <div className="ml-0 md:ml-24 max-w-4xl">
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#ff6c19] text-[#ff6c19]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8 italic">
                "Liquid Consulting has been <span className="text-[#ff6c19] font-semibold">instrumental</span> in optimizing our production processes. Their expertise in aseptic technology and commitment to minimizing downtime has significantly improved our operational efficiency."
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6c19] to-[#ff8540] flex items-center justify-center">
                  <span className="text-white text-xl font-bold">IP</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">Industry Partner</div>
                  <div className="text-white/60">Food & Beverage Sector</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
