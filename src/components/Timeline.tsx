import React from "react";
import styled from "styled-components";
import configData from "../common/config.json";

const Container = styled.div`
  background-color: ${configData.THEME_COLORS.PINK};
`;

export default function Timeline() {
  return <Container className="timeline section">Timeline</Container>;
}
