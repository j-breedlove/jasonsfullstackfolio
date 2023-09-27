import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">Jason Breedlove</LogoContainer>
        <NavLinks>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/projects"}>Projects</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/skills"}>Skills</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
