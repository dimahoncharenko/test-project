import { MainWrapper } from "./styled";

import { Hero } from "../../components/Hero";
import { Banner } from "../../components/Banner";
import { AdvantagesSection } from "../../components/AdvantagesSection";
import { useContext } from "react";
import { availableSectionsContext } from "../../utils";

export const MainContent = () => {
  // const { banner, text } = useContext(availableSectionsContext);

  return (
    <MainWrapper>
      <Hero />
      {<Banner />}
      {<AdvantagesSection />}
    </MainWrapper>
  );
};
