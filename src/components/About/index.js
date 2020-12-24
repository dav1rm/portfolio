import React from "react";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io";

import profile from "../../assets/profile.png";
import icons from "../../assets/icons.png";
import { Container, Content, Left, Right, Links } from "./styles";

function About() {
  return (
    <Container>
      <Content>
        <Left>
          <div className="border">
            <img src={profile} alt="Davi" />
          </div>
          <Links>
            <a>
              <IoLogoGithub size={46} />
            </a>
            <a>
              <IoLogoLinkedin size={50} />
            </a>
            <a>
              <IoLogoInstagram size={50} />
            </a>
          </Links>
        </Left>
        <Right>
          <img className="lights" src={icons} alt="Lights" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
            sit suspendisse ullamcorper sit auctor sed. Ut amet turpis ultrices
            est nisl purus posuere dui aliquam. Convallis nisl viverra semper
            consectetur posuere sollicitudin arcu. Et sociis nulla ut ut amet
            mauris in. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ultricies sit suspendisse ullamcorper sit auctor sed. Ut amet turpis
            ultrices est nisl purus posuere dui aliquam.
          </p>
        </Right>
      </Content>
    </Container>
  );
}

export default About;
