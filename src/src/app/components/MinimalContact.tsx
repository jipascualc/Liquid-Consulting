import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export function MinimalContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#ff6c19] text-sm uppercase tracking-wider mb-4">Contact Us</p>
          <h2 className="text-4xl md:text-5xl text-[#0d1c36] mb-4">
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ff6c19] flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide">Phone</p>
                  <a href="tel:+14372131750" className="text-lg text-[#0d1c36] hover:text-[#ff6c19]">
                    +1 (437) 213-1750
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ff6c19] flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide">Email</p>
                  <a href="mailto:contact@liquidconsulting.com" className="text-lg text-[#0d1c36] hover:text-[#ff6c19]">
                    contact@liquidconsulting.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ff6c19] flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide">Location</p>
                  <p className="text-lg text-[#0d1c36]">Ajax, ON L1S 7S7</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1c36] p-8 text-white">
              <h3 className="text-xl mb-4">24/7 Emergency Support</h3>
              <p className="text-white/80 mb-6">
                Need immediate assistance? Our emergency response team is available around the clock.
              </p>
              <a
                href="tel:+14372131750"
                className="inline-block px-6 py-3 bg-[#ff6c19] text-white hover:bg-[#ff8540] transition-colors rounded-full"
              >
                Call Emergency Line
              </a>
            </div>
          </div>

          <div className="bg-white p-8">
            <h3 className="text-2xl text-[#0d1c36] mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#ff6c19] outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#ff6c19] outline-none transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#ff6c19] outline-none transition-colors"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#ff6c19] outline-none transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#ff6c19] text-white hover:bg-[#ff8540] transition-colors rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
