import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Carousel from 'components/carousel';
import Title from 'components/title';

import offerData from 'data/offerData';

import {
  StyledSection,
  StyledSlide,
  StyledCarouselWrapper,
  StyledContainer,
  StyledImg,
  StyledTextContent,
  StyledText,
  StyledTitle,
} from './carouselSection.styles';

const CarouselSection = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const slideFactory = offerData.map((item) => {
          const image = data.allImageSharp.edges.filter(
            (img) => img.node.fluid.originalName === item.pic
          );

          return (
            <StyledSlide>
              <StyledImg>
                <Img
                  imgStyle={{
                    objectFit: 'cover',
                    objectPosition: '50% 50%',
                  }}
                  fluid={image[0].node.fluid}
                />
              </StyledImg>
              <StyledTextContent>
                <StyledTitle>{item.title}</StyledTitle>

                <StyledText dangerouslySetInnerHTML={{ __html: item.text }} />
              </StyledTextContent>
            </StyledSlide>
          );
        });

        return (
          <StyledSection id="offer">
            <Title title="Oferta" asMain />

            <StyledContainer>
              <StyledCarouselWrapper>
                <Carousel slides={slideFactory} data-sal="slide-up" hasNavigation loop />
              </StyledCarouselWrapper>
            </StyledContainer>
          </StyledSection>
        );
      }}
    />
  );
};

export default CarouselSection;
