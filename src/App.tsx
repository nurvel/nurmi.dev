import "./styles.css";
import React from "react";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
import GlobalStyle from "./common/globalStyles";
import styled from "styled-components";

import Main from "./pages/Main";
import About from "./pages/About";
import Header from "./components/Header";

const Container = styled.div``;

export default function App() {
  const scrollRef = useRef(null);
  useScrollSnap({
    ref: scrollRef,
    duration: 10,
    // delay: 0,
  });

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <section ref={scrollRef}>
        <Main />
        <About />
      </section>
    </Container>
  );
}
