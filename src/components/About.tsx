import React from "react";
import styled from "styled-components";
import configData from "../common/config.json";
import ProfilePic from "../assets/img/veli-pekka-nurmi-profile.png";

const Container = styled.div`
  background-color: ${configData.THEME_COLORS.DARK};
`;

const GridContainer = styled.div`
  position: relative;
  margin-top: 100px;

  display: grid;
  grid-template-columns: repeat(1, 2fr 1fr);
  max-width: 1300px;
  gap: 10px;
  padding: 20px;

  @media (max-width: ${configData.mobileThreshold}) {
    margin-top: 50px;
    grid-template-columns: minmax(300px, 1fr);
    .gridItem:nth-of-type(2) {
      order: -1;
    }
  }
`;

const AboutTextContainer = styled.div`
  p {
    line-height: 1.4;
  }
`;

const ProfilePictureContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${configData.mobileThreshold}) {
    img {
      width: auto;
      height: 250px;
    }
  }
`;

// Welcome back
export default function About() {
  return (
    <Container className="about section" id="about">
      <GridContainer>
        <AboutTextContainer className="gridItem">
          <h2>Nice to meet you.</h2>
          <p>
            My name is Veli-Pekka Nurmi. I'm a software developer with a
            performance marketing background. I use my skill set to create and
            optimize engaging web services.
            <br />
            <br />
            During the day I work as the Head of R&D in SaaShop. In my free
            time, I like to try out new technologies, hike with my spouse and
            dog, do jogging and play console games. I live in Helsinki, Finland.
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
            <a
              href="https://github.com/nurvel"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            &nbsp; | &nbsp;
            <a
              href="mailto:nurmi.vp@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </p>
        </AboutTextContainer>
        <ProfilePictureContainer className="gridItem">
          <img src={ProfilePic} />{" "}
        </ProfilePictureContainer>
      </GridContainer>
    </Container>
  );
}
