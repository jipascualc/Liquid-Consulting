import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-fvhqpjym4x";
import imgRectangle1 from "../../assets/08f531c289052fa27e5ab01769f8c20f9e30f073.webp";
import { imgRectangle } from "../../imports/svg-3m1pc";

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
    <div className="relative h-[60px] w-[160px]">
      <div className="absolute left-0 top-0 w-full h-full scale-[0.85]">
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

export function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll({
    layoutEffect: false
  });
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(13, 28, 54, 0)", "rgba(13, 28, 54, 0.98)"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Clients", href: "#clients" },
    { name: "Careers", href: "#careers" },
  ];

  return (
    <motion.header
      style={{ backgroundColor: headerBg }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-lg shadow-black/20 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <a href="#" className="block">
              <LiquidLogo />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6c19] to-[#ff8540] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#contact"
              className="group relative px-8 py-3.5 bg-gradient-to-r from-[#ff6c19] to-[#ff8540] text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff6c19]/40 hover:scale-105 inline-flex items-center space-x-2"
            >
              <span className="relative z-10 font-medium">Request Support</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8540] to-[#ff6c19] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#0d1c36]/98 backdrop-blur-xl border-t border-white/5"
        >
          <div className="px-6 py-6 space-y-4 max-w-[1400px] mx-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/80 hover:text-white py-3 transition-colors border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-gradient-to-r from-[#ff6c19] to-[#ff8540] text-white text-center px-8 py-4 rounded-full mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Support
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
