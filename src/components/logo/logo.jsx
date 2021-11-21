import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { StyledLogo } from "./logo.styles";

const Logo = ({ isActive }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 125) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <StyledLogo isActive={isActive}>
        <div className="titles">
          <h2>Sonia Kuraś</h2>
          <h2>Psychologia i psychoterapia</h2>
        </div>

        <div className="image">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </StyledLogo>
    )}
  />
);

export default Logo;
