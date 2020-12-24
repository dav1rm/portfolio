import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 70px;
  background: #1b1b1b;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1140px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  align-items: center;

  img {
    height: 30px;
  }
`;

export const Right = styled.div`
  align-items: center;

  a {
    color: #f2f2f2;
    text-decoration: none;
    font-size: 18px;
    padding-bottom: 5px;

    &:hover {
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-bottom-color: #3bef2b;
    }
  }

  a + a {
    margin-left: 35px;
  }
`;
