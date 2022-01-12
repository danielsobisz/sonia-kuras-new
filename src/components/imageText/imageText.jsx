import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Title from 'components/title';
import Video from 'components/video';

import { StyledContainer, StyledWrapper, StyledText, StyledImg } from './imageText.styles';

const ImageText = ({ pic, title, desc, video }) => {
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
        const image = data.allImageSharp.edges.filter((img) => img.node.fluid.originalName === pic);

        return (
          <StyledContainer data-sal="slide-up" data-sal-duration="500">
            <Title title={title} asMain />

            <StyledWrapper>
              <StyledText>
                {desc?.map((item) => (
                  <p>{item.text}</p>
                ))}
              </StyledText>

              <StyledImg>
                {video ? (
                  <Video videoTitle={title} videoSrcURL={video} />
                ) : (
                  <Img fluid={image[0].node.fluid} />
                )}
              </StyledImg>
            </StyledWrapper>
          </StyledContainer>
        );
      }}
    />
  );
};

export default ImageText;
