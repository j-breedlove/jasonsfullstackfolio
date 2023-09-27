import React, { useEffect, useState } from "react";
import { Container, Heading, Typewriter, Block } from "./home.styles"; // Import your styled components

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
        <Block>
          <Heading>Welcome to my portfolio website.</Heading>
        </Block>
        <Block spacing="10px">
          <Heading>I am...</Heading>
        </Block>
        <Block>
          <Typewriter>{text}</Typewriter>
        </Block>
      </Container>
    </div>
  );
}
export default Home;
