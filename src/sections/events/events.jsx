import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";

import SectionWrapper from "components/sectionWrapper";
import Title from "components/title";
import Button from "components/button";

import Event from "./components/event";

import { StyledEvents, StyledInfo } from "./events.styles";

const Events = () => {
  const [data, setData] = useState([]);

  const facebookData = data?.map((event) => ({
    id: event.id,
    name: event.name,
    city: event.place.location.city,
    place: event.place.name,
    time: event.start_time,
  }));

  const facebookDataMaped = facebookData?.map((event) => <Event {...event} />);

  useEffect(() => {
    fetch(
      `https://graph.facebook.com/v12.0/me/events?access_token=${process.env.GATSBY_FB_TOKEN}`
    )
      .then((response) => response.json())
      .then((resultData) => {
        setData(resultData.data);
      });
  }, []);

  return (
    <SectionWrapper>
      <Title title="Aktualności" asMain />
      {facebookData !== "undefined" && facebookData.length > 0 ? (
        <StyledEvents>{facebookDataMaped}</StyledEvents>
      ) : (
        <StyledInfo>
          <p>Brak dostępnych wydarzeń</p>
          <Button>
            <a href="https://www.facebook.com/Sonia-Kura%C5%9B-psychologia-i-psychoterapia-476345809599003/events/?ref=page_internal">
              Sprawdź na facebooku
            </a>
          </Button>
        </StyledInfo>
      )}
    </SectionWrapper>
  );
};

export default Events;
