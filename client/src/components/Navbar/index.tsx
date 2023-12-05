import React from "react";
import { NavContainer, NavLogo, NavLinks, LinkContainer} from "./style";
import { LogoCITi } from "assets";

const Navbar: React.FC = () => {
  return(
  <NavContainer>
    <NavLogo>
    <img src={LogoCITi.src} alt="Logo CITi" /></NavLogo>
    <NavLinks>
      <LinkContainer><a href="/">Home</a></LinkContainer>
      <LinkContainer><a href="/">Sobre nós</a></LinkContainer>
      <LinkContainer><a href="/">Projetos</a></LinkContainer>
      <LinkContainer><a href="/">Contato</a></LinkContainer>
    </NavLinks>
  </NavContainer>
  );
}

export default Navbar;