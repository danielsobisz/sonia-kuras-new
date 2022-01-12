const size = {
  s: '670px',
  m: '978px',
  lg: '1200px',
  xl: '1440px',
};

const device = {
  s: `(max-width: ${size.s})`,
  m: `(max-width: ${size.m})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
};

const breakpoints = { size, device };

export default breakpoints;
