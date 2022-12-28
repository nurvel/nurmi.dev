import React from "react";
import configData from "../common/config.json";
import styled from "styled-components";

import _video_mobile_webm from "../assets/img/bg-video-mobile.webm";
import Button from "../components/Button";

const Container = styled.div`
  background-color: ${configData.THEME_COLORS.DARK_VIOLET};

  .hero {
    position: absolute;
    top: 20vh;
    max-width: 650px;
    min-width: 300px;
    text-align: center;
    margin-left: 50px;
    margin-right: 50px;
  }

  .btnContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function Main() {
  return (
    <Container className="section main">
      <video
        loop
        muted
        autoPlay
        playsInline
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
        <source src={_video_mobile_webm} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="hero">
        <h1>Let's develop web services users love returning to.</h1>
        <div className="btnContainer">
          <Button linkText={"READ MORE"} href={"#about"}></Button>
        </div>
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
