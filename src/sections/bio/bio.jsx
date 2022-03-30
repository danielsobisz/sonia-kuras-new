import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { navigate } from 'gatsby-link';

import SectionWrapper from 'components/sectionWrapper';

import aboutData from 'data/aboutData.json';

import TextBlock from './components/textBlock/textBlock';

import { StyledWrapper, StyledImg, StyledContent, StyledButton } from './bio.styles';

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
          <SectionWrapper>
            <StyledWrapper>
              <StyledImg>
                <Img fluid={data.file.childImageSharp.fluid} />
              </StyledImg>
              <StyledContent>
                {aboutData.first.map((item) => (
                  <TextBlock withNoMargin content={item.content} title={item.title} />
                ))}
              </StyledContent>
            </StyledWrapper>
            <StyledWrapper>
              <div>
                {aboutData.second.map((item) => (
                  <TextBlock content={item.content} title={item.title} />
                ))}
              </div>
              <div>
                {aboutData.third.map((item) => (
                  <TextBlock content={item.content} title={item.title} />
                ))}
                <StyledButton onClick={() => navigate(-1)}>Wróć</StyledButton>
              </div>
            </StyledWrapper>
          </SectionWrapper>
        );
      }}
    />
  );
};

export default Bio;
