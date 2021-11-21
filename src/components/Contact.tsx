import React from "react";
import styled from "styled-components";
import configData from "../common/config.json";

const Container = styled.div`
  background-color: ${configData.THEME_COLORS.CREAM};
`;

export default function Contact() {
  return <Container className="contact section">Contact</Container>;
}
