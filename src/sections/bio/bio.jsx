import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import SectionWrapepr from "components/sectionWrapper";
import Title from "components/title";

import TextBlock from "./components/textBlock/textBlock";

import aboutData from "data/aboutData.json";

import { StyledWrapper, StyledImg, StyledContent } from "./bio.styles";

const Bio = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "about.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <SectionWrapepr>
            <StyledWrapper>
              <StyledImg>
                <Img fluid={data.file.childImageSharp.fluid} />
              </StyledImg>
              <StyledContent>
                <Title title="Słów kilka o kwalifikacjach i doświadczeniu" />
                {aboutData.map((item) => (
                  <TextBlock content={item.content} title={item.title} />
                ))}
              </StyledContent>
            </StyledWrapper>
          </SectionWrapepr>
        );
      }}
    />
  );
};

export default Bio;
