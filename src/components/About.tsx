import React from "react";
import styled from "styled-components";
import configData from "../common/config.json";

const Container = styled.div`
  background-color: ${configData.THEME_COLORS.DARK};

  min-height: 100vh;
  min-width: 100vw;

  .introduction {
    position: relative;
    margin-top: 400px;
    margin-left: 150px;
    margin-right: 80px;
    max-width: 900px;

    // top: 0%;
    left: 30%;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 700px) {
      margin-top: 300px;
      margin-left: 60px;
      margin-right: 60px;
    }
  }

  p {
    line-height: 1.4;
  }
`;

// Welcome back
export default function About() {
  return (
    <Container className="about section" id="about">
      <div className="introduction">
        <h2>Nice to meet you.</h2>
        <p>
          My name is Veli-Pekka Nurmi. I'm a software developer with a
          performance marketing background. I use my skill set to create and
          optimize engaging web services.
          <br />
          <br />
          During the day I work as the Head of R&D in SaaShop. In my free time,
          I like to try out new technologies, hike with my dog, do jogging and
          play console games. I live in Helsinki, Finland.
          <br />
          <br />
          <br />
          <a
            href="https://www.linkedin.com/in/veli-pekkanurmi"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          &nbsp; | &nbsp;
          <a href="https://github.com/nurvel" target="_blank" rel="noreferrer">
            GitHub
          </a>
          &nbsp; | &nbsp;
          <a href="mailto:nurmi.vp@gmail.com" target="_blank" rel="noreferrer">
            Email
          </a>
        </p>
      </div>
    </Container>
  );
}
