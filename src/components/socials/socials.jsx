import React from 'react';

import Social from './components/social';

import { SocialsWrapper } from './socials.styles';

const Socials = ({ isActive }) => {
  return (
    <SocialsWrapper>
      <Social type="fb" isActive={isActive} />
      <Social type="znanyLekarz" isActive={isActive} />
    </SocialsWrapper>
  );
};

export default Socials;
