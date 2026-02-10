import { motion } from "motion/react";
import svgPaths from "../../imports/svg-fvhqpjym4x";
import imgRectangle1 from "../../assets/08f531c289052fa27e5ab01769f8c20f9e30f073.png";
import { imgRectangle } from "../../imports/svg-3m1pc";
import imgLinkedinLogoPng from "../../assets/d28eb6f86c94a90ca460280a0a6c487c7998f48d.png";
import { ArrowUp } from "lucide-react";

function MaskGroup() {
  return (
    <div className="absolute contents left-[133.66px] top-0">
      <div className="absolute h-[68.642px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.604px_0.754px] mask-size-[38.621px_67.436px] top-[-0.75px] w-[39.684px]" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function LiquidLogo() {
  return (
    <div className="relative h-[70px] w-[188.16px]">
      <div className="absolute left-0 top-0 w-full h-full">
        <MaskGroup />
        <div className="absolute inset-[45.04%_9.88%_9.48%_73.2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.8319 31.8319">
            <path d={svgPaths.pe536a00} fill="white" fillOpacity="0.8" />
          </svg>
        </div>
        <div className="absolute h-[46.315px] left-0 top-[23.69px] w-[123.104px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.104 46.3147">
            <path d={svgPaths.p3bc61c40} fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function ModernFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Emergency Support", href: "#services" },
        { name: "Service Contracts", href: "#services" },
        { name: "Commissioning", href: "#services" },
        { name: "Food Safety", href: "#services" },
        { name: "Legacy Upgrade", href: "#services" },
        { name: "Automation", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Clients", href: "#clients" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "24/7 Emergency", href: "tel:+14372131750" },
        { name: "Request Support", href: "#contact" },
        { name: "FAQ", href: "#" },
        { name: "Resources", href: "#" }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0d1c36] to-[#0a1528] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 108, 25, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Top Accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#ff6c19] to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <LiquidLogo />
              <p className="mt-6 text-white/70 leading-relaxed text-lg max-w-md">
                Optimizing food industry operations with expertise in aseptic technology, maintenance, and innovative solutions.
              </p>

              {/* Social */}
              <div className="mt-8">
                <p className="text-white/60 text-sm mb-4 uppercase tracking-wider">Follow Us</p>
                <a
                  href="https://www.linkedin.com/company/liquidconsulting/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-[#ff6c19] hover:to-[#ff8540] rounded-xl transition-all duration-300 hover:scale-110"
                >
                  <img src={imgLinkedinLogoPng} alt="LinkedIn" className="w-6 h-6 opacity-80 group-hover:opacity-100" />
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-3 text-white/70">
                <p className="flex items-center space-x-2">
                  <span className="text-[#ff6c19]">📍</span>
                  <span>PO Box 40130, Ajax, ON L1S 7S7</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[#ff6c19]">📞</span>
                  <a href="tel:+14372131750" className="hover:text-[#ff6c19] transition-colors">
                    +1 (437) 213-1750
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[#ff6c19]">✉️</span>
                  <a href="mailto:contact@liquidconsulting.com" className="hover:text-[#ff6c19] transition-colors">
                    contact@liquidconsulting.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-[#ff6c19] transition-colors duration-300 inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#ff6c19] mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © {currentYear} Liquid Consulting Inc. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white/50 hover:text-[#ff6c19] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-[#ff6c19] transition-colors text-sm">
                Terms of Service
              </a>
              
              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="group flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#ff6c19] hover:to-[#ff8540] rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
