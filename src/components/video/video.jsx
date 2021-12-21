import React from "react";

import { StyledIframe, StyledVideo } from "./video.styles";

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <StyledVideo>
    <StyledIframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </StyledVideo>
);
export default Video;
