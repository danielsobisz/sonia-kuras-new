import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps/api';

import { StyledMap } from './map.styles';

const GoogleMap = () => {
  return (
    <StyledMap
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.6635322201523!2d18.601799315755024!3d54.38059410443931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd74954ac4ff67%3A0x451871e7bbcf7416!2sKlonowa%201%2C%2080-264%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1639598542384!5m2!1spl!2spl"
      style={{ border: 0 }}
      allowFullscreen=""
      loading="lazy"
    />
  );
};

export default GoogleMap;
