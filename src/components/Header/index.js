import React from "react";

import logo from "../../assets/logo.png";
import { Container, Content, Left, Right } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <Left>
          <img src={logo} alt="Davi Rodrigues" />
        </Left>
        <Right>
          <a href="#">Sobre</a>
          <a href="#">Skills</a>
          <a href="#">Projetos</a>
        </Right>
      </Content>
    </Container>
  );
}

export default Header;
