import React, { useEffect, useState } from "react";
import { Container, Typewriter } from "./home.styles"; // Import your styled components
import HeaderBlock from "../../components/header-block/header-block.component";

function Home() {
  const wordsList = [
    "Jason Breedlove",
    "Combat Soldier",
    "Full-Stack Developer",
    "Designer",
    "Creator",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (currentCharIndex < wordsList[currentWordIndex].length) {
      const timeoutId = setTimeout(() => {
        setText(
          (prevText) =>
            prevText + wordsList[currentWordIndex][currentCharIndex],
        );
        setCurrentCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentWordIndex(
          (prevWordIndex) => (prevWordIndex + 1) % wordsList.length,
        );
        setCurrentCharIndex(0);
        setText("");
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentWordIndex, currentCharIndex, text]);

  return (
    <div className="App">
      <Container>
        <HeaderBlock />
        <Typewriter>{text}</Typewriter>
        <h3 id={"home__subtitle"}>
          A Full-Stack Developer enthusiastic about technology and software
          development. Once a military Sergeant who fought with valor during the
          Iraq war, now a computer programmer.{" "}
        </h3>
      </Container>
    </div>
  );
}
export default Home;
