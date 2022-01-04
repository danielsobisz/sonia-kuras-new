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
            (image) => image.node.fluid.originalName === item.pic
          );
          console.log(image);

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
                <Title title={item.title} isCentered />

                <StyledText dangerouslySetInnerHTML={{ __html: item.text }} />
              </StyledTextContent>
            </StyledSlide>
          );
        });

        return (
          <StyledSection>
            <Title title="Oferta" asMain isWhite />

            <StyledContainer>
              <StyledCarouselWrapper>
                <Carousel slides={slideFactory} data-sal="slide-up" />
              </StyledCarouselWrapper>
            </StyledContainer>
          </StyledSection>
        );
      }}
    />
  );
};

export default CarouselSection;
