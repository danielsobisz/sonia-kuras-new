import React from 'react';
import dayjs from 'dayjs';

import Button from 'components/button';

import mapMonth from 'utils/monthMaped';

import {
  StyledEvent,
  StyledDate,
  StyledInfo,
  StyledGeneral,
  StyledTitle,
} from './event.styles';

const Event = ({ name, id, city, place, time }) => {
  const eventDate = dayjs(time);
  const date = eventDate.date();
  const month = mapMonth(eventDate.month());
  const hour = eventDate.format('HH:mm');

  return (
    <StyledEvent>
      <StyledDate>
        {time && (
          <>
            <span>{date}</span>
            <span>{month}</span>
          </>
        )}
      </StyledDate>

      <StyledGeneral>
        {name && <StyledTitle title={name} isSmaller />}

        <StyledInfo>
          {city && <p>{city}</p>}

          {time && <p>{hour}</p>}

          {place && <p>{place}</p>}
        </StyledInfo>

        <Button href={`https://www.facebook.com/${id}`}>Dołącz</Button>
      </StyledGeneral>
    </StyledEvent>
  );
};

export default Event;
