import { useState, useEffect, lazy, Suspense } from "react";
import { MinimalHeader } from "./components/MinimalHeader";
import { MinimalFooter } from "./components/MinimalFooter";
import { HomePage } from "./pages/HomePage";

const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const JoinUsPage = lazy(() => import("./pages/JoinUsPage").then(m => ({ default: m.JoinUsPage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage").then(m => ({ default: m.ServiceDetailPage })));

type PageType = "home" | "about" | "join-us" | "services" | { type: "service"; id: string };

function getPageFromPath(): PageType {
  const path = window.location.pathname;
  if (path === "/about") return "about";
  if (path === "/services") return "services";
  if (path === "/join-us") return "join-us";
  if (path.startsWith("/services/")) return { type: "service", id: path.replace("/services/", "") };
  return "home";
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(getPageFromPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = "Liquid";
  }, [currentPage]);

  const navigate = (page: PageType) => {
    let path: string;
    if (typeof page === "string") {
      path = page === "home" ? "/" : `/${page}`;
    } else {
      path = `/services/${page.id}`;
    }
    window.history.pushState({}, "", path);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (serviceId: string) => {
    navigate({ type: "service", id: serviceId });
  };

  const handleBackToHome = () => {
    navigate("services");
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
    <div className="min-h-screen bg-[#F0F2F5] relative">
      <MinimalHeader
        currentPage={getHeaderPage()}
        onNavigate={(page) => navigate(page)}
      />
      <main className="relative z-10" style={{ borderRadius: 0 }}>
        <Suspense fallback={<div className="min-h-screen" />}>
          {renderPage()}
        </Suspense>
      </main>
      <MinimalFooter
        onServiceClick={handleServiceClick}
        onNavigate={(page) => navigate(page)}
      />
    </div>
  );
}