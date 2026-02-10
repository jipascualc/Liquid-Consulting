import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (437) 213-1750",
      link: "tel:+14372131750"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@liquidconsulting.com",
      link: "mailto:contact@liquidconsulting.com"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Ajax, ON L1S 7S7",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#0d1c36]">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to optimize your operations? Let's discuss how we can help.
          </p>
          <div className="w-24 h-1 bg-[#ff6c19] mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6 text-[#0d1c36]">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white transition-colors duration-300 group"
                  >
                    <div className="bg-[#ff6c19]/10 p-3 rounded-lg group-hover:bg-[#ff6c19] transition-colors duration-300">
                      <item.icon className="text-[#ff6c19] group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{item.title}</div>
                      <div className="text-[#0d1c36]">{item.content}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0d1c36] to-[#162844] rounded-2xl p-8 text-white">
              <h3 className="text-2xl mb-4">24/7 Emergency Support</h3>
              <p className="text-white/80 mb-6">
                Need immediate assistance? Our emergency response team is available around the clock to help minimize your downtime.
              </p>
              <a
                href="tel:+14372131750"
                className="inline-block bg-[#ff6c19] hover:bg-[#ff8540] text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6c19] focus:ring-2 focus:ring-[#ff6c19]/20 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6c19] focus:ring-2 focus:ring-[#ff6c19]/20 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm mb-2 text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6c19] focus:ring-2 focus:ring-[#ff6c19]/20 outline-none transition-all"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6c19] focus:ring-2 focus:ring-[#ff6c19]/20 outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff6c19] hover:bg-[#ff8540] text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6c19]/30 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
