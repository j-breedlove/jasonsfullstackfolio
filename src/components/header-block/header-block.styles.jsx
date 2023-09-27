import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  /* Styles from your .header CSS class */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 75vh;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  /* Styles from your .header h1 CSS rule */
  margin: 0;
  font-size: 3em;
`;

const Subtitle = styled.h2`
  /* Styles from your .header h2 CSS rule */
  margin: 0;
  font-size: 2em;
`;

function HeaderBlock() {
  return (
    <HeaderContainer>
      <Title>Welcome to my portfolio website.</Title>
      <Subtitle>I am...</Subtitle>
    </HeaderContainer>
  );
}

export default HeaderBlock;
