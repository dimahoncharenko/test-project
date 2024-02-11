import { MainWrapper } from "./styled";

import { Hero } from "../../components/Hero";
import { Banner } from "../../components/Banner";
import { AdvantagesSection } from "../../components/AdvantagesSection";

export const MainContent = () => {
  return (
    <MainWrapper>
      <Hero />
      <Banner />
      <AdvantagesSection />
    </MainWrapper>
  );
};
