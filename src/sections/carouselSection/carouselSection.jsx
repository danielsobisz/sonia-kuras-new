import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ModalVideo from 'react-modal-video';
import Img from 'gatsby-image';
// import Plyr from 'react-plyr';
import PlaySvg from 'assets/play.svg';

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
  StyledVideo,
  SvgWrapper,
} from './carouselSection.styles';

const CarouselSection = () => {
  const [isOpen, setIsOpen] = useState(false);
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
                {item.video && (
                  <SvgWrapper onClick={() => setIsOpen(true)}>
                    <PlaySvg />
                  </SvgWrapper>
                )}
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
            {isOpen && typeof window !== 'undefined' && (
              <StyledVideo>
                <ModalVideo
                  channel="youtube"
                  isOpen={isOpen}
                  videoId="PvxN-vUFRzM"
                  onClose={() => setIsOpen(false)}
                  autoplay
                />
              </StyledVideo>
            )}
          </StyledSection>
        );
      }}
    />
  );
};

export default CarouselSection;
