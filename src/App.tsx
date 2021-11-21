import "./styles.css";
import React from "react";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
import GlobalStyle from "./common/globalStyles";

import Main from "./components/Main";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

function Container() {
  const scrollRef = useRef(null);
  useScrollSnap({
    ref: scrollRef,
    duration: 10,
    delay: 0,
  });

  return (
    <div>
      <GlobalStyle />
      <section ref={scrollRef}>
        <Main />
        <Skills />
        <Timeline />
        <Contact />
      </section>
    </div>
  );
}
