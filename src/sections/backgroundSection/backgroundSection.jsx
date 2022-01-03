import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Title from 'components/title';
import Carousel from 'components/carousel';
import Button from 'components/button';

import {
  StyledBackgroundSection,
  StyledTextContent,
  StyledTitleWrapper,
  StyledButtonWrapper,
  StyledSlide,
  StyledText,
  StyledBackgroundBlur,
} from './backgroundSection.styles';

const BackgroundSection = ({ id, title, text, img, onClick, color }) => {
  // const slideFactory =
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 1920) {
                  originalName
                  src
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const bgImg = data.allImageSharp.edges.filter(
          (image) => image.node.fluid.originalName === img
        );

        const slideFactory = text
          ? text.map((item) => (
              <StyledSlide>
                <StyledText>{item.text}</StyledText>
              </StyledSlide>
            ))
          : null;

        return (
          <StyledBackgroundSection
            img={img ? bgImg[0].node.fluid.src : null}
            color={color}
            id={id}
          >
            {img ? (
              <StyledBackgroundBlur
                img={img ? bgImg[0].node.fluid.src : null}
              />
            ) : null}

            <StyledTextContent>
              <StyledTitleWrapper>
                <Title title={title} isWhite asMain />
              </StyledTitleWrapper>
              {slideFactory ? (
                <Carousel
                  slides={slideFactory}
                  data-sal="slide-up"
                  data-sal-duration="500"
                />
              ) : (
                <StyledText>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam laboriosam velit alias repudiandae eveniet voluptates
                  harum consectetur nesciunt numquam? Dignissimos quos ipsam
                  libero reprehenderit vitae id, earum aut cumque perspiciatis
                  iure, quae non veniam odio facilis molestiae dolore accusamus
                  placeat sint. Ullam qui, blanditiis ipsam enim dicta
                  doloremque commodi nemo error laboriosam. Blanditiis quia
                  natus facere dolore beatae totam esse laboriosam placeat eum
                  nesciunt iure ipsum obcaecati, reprehenderit corporis
                  exercitationem laborum quos aperiam architecto nisi saepe aut
                  quis enim minima. Voluptate reiciendis autem nam ex,
                  blanditiis ad repellat quae sapiente. Fuga tempora deserunt
                  officia fugiat repellendus eum corporis explicabo iusto?
                </StyledText>
              )}
            </StyledTextContent>

            {onClick ? (
              <StyledButtonWrapper>
                <Button onClick={onClick}>Poznaj ofertę</Button>
              </StyledButtonWrapper>
            ) : null}
          </StyledBackgroundSection>
        );
      }}
    />
  );
};

export default BackgroundSection;
