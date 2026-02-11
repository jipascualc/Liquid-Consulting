import { motion } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";

export function ModernContact() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (437) 213-1750",
      link: "tel:+14372131750",
      gradient: "from-[#ff6c19] to-[#ff8540]"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@liquidconsulting.com",
      link: "mailto:contact@liquidconsulting.com",
      gradient: "from-[#0254D1] to-[#02B1F2]"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Ajax, ON L1S 7S7",
      link: "#",
      gradient: "from-[#03CA0B] to-[#7FE87F]"
    }
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#ff6c19]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0254D1]/20 to-transparent rounded-full blur-3xl" />
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
          <span className="text-[#ff6c19] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Contact Us
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-[#0d1c36]">
            Let's Work Together
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Ready to optimize your operations? Let's discuss how we can help.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#ff6c19] to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative block"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className="relative flex items-center space-x-6 p-6 bg-white rounded-2xl border border-gray-100 group-hover:border-gray-200 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <item.icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1 uppercase tracking-wide">{item.title}</div>
                      <div className="text-[#0d1c36] text-lg font-semibold">{item.content}</div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Emergency Support Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d1c36] to-[#162844] rounded-3xl blur-xl opacity-50" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#0d1c36] to-[#162844] rounded-3xl p-8 border border-white/10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff6c19] to-[#ff8540] flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-2 font-semibold">24/7 Emergency Support</h3>
                    <p className="text-white/70 leading-relaxed">
                      Need immediate assistance? Our emergency response team is available around the clock.
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+14372131750"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#ff6c19] to-[#ff8540] text-white rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6c19]/30 hover:scale-105"
                >
                  <Phone size={20} />
                  <span className="font-semibold">Call Emergency Line</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6c19]/10 to-transparent rounded-3xl blur-2xl" />
            
            {/* Form Card */}
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
              <h3 className="text-3xl text-[#0d1c36] mb-8 font-semibold">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 ${
                      focused === 'name' ? 'border-[#ff6c19]' : 'border-gray-200'
                    } focus:border-[#ff6c19] outline-none transition-all duration-300 bg-gray-50 focus:bg-white`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 ${
                      focused === 'email' ? 'border-[#ff6c19]' : 'border-gray-200'
                    } focus:border-[#ff6c19] outline-none transition-all duration-300 bg-gray-50 focus:bg-white`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-gray-700 mb-2 font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className={`w-full px-5 py-4 rounded-xl border-2 ${
                      focused === 'company' ? 'border-[#ff6c19]' : 'border-gray-200'
                    } focus:border-[#ff6c19] outline-none transition-all duration-300 bg-gray-50 focus:bg-white`}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    onFocus={() => setFocused('company')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className={`w-full px-5 py-4 rounded-xl border-2 ${
                      focused === 'message' ? 'border-[#ff6c19]' : 'border-gray-200'
                    } focus:border-[#ff6c19] outline-none transition-all duration-300 resize-none bg-gray-50 focus:bg-white`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-5 bg-gradient-to-r from-[#ff6c19] to-[#ff8540] text-white rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff6c19]/40 hover:scale-105 flex items-center justify-center space-x-3 relative overflow-hidden"
                >
                  <span className="relative z-10 font-semibold text-lg">Send Message</span>
                  <Send className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff8540] to-[#ff6c19] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#03CA0B]" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#03CA0B]" />
                  <span>Fast Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#03CA0B]" />
                  <span>Confidential</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
