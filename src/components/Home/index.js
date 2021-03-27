import React from "react";

import devImg from "../../assets/figura-dev.png";
import { Container, Content, Left, Right } from "./styles";

function Home() {
  return (
    <Container id="home">
      <Content>
        <Left>
          <h2>Olá, meu nome é Davi</h2>
          <p>
            Eu sou desenvolvedor full stack e gosto bastante de estudar sobre
            ui/ux design nas horas vagas. Atualmente trabalho com a stack{" "}
            <strong>react js</strong>, <strong>node js</strong> e{" "}
            <strong>react native</strong>. No entanto ja tive bastante
            experiência com <strong>laravel (php)</strong>.{"\n"} Para os
            estudos sobre design eu gosto de utilizar a ferramenta {" "}
            <strong>figma</strong>.
          </p>
        </Left>
        <Right>
          <img src={devImg} alt="Dev Figure" />
        </Right>
      </Content>
    </Container>
  );
}

export default Home;
