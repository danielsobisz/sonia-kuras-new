const mapMonth = (month) => {
  let monthName;

  switch (month) {
    case 0:
      monthName = "sty";
      break;
    case 1:
      monthName = "lut";
      break;
    case 2:
      monthName = "mar";
      break;
    case 3:
      monthName = "kwi";
      break;
    case 4:
      monthName = "maj";
      break;
    case 5:
      monthName = "cze";
      break;
    case 6:
      monthName = "lip";
      break;
    case 7:
      monthName = "sie";
      break;
    case 8:
      monthName = "wrz";
      break;
    case 9:
      monthName = "paź";
      break;
    case 10:
      monthName = "lis";
      break;
    case 11:
      monthName = "gru";
      break;
    default:
      monthName = "";
  }
  return monthName;
};

export default mapMonth;
