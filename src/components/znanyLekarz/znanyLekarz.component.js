/* eslint-disable */
import React from 'react';

import { IsBellowTablet, IsAboveTablet } from 'styles/matchMedia';

import { ZLCode, ZLSlider, ZLTab } from './znanyLekarz.styles';

const ZLWidget = () => {
  return (
    <>
      <IsBellowTablet>
        <ZLCode>
          <a
            id="zl-url"
            class="zl-url"
            href="https://www.znanylekarz.pl/sonia-kuras/psycholog-psychoterapeuta/gdansk"
            rel="nofollow"
            data-zlw-doctor="sonia-kuras"
            data-zlw-type="big"
            data-zlw-opinion="false"
            data-zlw-hide-branding="true"
          >
            Sonia Kuraś - ZnanyLekarz.pl
          </a>
        </ZLCode>
      </IsBellowTablet>
      <IsAboveTablet>
        <ZLSlider>
          <ZLTab />

          <ZLCode>
            <a
              id="zl-url"
              class="zl-url"
              href="https://www.znanylekarz.pl/sonia-kuras/psycholog-psychoterapeuta/gdansk"
              rel="nofollow"
              data-zlw-doctor="sonia-kuras"
              data-zlw-type="big"
              data-zlw-opinion="false"
              data-zlw-hide-branding="true"
            >
              Sonia Kuraś - ZnanyLekarz.pl
            </a>
          </ZLCode>
        </ZLSlider>
      </IsAboveTablet>
    </>
  );
};

export default ZLWidget;

typeof document !== 'undefined' &&
  !(function ($_x, _s, id) {
    var js,
      fjs = $_x.getElementsByTagName(_s)[0];
    if (!$_x.getElementById(id)) {
      js = $_x.createElement(_s);
      js.id = id;
      js.src = '//platform.docplanner.com/js/widget.js';
      fjs.parentNode.insertBefore(js, fjs);
    }
  })(document, 'script', 'zl-widget-s');
