import React from "react";
import {
  HeaderTop,
  HeaderArea,
  HeroArea,
  Promo,
  About1,
  Service1,
  ProjectCounter,
} from "../components";

const Home1: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderTop />
      <HeaderArea />
      <HeroArea type={true} />
      <Promo />
      <About1 />
      <Service1 />
      <ProjectCounter type={true} />
    </React.Fragment>
  );
};

export default Home1;
