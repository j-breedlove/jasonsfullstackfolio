import React, { useEffect, useState, Fragment } from "react";
import SocialIcons from "../../components/social-media/social-media.component";
import ScrollDownIcon from "../../components/scroll-down-icon/scroll-down-icon.component";
import "../../assets/css/styles.css";

function Home() {
  const wordsList = [
    "Jason Breedlove",
    "Combat Soldier",
    "Computer Programmer",
    "Full-Stack Developer",
    "Designer, Creator",
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
    <Fragment>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__data">
              <small className="home__welcome s-color">
                {" "}
                Welcome to my Portfolio Website!{" "}
              </small>
              <h1 className="home__title"> Hey I'm </h1>
              <div id="typewriter">{text}</div>
              <h3 className="home__subtitle" id="home-bio">
                A Full-Stack Developer enthusiastic about technology and
                software development. Once a military Sergeant who fought with
                valor during the Iraq war, now a computer programmer.
              </h3>
            </div>
            <div className="home__social">
              <SocialIcons />
            </div>
          </div>
        </div>
        <ScrollDownIcon />
      </section>
    </Fragment>
  );
}
export default Home;
