import { motion } from "motion/react";
import svgPaths from "../../imports/svg-fvhqpjym4x";
import imgRectangle1 from "../../assets/08f531c289052fa27e5ab01769f8c20f9e30f073.png";
import { imgRectangle } from "../../imports/svg-3m1pc";
import imgLinkedinLogoPng from "../../assets/d28eb6f86c94a90ca460280a0a6c487c7998f48d.png";

function MaskGroup() {
  return (
    <div className="absolute contents left-[133.66px] top-0" data-name="Mask group">
      <div className="absolute h-[68.642px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.604px_0.754px] mask-size-[38.621px_67.436px] top-[-0.75px] w-[39.684px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
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
        <div className="absolute inset-[45.04%_9.88%_9.48%_73.2%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.8319 31.8319">
            <path d={svgPaths.pe536a00} fill="white" fillOpacity="0.8" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[46.315px] left-0 top-[23.69px] w-[123.104px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.104 46.3147">
            <path d={svgPaths.p3bc61c40} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Emergency Support", href: "#services" },
        { name: "Service Contracts", href: "#services" },
        { name: "Commissioning", href: "#services" },
        { name: "Food Safety", href: "#services" }
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
      title: "Resources",
      links: [
        { name: "Case Studies", href: "#" },
        { name: "Industry Insights", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Support", href: "#contact" }
      ]
    }
  ];

  return (
    <footer className="bg-[#0d1c36] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <LiquidLogo />
              <p className="mt-6 text-white/70 leading-relaxed">
                Optimizing food industry operations with expertise in aseptic technology, maintenance, and innovative solutions.
              </p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/liquidconsulting/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#ff6c19] p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <img src={imgLinkedinLogoPng} alt="LinkedIn" className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6 space-y-2 text-sm text-white/70">
                <p>PO Box 40130</p>
                <p>Ajax, ON L1S 7S7</p>
                <p className="mt-4">
                  <a href="tel:+14372131750" className="hover:text-[#ff6c19] transition-colors">
                    +1 (437) 213-1750
                  </a>
                </p>
                <p>
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#ff6c19] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © {currentYear} Liquid Consulting Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#ff6c19] transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-white/60 hover:text-[#ff6c19] transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
