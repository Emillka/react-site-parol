import React from "react";
import {
  Service1,
  Team1,
  ChooseUs,
  About2,
  HeaderArea,
  Breadcrumb,
  Clients,
} from "../components";

const About: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderArea />
      <Breadcrumb />
      <About2 />
      <Service1 />
      <ChooseUs />
      <Clients />
      <Team1 type={false} />
    </React.Fragment>
  );
};

export default About;
