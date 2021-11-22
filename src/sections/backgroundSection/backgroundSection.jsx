import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Title from "components/title";
import Carousel from "components/carousel";
import Button from "components/button";

import {
  StyledBackgroundSection,
  StyledTextContent,
  StyledTitleWrapper,
  StyledButtonWrapper,
} from "./backgroundSection.styles";

const BackgroundSection = ({ title, content, img }) => {
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
        return (
          <StyledBackgroundSection img={bgImg[0].node.fluid.src}>
            <StyledTextContent>
              <StyledTitleWrapper data-sal="slide-up" data-sal-duration="500">
                <Title title={title} isWhite asMain />
              </StyledTitleWrapper>

              <p data-sal="slide-up" data-sal-duration="500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quis aut obcaecati commodi at amet veritatis ipsam cupiditate
                voluptas voluptates fugit, assumenda blanditiis laboriosam vitae
                quidem. Qui voluptate, nulla quos esse assumenda accusantium
                ducimus. Aliquam alias amet nostrum facere fuga laboriosam cum,
                quae ad ipsa doloribus consequatur omnis modi perferendis iure
                tenetur dolores, voluptatum eveniet! Dolores earum praesentium
                reiciendis aliquam nostrum! Consequuntur provident, doloremque
                ea doloribus in exercitationem asperiores minima quia enim.
                Iure, corporis sit explicabo ratione odit itaque fugit id
                tenetur recusandae quisquam nulla provident eius, fugiat tempora
                enim quo quas. Beatae neque, nisi iure officia atque quisquam
                distinctio!
              </p>
            </StyledTextContent>

            <StyledButtonWrapper data-sal="slide-up" data-sal-duration="500">
              <Button>Poznaj ofertę</Button>
            </StyledButtonWrapper>
          </StyledBackgroundSection>
        );
      }}
    />
  );
};

export default BackgroundSection;
