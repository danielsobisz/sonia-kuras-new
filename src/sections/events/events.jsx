import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Dayz from "dayz";
import moment from "./moment";

import Calendar from "components/calendar";

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
                    description
                    name
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const facebookData = data.allFacebook.edges[0].node.events.data.map(
          (item) => ({
            content: item.name,
            range: moment.range(moment("2021-11-27"), moment("2021-11-27")),
          })
        );
        console.log(facebookData);

        const events = new Dayz.EventsCollection(facebookData);
        console.log(events);
        return <Calendar events={events} />;
      }}
    />
  );
};

export default Events;
