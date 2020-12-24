import React from "react";

import devImg from "../../assets/figura-dev.png";
import { Container, Content, Left, Right } from "./styles";

function Home() {
  return (
    <Container id="home">
      <Content>
        <Left>
          <h2>Hi, my name is Davi</h2>
          <p>
            I’m a full stack developer and lover of user interface design.
            Currentily I work with the tecnologies React.js, Node.js, React
            Native and Figma.{" "}
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
