import React from "react";
import dayjs from "dayjs";

import Button from "components/button";
import Title from "components/title";

import mapMonth from "utils/monthMaped";

import {
  StyledEvent,
  StyledDate,
  StyledInfo,
  StyledGeneral,
} from "./event.styles";

const Event = ({ name, id, city, place, time }) => {
  const eventDate = dayjs(time);
  const date = eventDate.date();
  const month = mapMonth(eventDate.month());
  const hour = eventDate.format("HH:mm");

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
        {name && <Title title={name} />}

        <StyledInfo>
          {city && <p>{city}</p>}

          {time && <p>{hour}</p>}

          {place && <p>{place}</p>}
        </StyledInfo>

        <Button>
          <a href={`https://www.facebook.com/${id}`}>Dołącz</a>
        </Button>
      </StyledGeneral>
    </StyledEvent>
  );
};

export default Event;
