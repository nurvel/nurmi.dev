import React from "react";
import configData from "../common/config.json";
import styled from "styled-components";

import _1 from "../assets/img/bg-lights.jpg";
import _2 from "../assets/img/bg-room.jpeg";
import _3 from "../assets/img/bg-sea.jpg";
import _4 from "../assets/img/bg-wall.jpg";

const Container = styled.div`
  background-color: ${configData.THEME_COLORS.CYAN};
  
  h1 {
    /* color: #FFFFFF;
    font-family: 'Comforter Brush', cursive;
    font-size: 7rem;
    opacity: 0.7;
    transform: rotate(-10deg); */
  }

  // background: linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url(${_4});
  background-image: url(${_2});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-position: center;
`;

// Technology, Marketing and Analytics

export default function Main() {
  return (
    <section>
      <Container className="section main">
        <h1>Veli-Pekka Nurmi</h1>
        <p>
          I'm a software developer with a performance marketing background. My
          passion is to build and optimize web services that provide value to
          users. I'm based in Helsinki, Finland.
        </p>
      </Container>
    </section>
  );
}
