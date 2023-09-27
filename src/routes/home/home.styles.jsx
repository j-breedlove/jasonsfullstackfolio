import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 35vh;
  text-align: center;
`;

export const Block = styled.div`
  margin-bottom: ${(props) => props.spacing || "20px"};
`;

export const Heading = styled.div`
  //font-family: "Courier Prime", monospace;
  font-size: 36px;
`;

export const Typewriter = styled.span`
  font-family: "Courier Prime", monospace;
  font-size: 28px;
  border-right: 0.15em solid orange; /* Cursor effect */
`;
