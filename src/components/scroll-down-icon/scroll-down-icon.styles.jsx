import React from "react";
import styled, { keyframes } from "styled-components";
import "../../assets/css/styles.css";
import { ReactComponent as MouseIconSVG } from "../../assets/images/mouse.svg";

export const scrollDownAnimation = keyframes`
  0% {
    margin-top: 14px;
    opacity: 0;
  }
  15% {
    margin-top: 14px;
    opacity: 1;
  }
  30% {
    margin-top: 14px;
    opacity: 1;
  }
  50% {
    margin-top: 30px;
    opacity: 1;
  }
  100% {
    margin-top: 30px;
    opacity: 0;
  }
`;

export const HomeScroll = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0;
  animation: ${scrollDownAnimation} 3s infinite;
`;

export const HomeScrollButton = styled.a`
  color: var(--first-color);
  transition: 0.5s;

  &:hover {
    color: var(--first-color-alt);
    transform: translateY(0.25rem);
  }
`;

export const StyledMouseIcon = styled(MouseIconSVG)`
  font-size: var(--big-font-size);
  margin-top: var(--mb-3);
`;
