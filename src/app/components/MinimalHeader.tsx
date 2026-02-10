import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-xzm3t70tl4";
import imgImage from "../../assets/08f531c289052fa27e5ab01769f8c20f9e30f073.png";
import { RequestSupportModal } from "./RequestSupportModal";

interface MinimalHeaderProps {
  currentPage: "home" | "about" | "join-us" | "services";
  onNavigate: (page: "home" | "about" | "join-us" | "services") => void;
}

export function MinimalHeader({ currentPage, onNavigate }: MinimalHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentPage === "services" || currentPage === "about" || currentPage === "join-us" ? "bg-[#0d1c36] shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo Button */}
          <button 
            onClick={() => onNavigate("home")} 
            className="h-[40px] w-[120px] relative mr-auto"
          >
            <div className="absolute left-[-287.6px] size-0 top-[-20px]">
              <div className="absolute left-0 size-0 top-0" />
              <div className="absolute contents left-[287.6px] top-[18.61px]">
                {/* Mask Group */}
                <div className="absolute content-stretch flex flex-col h-[44.112px] items-start left-[373.5px] overflow-clip top-[18.61px] w-[25.501px]">
                  <div className="h-[44.112px] relative shrink-0 w-full">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
                  </div>
                </div>
                {/* Icon Container */}
                <div className="absolute content-stretch flex flex-col items-start left-[376.12px] size-[20.456px] top-[39.36px]">
                  <div className="h-[20.456px] overflow-clip relative shrink-0 w-full">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4555 20.4555">
                      <path d={svgPaths.p3b750700} fill="white" fillOpacity="0.8" />
                    </svg>
                  </div>
                </div>
                {/* Liquid Text */}
                <div className="absolute content-stretch flex flex-col h-[29.761px] items-start left-[287.6px] top-[34.31px] w-[79.11px]">
                  <div className="h-[29.761px] overflow-clip relative shrink-0 w-full">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.1098 29.761">
                      <path d={svgPaths.p30979800} fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 mr-10">
            <button
              onClick={() => {
                onNavigate("home");
                window.scrollTo(0, 0);
              }}
              className={`relative ${
                currentPage === "home" 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              } transition-colors`}
            >
              {currentPage === "home" && (
                <div className="absolute border-[#ff6c19] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
              )}
              Home
            </button>
            <button
              onClick={() => {
                onNavigate("services");
                window.scrollTo(0, 0);
              }}
              className={`relative ${
                currentPage === "services" 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              } transition-colors`}
            >
              {currentPage === "services" && (
                <div className="absolute border-[#ff6c19] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
              )}
              Services
            </button>
            <button
              onClick={() => {
                onNavigate("about");
                window.scrollTo(0, 0);
              }}
              className={`relative ${
                currentPage === "about" 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              } transition-colors`}
            >
              {currentPage === "about" && (
                <div className="absolute border-[#ff6c19] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
              )}
              About
            </button>
            <button
              onClick={() => {
                onNavigate("join-us");
                window.scrollTo(0, 0);
              }}
              className={`relative ${
                currentPage === "join-us" 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              } transition-colors`}
            >
              {currentPage === "join-us" && (
                <div className="absolute border-[#ff6c19] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
              )}
              Join Us
            </button>
          </nav>

          {/* Request Support Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#ff6c19] px-6 py-2.5 flex items-center text-white hover:bg-[#ff8540] transition-colors rounded-full"
            >
              Request Support
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0d1c36] border-t border-white/10">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => {
                onNavigate("home");
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className={`block py-2 w-full text-left ${
                currentPage === "home" 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate("services");
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className={`block py-2 w-full text-left ${
                currentPage === "services" 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => {
                onNavigate("about");
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className={`block py-2 w-full text-left ${
                currentPage === "about" 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigate("join-us");
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className={`block py-2 w-full text-left ${
                currentPage === "join-us" 
                  ? "text-white" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Join Us
            </button>
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="block bg-[#ff6c19] text-white text-center px-6 py-3 mt-4 rounded-full w-full"
            >
              Request Support
            </button>
          </div>
        </div>
      )}

      {/* Request Support Modal */}
      <RequestSupportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
