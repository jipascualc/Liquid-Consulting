import { MinimalHero } from "../components/MinimalHero";
import { MinimalWhatWeDoWhyLiquid } from "../components/MinimalWhatWeDoWhyLiquid";
import { MinimalServices } from "../components/MinimalServices";
import { MinimalTestimonials } from "../components/MinimalTestimonials";
import { MinimalExperience } from "../components/MinimalExperience";

interface HomePageProps {
  onServiceClick: (serviceId: string) => void;
}

export function HomePage({ onServiceClick }: HomePageProps) {
  return (
    <>
      <MinimalHero />
      <MinimalWhatWeDoWhyLiquid />
      <MinimalServices onServiceClick={onServiceClick} />
      <MinimalTestimonials />
      <MinimalExperience />
    </>
  );
}
