import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { StyledLogo } from "./logo.styles";

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => (
      <StyledLogo>
        <div className="titles">
          <h2>Sonia Kuraś</h2>
          <h2>Psychologia i psychoterapia</h2>
        </div>

        <div className="image">
          <Img fixed={data.file.childImageSharp.fixed} />
        </div>
      </StyledLogo>
    )}
  />
);

export default Logo;
