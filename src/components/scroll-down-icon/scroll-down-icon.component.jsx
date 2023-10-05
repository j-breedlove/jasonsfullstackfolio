import React from "react";
import {
  HomeScroll,
  HomeScrollButton,
  StyledMouseIcon,
} from "./scroll-down-icon.styles";

function ScrollDownIcon() {
  return (
    <HomeScroll>
      <HomeScrollButton href="#about">
        <StyledMouseIcon />
      </HomeScrollButton>
    </HomeScroll>
  );
}

export default ScrollDownIcon;
