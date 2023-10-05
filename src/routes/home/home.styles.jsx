import styled, { keyframes } from "styled-components";
import "../../assets/css/style.css";

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  text-align: center;
`;

export const Typewriter = styled.span`
  font-family: "Courier Prime", monospace;
  font-size: 40px;
  min-height: 1.5em; /* Set a minimum height */
  border-right: 0.15em solid orange; /* Cursor effect */
  animation: ${blinkCaret} 1s step-end infinite; /* Blinking caret animation */
`;

export const Block = styled.div`
  margin-bottom: ${(props) => props.spacing || "20px"};
`;

export const Heading = styled.div`
  //font-family: "Courier Prime", monospace;
  font-size: 36px;
`;

export const SubHeading = styled.h3`
  text-align: center;
  font-size: var(--h3-font-size);
  color: var(--text-color);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-1);
  padding: 1rem 1.5rem 1rem 1.5rem;
  width: 50%;
`;
