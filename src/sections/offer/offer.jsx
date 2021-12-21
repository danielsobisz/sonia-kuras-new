import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Title from "components/title";
import ImageText from "components/imageText";

import offerData from "data/offerData.json";

import { StyledBar, StyledOffer, StyledContainer } from "./offer.styles";

const Offer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          slides: allSlidesJson {
            edges {
              node {
                img
              }
            }
          }
          allImageContent: allImageSharp {
            edges {
              node {
                fluid(maxWidth: 300) {
                  originalName
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const slides = data.slides.edges.map((slide) => {
          const images = data.allImageContent.edges.find(
            (img) => img.node.fluid.originalName === slide.node.img
          );
          return images;
        });

        // const slidesMaped = slides.map((slide) => (
        //   <Img fluid={slide.node.fluid} />
        // ));

        const offerDataMaped = offerData?.map((offer) => (
          <StyledContainer>
            <ImageText {...offer} />
          </StyledContainer>
        ));

        return (
          <StyledOffer>
            {/* <Title title="Oferta" asMain /> */}

            {/* <StyledBar>{slidesMaped}</StyledBar> */}

            {offerDataMaped}
          </StyledOffer>
        );
      }}
    />
  );
};

export default Offer;
