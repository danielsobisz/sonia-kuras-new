import React from "react";
import { StaticQuery, graphql } from "gatsby";

import SectionWrapper from "components/sectionWrapper";
import Title from "components/title";

import Event from "./components/event";

import { StyledEvents } from "./events.styles";

const Events = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFacebook {
            edges {
              node {
                name
                events {
                  data {
                    name
                    id
                    place {
                      location {
                        city
                      }
                      name
                    }
                    start_time
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const eventData = data.allFacebook.edges[0].node.events.data;

        const facebookData = eventData?.map((event) => ({
          id: event.id,
          name: event.name,
          city: event.place.location.city,
          place: event.place.name,
          time: event.start_time,
        }));

        const facebookDataMaped = facebookData?.map((event) => (
          <Event {...event} />
        ));
        console.log(data);

        return (
          <SectionWrapper>
            <Title title="Aktualności" asMain />
            <StyledEvents>{facebookDataMaped}</StyledEvents>
          </SectionWrapper>
        );
      }}
    />
  );
};

export default Events;
