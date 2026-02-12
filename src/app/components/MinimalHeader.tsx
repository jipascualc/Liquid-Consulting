import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-xzm3t70tl4";
import imgImage from "../../assets/08f531c289052fa27e5ab01769f8c20f9e30f073.webp";
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

  // Listen for hero "Request Support" button events
  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("open-support-modal", handleOpenModal);
    return () => window.removeEventListener("open-support-modal", handleOpenModal);
  }, []);

  // Always use light text on dark nav (transparent on home hero, navy when scrolled)
  const isTransparent = currentPage === "home" && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] ${
        isTransparent
          ? "bg-transparent"
          : "bg-[#0A1628]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16 flex items-center h-full w-full">
        {/* Logo Button */}
        <button
          onClick={() => onNavigate("home")}
          className="h-[40px] w-[120px] relative mr-auto shrink-0 focus:outline-none"
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
        <nav className="hidden md:flex items-center gap-9 mr-10">
          {(["home", "services", "about", "join-us"] as const).map((page) => {
            const labels: Record<string, string> = { home: "Home", services: "Services", about: "About", "join-us": "Join Us" };
            const isActive = currentPage === page;
            return (
              <button
                key={page}
                onClick={() => { onNavigate(page); window.scrollTo(0, 0); }}
                className={`relative text-sm font-medium tracking-[0.2px] transition-colors focus:outline-none ${
                  isActive
                    ? "text-white"
                    : "text-[rgba(255,255,255,0.7)] hover:text-white"
                }`}
              >
                {labels[page]}
              </button>
            );
          })}
        </nav>

        {/* Request Support Button — Navy CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-[10px] rounded-lg font-semibold text-sm transition-all cursor-pointer bg-[#E8520E] text-white hover:bg-[#FF6B2B] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] focus:outline-none"
          >
            Request Support
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-[rgba(255,255,255,0.08)]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16 py-4 space-y-3">
            {(["home", "services", "about", "join-us"] as const).map((page) => {
              const labels: Record<string, string> = { home: "Home", services: "Services", about: "About", "join-us": "Join Us" };
              return (
                <button
                  key={page}
                  onClick={() => { onNavigate(page); setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  className={`block py-2 w-full text-left ${
                    currentPage === page ? "text-white font-medium" : "text-[rgba(255,255,255,0.7)] hover:text-white"
                  }`}
                >
                  {labels[page]}
                </button>
              );
            })}
            <button
              onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
              className="block bg-[#E8520E] text-white text-center px-6 py-3 mt-4 rounded-lg w-full font-semibold"
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
