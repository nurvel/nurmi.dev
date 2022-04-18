import React from "react";
import configData from "../common/config.json";
import styled from "styled-components";

import _1 from "../assets/img/bg-lights.jpg";
import _2 from "../assets/img/bg-room.jpeg";
import _3 from "../assets/img/bg-sea.jpg";
import _4 from "../assets/img/bg-wall.jpg";
import _5 from "../assets/img/bg-leafs.jpeg";

const Container = styled.div`
background-color: ${configData.THEME_COLORS.CYAN};

  h1 {
    /* color: #FFFFFF;
    font-family: 'Comforter Brush', cursive;
    font-size: 7rem;
    opacity: 0.7;
    transform: rotate(-10deg); */
  }

  background-image: url(${_2});
  background-size: cover;
  background-repeat: no-repeat;
  // position: absolute; // if set, flows over the next content
  min-height: 100vh;
  min-width: 100vw;
  background-position: center; 
`;

// Technology, Marketing and Analytics

export default function Main() {
  return (
    <Container className="section main">
      <h1>Veli-Pekka Nurmi</h1>
      <p>
        I build and optimize web services where users love to return.
      </p>
    </Container>
  );
}

// I'm a software developer with a performance marketing background.
// I'm based in Helsinki, Finland.
