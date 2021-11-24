import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import LogoIcon from 'assets/logo.svg';

import { StyledLogo } from "./logo.styles";

const Logo = ({ isActive }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 125) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <StyledLogo isActive={isActive}>

        <div className="image">
          {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
          <LogoIcon/>
        </div>

        <div className="titles">
          <h2>Sonia Kuraś</h2>
          <h2>Psychologia i psychoterapia</h2>
        </div>
      </StyledLogo>
    )}
  />
);

export default Logo;
