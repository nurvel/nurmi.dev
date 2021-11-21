import React from "react";
import styled from "styled-components";
import configData from "../common/config.json";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${configData.THEME_COLORS.YELLOW};
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

export default function Contact() {
  return <Container className="contact">Contact</Container>;
}
