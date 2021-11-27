import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { navigate } from "gatsby-link";

import SectionWrapper from "components/sectionWrapper/sectionWrapper";
import Title from "components/title";

import {
  StyledAbout,
  StyledTextBox,
  StyledFlexItem,
  StyledButtonAbout,
} from "./about.styles";

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "about-pic.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => (
        <SectionWrapper>
          <StyledAbout id="about">
            <StyledFlexItem data-sal="slide-up" data-sal-duration="500">
              <Img fluid={data.file.childImageSharp.fluid} />
            </StyledFlexItem>

            <StyledFlexItem data-sal="slide-up" data-sal-duration="500">
              <Title title="O byciu psycholożką i psychoterapeutką" />

              <StyledTextBox>
                <p>
                  Wierzę, że proces terapeutyczny to najlepsza forma poznania
                  siebie i bezpiecznej pracy nad zrozumieniem relacji, które
                  budujemy z innymi ludźmi. Jako psycholog i terapeutka w
                  zgłębianiu rozumienia psychiki ludzkiej kładę szczególną uwagę
                  na rolę ciała i ruchu. Zarówno w kontakcie indywidualnym, jak
                  i grupowym korzystam z poznanych technik pracy terapeutycznej
                  i rosnącego doświadczenia. Z ogromną pasją odnoszę się do
                  swojego zawodu. Swoich pacjentów zawsze staram się obdarzać
                  pełnym szacunkiem oraz empatią, zapewniając im maksymalne
                  wsparcie i pełną dyskrecję.
                </p>
              </StyledTextBox>

              <StyledButtonAbout onClick={() => navigate("/about")}>
                Więcej o mnie
              </StyledButtonAbout>
            </StyledFlexItem>
          </StyledAbout>
        </SectionWrapper>
      )}
    />
  );
};

export default About;
