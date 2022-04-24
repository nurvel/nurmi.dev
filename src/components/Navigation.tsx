import React from "react";
import styled from "styled-components";
import configData from "../common/config.json";

const Container = styled.div`
  background-color: ${configData.THEME_COLORS.DARK_BLUE};
`;

export default function Navigation() {
  return <Container className="navigation">Main</Container>;
}
