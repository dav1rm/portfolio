import React from "react";

import logo from "../../assets/logo.png";
import { Container, Content, Left, Right } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <Left href="/">
          <img src={logo} alt="Davi Rodrigues" />
        </Left>
        <Right>
          <a href="#about">Sobre</a>
          <a>Skills</a>
          <a>Projetos</a>
        </Right>
      </Content>
    </Container>
  );
}

export default Header;
