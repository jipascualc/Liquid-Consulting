import { useState } from "react";
import { MinimalHeader } from "./components/MinimalHeader";
import { MinimalFooter } from "./components/MinimalFooter";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { JoinUsPage } from "./pages/JoinUsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";

type PageType = "home" | "about" | "join-us" | "services" | { type: "service"; id: string };

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const handleServiceClick = (serviceId: string) => {
    setCurrentPage({ type: "service", id: serviceId });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getHeaderPage = (): "home" | "about" | "join-us" | "services" => {
    if (typeof currentPage === "string") {
      return currentPage;
    }
    return "services";
  };

  const renderPage = () => {
    if (typeof currentPage === "string") {
      if (currentPage === "home") {
        return <HomePage onServiceClick={handleServiceClick} />;
      } else if (currentPage === "about") {
        return <AboutPage />;
      } else if (currentPage === "join-us") {
        return <JoinUsPage />;
      } else if (currentPage === "services") {
        return <ServicesPage onServiceClick={handleServiceClick} />;
      }
    }
    return (
      <ServiceDetailPage
        serviceId={currentPage.id}
        onBack={handleBackToHome}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white relative">
      <MinimalHeader
        currentPage={getHeaderPage()}
        onNavigate={(page) => setCurrentPage(page)}
      />
      <main className="relative z-10">{renderPage()}</main>
      <MinimalFooter 
        onServiceClick={handleServiceClick}
        onNavigate={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
