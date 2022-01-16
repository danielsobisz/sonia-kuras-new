import React from 'react';
import { Helmet } from 'react-helmet';

import { IsBellowTablet, IsAboveTablet } from 'styles/matchMedia';

import { FaceCode, FaceSlider, FaceTab } from './fbWidget.styles';

const FbWidget = () => {
  return (
    <>
      <IsBellowTablet>
        <FaceCode>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/Sonia-Kura%C5%9B-psychologia-i-psychoterapia-476345809599003/"
            data-width="285"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          />
        </FaceCode>
      </IsBellowTablet>
      <IsAboveTablet>
        <FaceSlider>
          <FaceTab />

          <FaceCode>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/Sonia-Kura%C5%9B-psychologia-i-psychoterapia-476345809599003/"
              data-tabs=""
              data-width=""
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            />
          </FaceCode>
        </FaceSlider>
      </IsAboveTablet>

      <Helmet>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=2186738638294469&autoLogAppEvents=1"
        />
      </Helmet>
    </>
  );
};

export default FbWidget;
