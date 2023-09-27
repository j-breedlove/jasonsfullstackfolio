import React from "react";
import styled from "styled-components";
import "./header-block.styles"; // Import the CSS styles

const HeaderContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

function HeaderBlock() {
  return (
    <HeaderContainer>
      <h1>Welcome to my portfolio website.</h1>
      <h2>I am...</h2>
    </HeaderContainer>
  );
}

export default HeaderBlock;
