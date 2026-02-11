import { motion } from "motion/react";
import imgClient1Jpg from "../../assets/29fe148fce8935431e062d6a7905a780364a21ec.webp";
import imgClient2Jpg from "../../assets/ecd85f3e366b711f135575fb5ab290c6928ad877.webp";
import imgClient3Jpg from "../../assets/de8db03f585829b36adf7a464c98b8f56b1199b5.webp";
import imgClient4Jpg from "../../assets/432a495d39838960af3082bfc68ef142a612cfb8.webp";
import imgClient5Jpg from "../../assets/627d7c5be7fc455a01371b26fa24d1119a8e8007.webp";
import imgClient6Jpg from "../../assets/78a4cd2745334d6c80666b74061c2c795ee67d54.webp";

export function MinimalClients() {
  const clients = [
    { img: imgClient1Jpg, name: "SunOpta" },
    { img: imgClient2Jpg, name: "Aurora" },
    { img: imgClient3Jpg, name: "Danone" },
    { img: imgClient4Jpg, name: "Saputo" },
    { img: imgClient5Jpg, name: "Niagara" },
    { img: imgClient6Jpg, name: "Califia Farms" }
  ];

  return (
    <section id="clients" className="relative py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[#ff6c19] text-sm uppercase tracking-wider mb-4">Our Partners</p>
          <h2 className="text-4xl md:text-5xl text-[#0d1c36]">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center bg-white p-12 border border-gray-200 hover:shadow-lg transition-all"
            >
              <img
                src={client.img}
                alt={client.name}
                className="max-w-full h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
