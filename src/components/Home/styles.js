import styled from "styled-components";

export const Container = styled.section`
  margin-top: 70px;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #1b1b1b 0%, #313131 100%);
`;

export const Content = styled.div`
  max-width: 1140px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  max-width: 600px;

  align-items: center;

  h2 {
    font-size: 24px;
    margin-bottom: 28px;
  }

  p {
    font-size: 18px;
  }

  p > strong {
    color: #3bef2b;
    font-weight: normal;
  }
`;

export const Right = styled.div`
  align-items: center;

  img {
    width: 405px;
  }
`;
