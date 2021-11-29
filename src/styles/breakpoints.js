const size = {
  s: "670px",
  m: "978px",
  lg: "1200px",
};

const device = {
  s: `(max-width: ${size.s})`,
  m: `(max-width: ${size.m})`,
  lg: `(max-width: ${size.lg})`,
};

const breakpoints = { size, device };

export default breakpoints;
