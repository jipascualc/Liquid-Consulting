import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import svgPaths from "../../imports/svg-fvhqpjym4x";
import imgRectangle1 from "../../assets/08f531c289052fa27e5ab01769f8c20f9e30f073.webp";
import { imgRectangle } from "../../imports/svg-3m1pc";

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

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Clients", href: "#clients" },
    { name: "Join us", href: "#careers" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1c36]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="block">
              <LiquidLogo />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-[#ff6c19] transition-colors duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="bg-[#ff6c19] hover:bg-[#ff8540] text-white px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6c19]/30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Request Support
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0d1c36] border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/90 hover:text-[#ff6c19] py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-[#ff6c19] text-white text-center px-6 py-2.5 rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Support
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
