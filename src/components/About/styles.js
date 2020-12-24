import styled from "styled-components";

export const Container = styled.section`
  height: 698px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #212121;
`;

export const Content = styled.div`
  max-width: 1140px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Left = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;

  div.border {
    display: flex;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(90deg, #3bef2b 0%, #c6ff00 100%);

    img {
      background: #212121;
      padding: 10px;
      height: 270px;
      width: 270px;
      margin: 0 auto;
      border-radius: 50%;
    }
  }
`;

export const Links = styled.div`
  margin-top: 40px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    width: 50px;
    background: #1b1b1b;
    border-radius: 5px;
    color: #3bef2b;
    transition: color 0.6s;

    &:hover {
      color: #c6ff00;
    }
  }
`;

export const Right = styled.div`
  position: relative;
  margin-left: 170px;

  img.lights {
    height: 45px;
    position: absolute;
    top: -30px;
    left: -60px;
  }

  p {
    font-size: 22px;
  }
`;
