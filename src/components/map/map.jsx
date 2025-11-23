import React from 'react';

import { StyledMap } from './map.styles';

const GoogleMap = () => {
  return (
    <StyledMap
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.211479778407!2d18.561936477471924!3d54.40904197261653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd753311514b9d%3A0x9e47622b265acd8c!2zT2Jyb8WEY8OzdyBXZXN0ZXJwbGF0dGUgMzQvMiwgODAtMzE3IEdkYcWEc2s!5e1!3m2!1spl!2spl!4v1762454507645!5m2!1spl!2spl"
      style={{ border: 0 }}
      allowFullscreen=""
      loading="lazy"
    />
  );
};

export default GoogleMap;
