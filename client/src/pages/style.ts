import exp from "constants";
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

export const TitleContainer = styled.div`
  width: fit-content;
`;

export const Title = styled.h1`
  font-family: 'Barlow', sans-serif;
  padding-left: 5px;
  padding-right: 5px;
`;

export const TitleUnderline = styled.div`
  height: 2px;
  margin-top: 10px;
  background-color: #969dff;
`;