import React from "react";
import configData from "../common/config.json";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

// import _video from "../assets/img/bg-video.mp4";
// import _video_mobile_mp4 from "../assets/img/bg-video-mobile.mp4";
// import _video_mobile_ogm from "../assets/img/bg-video-mobile.ogm";
import _video_mobile_webm from "../assets/img/bg-video-mobile.webm";

const Container = styled.div`
  background-color: ${configData.THEME_COLORS.DARK};

  .hero {
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 650px;
    min-width: 300px;
  }

  .btn {
    background-color: #ffffff;
    padding: 20px 20px 20px 20px;
    margin-top: 20px;
    box-shadow: 8px 8px 0px 0px hsl(9000 50% 20%);
    width: 150px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;

    @media only screen and (max-width: 700px) {
      padding: 10px 10px 10px 10px;
      font-size: 0.8rem;
      width: 100px;
      box-shadow: 5px 5px 0px 0px hsl(9000 50% 20%);
    }
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
        {/* <source src={_video_mobile_mp4} type="video/mp4" /> */}
        {/* <source src={_video_mobile_ogm} type="video/ogg" /> */}
        <source src={_video_mobile_webm} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="hero">
        <h1>I develop web services users love returning to.</h1>
        {/* <div className="btn"> */}
          <AnchorLink className="btn" href="#about">READ MORE</AnchorLink>
        {/* </div> */}
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
