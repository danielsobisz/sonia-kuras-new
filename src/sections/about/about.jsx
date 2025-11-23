import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby-link';

import SectionWrapper from 'components/sectionWrapper/sectionWrapper';
import Title from 'components/title';

import { StyledAbout, StyledTextBox, StyledFlexItem, StyledButtonAbout } from './about.styles';
import SlideUp from '../../components/slideUp/slideUp';

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "about-pic.jpg" }) {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      `}
      render={(data) => {
        const image = getImage(data.file);

        return (
          <SectionWrapper>
            <StyledAbout id="about">
              <SlideUp>
                <StyledFlexItem>
                  <GatsbyImage image={image} />
                </StyledFlexItem>
              </SlideUp>

              <SlideUp>
                <StyledFlexItem>
                  <Title title="O byciu psycholożką i psychoterapeutką" />

                  <StyledTextBox>
                    <p>
                      Wierzę, że proces terapeutyczny to najlepsza forma poznania siebie i
                      bezpiecznej pracy nad zrozumieniem relacji, które budujemy z innymi ludźmi.
                      Jako psycholożka i psychoterapeutka w zgłębianiu rozumienia psychiki ludzkiej
                      kładę szczególną uwagę na rolę ciała i ruchu. Zarówno w kontakcie
                      indywidualnym, jak i grupowym korzystam z poznanych technik pracy
                      terapeutycznej i rosnącego doświadczenia. Z ogromną pasją odnoszę się do
                      swojego zawodu. Swoich pacjentów zawsze staram się obdarzać pełnym szacunkiem
                      oraz empatią, zapewniając im maksymalne wsparcie i pełną dyskrecję.
                    </p>
                  </StyledTextBox>

                  <StyledButtonAbout onClick={() => navigate('/about#quote')}>
                    Więcej o mnie
                  </StyledButtonAbout>
                </StyledFlexItem>
              </SlideUp>
            </StyledAbout>
          </SectionWrapper>
        );
      }}
    />
  );
};

export default About;
