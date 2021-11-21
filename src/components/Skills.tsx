import React from "react";
import styled from "styled-components";
import configData from "../common/config.json";

const Container = styled.div`
  background-color: ${configData.THEME_COLORS.YELLOW};
`;

export default function Skills() {
  return (
    <Container className="skills section">
      <h2>Mostly work with</h2>

      <table>
        <tr>
          <td>Languages:</td>
          <td>JavaScript (React, Node), Java (Spring Boot), HTML, CSS</td>
        </tr>
        <tr>
          <td>Databases:</td>
          <td>PostgreSQL, MySQL, MongoDB</td>
        </tr>
        <tr>
          <td>Tools & Utils:</td>
          <td>Linux, Git, Docker, Maven, Webpack, Heroku</td>
        </tr>
      </table>
    </Container>
  );
}
