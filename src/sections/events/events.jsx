import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import SectionWrapper from 'components/sectionWrapper';
import Title from 'components/title';
import Button from 'components/button';

import Event from './components/event';

import { StyledEvents, StyledInfo } from './events.styles';

const Events = () => {
  const [data, setData] = useState([]);

  const today = dayjs().valueOf();

  const facebookData = data?.map((event) => ({
    id: event.id,
    name: event.name,
    city: event.place && event.place.location && event.place.location.city,
    place: event.place.name,
    time: event.start_time,
  }));

  const facebookDataMaped =
    (facebookData &&
      facebookData.length > 0 &&
      facebookData?.map((event) => <Event {...event} />)) ||
    [];

  useEffect(() => {
    fetch(`https://graph.facebook.com/v12.0/me/events?access_token=${process.env.GATSBY_FB_TOKEN}`)
      .then((response) => response.json())
      .then((resultData) => {
        const filteredData = resultData.data?.filter(
          (item) => dayjs(item.start_time).valueOf() > today
        );

        setData(filteredData);
      });
  }, []);

  return (
    <SectionWrapper isWhite id="events">
      <Title title="Aktualności" asMain />
      {facebookDataMaped && facebookDataMaped.length > 0 ? (
        <StyledEvents>{facebookDataMaped[(0, 1)]}</StyledEvents>
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
