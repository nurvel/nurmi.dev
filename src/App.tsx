import "./styles.css";
import React from "react";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
import GlobalStyle from "./common/globalStyles";
import styled from "styled-components";

import Main from "./components/Main";
import About from "./components/About";
import Header from "./components/Header";
// import Timeline from "./components/Timeline";
// import Contact from "./components/Contact";

const Container = styled.div``;

export default function App() {
  const scrollRef = useRef(null);
  useScrollSnap({
    ref: scrollRef,
    duration: 10,
    delay: 0,
  });

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <section ref={scrollRef}>
        <Main />
        <About />
        {/* <Timeline />
        <Contact /> */}
      </section>
    </Container>
  );
}
