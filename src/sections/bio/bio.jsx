import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { navigate } from 'gatsby-link';

import SectionWrapper from 'components/sectionWrapper';
import Title from 'components/title';

import TextBlock from './components/textBlock/textBlock';

import aboutData from 'data/aboutData.json';

import {
  StyledWrapper,
  StyledImg,
  StyledContent,
  StyledButton,
} from './bio.styles';

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
                  <TextBlock content={item.content} title={item.title} />
                ))}
              </StyledContent>
            </StyledWrapper>
            <StyledContent>
              {aboutData.second.map((item) => (
                <TextBlock content={item.content} title={item.title} />
              ))}
            </StyledContent>
            <StyledButton onClick={() => navigate(-1)}>Wróć</StyledButton>
          </SectionWrapper>
        );
      }}
    />
  );
};

export default Bio;
