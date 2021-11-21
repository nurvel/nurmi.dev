import React from "react";
import styled from "styled-components";
import configData from "../common/config.json";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${configData.THEME_COLORS.BLUE};
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

export default function Main() {
  return <Container className="main">Main</Container>;
}
