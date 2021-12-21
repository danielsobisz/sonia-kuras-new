import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Title from "components/title";
import Video from "components/video";

import {
  StyledContainer,
  StyledWrapper,
  StyledText,
  StyledImg,
} from "./imageText.styles";

const ImageText = (props) => {
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
        const image = data.allImageSharp.edges.filter(
          (image) => image.node.fluid.originalName === props.pic
        );

        return (
          <StyledContainer data-sal="slide-up" data-sal-duration="500">
            <Title title={props.title} asMain />

            <StyledWrapper>
              <StyledText>
                {props.desc?.map((item) => (
                  <p>{item.text}</p>
                ))}
              </StyledText>

              <StyledImg>
                {props.video ? (
                  <Video videoTitle={props.title} videoSrcURL={props.video} />
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
