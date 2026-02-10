import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import imgClient1Jpg from "../../assets/29fe148fce8935431e062d6a7905a780364a21ec.webp";
import imgClient2Jpg from "../../assets/ecd85f3e366b711f135575fb5ab290c6928ad877.webp";
import imgClient3Jpg from "../../assets/de8db03f585829b36adf7a464c98b8f56b1199b5.webp";
import imgClient4Jpg from "../../assets/432a495d39838960af3082bfc68ef142a612cfb8.webp";
import imgClient5Jpg from "../../assets/627d7c5be7fc455a01371b26fa24d1119a8e8007.webp";
import imgClient6Jpg from "../../assets/78a4cd2745334d6c80666b74061c2c795ee67d54.webp";

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    { img: imgClient1Jpg, name: "SunOpta" },
    { img: imgClient2Jpg, name: "Aurora" },
    { img: imgClient3Jpg, name: "Danone" },
    { img: imgClient4Jpg, name: "Saputo" },
    { img: imgClient5Jpg, name: "Niagara" },
    { img: imgClient6Jpg, name: "Califia Farms" }
  ];

  return (
    <section id="clients" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#0d1c36]">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with some of the world's most recognized food and beverage brands
          </p>
          <div className="w-24 h-1 bg-[#ff6c19] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <img
                src={client.img}
                alt={client.name}
                className="max-w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-[#0d1c36] to-[#162844] rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <svg className="w-12 h-12 text-[#ff6c19] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-white mb-6 italic">
              "Liquid Consulting has been instrumental in optimizing our production processes. Their expertise in aseptic technology and commitment to minimizing downtime has significantly improved our operational efficiency."
            </p>
            <div className="text-[#ff6c19]">
              — Industry Partner
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
