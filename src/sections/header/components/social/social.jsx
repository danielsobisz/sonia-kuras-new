import React from "react";
import ZnanyLekarz from "assets/znanylekarz.svg";
import Facebook from "assets/facebook.svg";

import { Icon } from "./social.styles";

const Social = ({ type, isActive }) => {
  const hrefs = {
    fb: "https://www.facebook.com/Sonia-Kura%C5%9B-Psychoterapia-ta%C5%84cem-i-ruchem-476345809599003",
    znanyLekarz:
      "https://www.znanylekarz.pl/sonia-kuras/psycholog-psychoterapeuta/gdansk?utm_source=widget-doctor-345736&utm_medium=big&utm_campaign=&utm_content=#highlight-calendar",
  };

  return (
    <a href={hrefs[type]}>
      <Icon active={isActive}>
        {type === "fb" ? <Facebook /> : <ZnanyLekarz />}
      </Icon>
    </a>
  );
};

export default Social;
