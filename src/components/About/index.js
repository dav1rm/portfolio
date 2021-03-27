import React from "react";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io";

import profile from "../../assets/profile.png";
import icons from "../../assets/icons.png";
import { Container, Header, Content, Left, Right, Links } from "./styles";

function About() {
  return (
    <Container id="about">
      <Header>
        <h4>Sobre</h4>
      </Header>
      <Content>
        <Left>
          <div className="border">
            <img src={profile} alt="Davi" />
          </div>
          <Links>
            <a href="https://github.com/davir8" target="_blank">
              <IoLogoGithub size={46} />
            </a>
            <a
              href="https://www.linkedin.com/in/davi-rodrigues-b98486177/"
              target="_blank"
            >
              <IoLogoLinkedin size={50} />
            </a>
            <a href="https://www.instagram.com/davirm_" target="_blank">
              <IoLogoInstagram size={50} />
            </a>
          </Links>
        </Left>
        <Right>
          <img className="lights" src={icons} alt="Lights" />
          <p>
            Sou formado no curso Técnico em Informática pelo IFRN e atualmente estou
            concluindo a graduação em Tecnologia da Informação pela UFRN.
          </p>
        </Right>
      </Content>
    </Container>
  );
}

export default About;
