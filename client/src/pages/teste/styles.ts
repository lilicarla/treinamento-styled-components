import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  overflow-x: hidden;
`;

export const HomeContent = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 5vw;
  margin-top: 10vh;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  row-gap: 4rem;
  margin-top: 4rem;
`;