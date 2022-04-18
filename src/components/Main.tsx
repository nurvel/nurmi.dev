import React from "react";
import configData from "../common/config.json";
import styled from "styled-components";

import _video from "../assets/img/bg-video.mp4";

const Container = styled.div`
  background-color: ${configData.THEME_COLORS.DARK};

  .hero {
    text-align: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 650px;
    min-width: 300px;
  }

  // background-image: url();
  /* background-size: cover;
  background-repeat: no-repeat; */
  // position: absolute; // if set, flows over the next content
  min-height: 100vh;
  min-width: 100vw;
  // background-position: center;
`;

export default function Main() {
  return (
    <Container className="section main">
      <video
        loop
        autoPlay
        muted
        style={{
          position: "absolute",
          width: "100%",
          top: "50%",
          left: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "0",
        }}
      >
        <source src={_video} type="video/mp4" />
        <source src={_video} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div className="hero">
        <h1>I develop web services users love to return to.</h1>
      </div>
    </Container>
  );
}

// Technology, Marketing and Analytics

// MAIN
// ABOUT
// WORK
// SKILLS
// CONTACT
