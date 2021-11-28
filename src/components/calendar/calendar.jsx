import React from "react";
import Dayz from "dayz";
// could also import the sass if you have a loader at dayz/dayz.scss
import "dayz/dist/dayz.css";
import moment from "moment";

const Calendar = ({ events }) => {
  const date = moment("2021-11-27");

  return <Dayz display="month" date={date} events={events} />;
};

export default Calendar;
