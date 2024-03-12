// Title.styles.tsx

import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 10%;
  margin-left: 30%;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-left: 0%;
    padding: 0%;
    height: auto;
    // overflow-y: auto;
  }

  @media (max-width: 1200px) and (min-height: 1280px) {
    margin-left: 10%;
    padding: 0%;
  }

  @media (max-width: 1200px) {
    margin-left: 15%;
    padding: 10%;
  }
  @media (max-width: 1400px) {
    margin-left: 20%;
    padding: 10%;
  }
  @media (max-width: 570px) {
    margin-left: 0%;
    padding: 5%;
  }
  @media (max-width: 820px) {
    margin-top: 0%;
    margin-left: 10%;
    // height: auto;
  }
  @media (max-width: 500px) {
    margin-top: 0%;
    margin-left: 0%;
    background-color: #000;
    margin: 0 1%;
  }
  @media (min-width: 1024px) and (max-height: 600px) {
    padding: 10%;
    margin-left: 25%;
    height: 100vh;
  }

  @media (min-width: 1300px) {
    margin-left: 40%;
    height: 100vh;
  }
`;

export const ImageContainer = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  align-self: center;
  display: block;

  @media (min-width: 1200px) {
    margin-top: 0%;
    width: 80%;
  }

  @media (min-width: 1024px) and (max-height: 1366px) {
    margin-top: 0%;
    width: 80%;
  }
  @media (min-width: 1024px) and (max-height: 600px) {
    margin-top: 0%;
    display: none;
  }
  @media (max-width: 1024px) and (min-height: 590px) {
    // display: none;
    width: 70%;
    margin-left: 15%;
  }
  @media (min-width: 1040px) and (min-height: 590px) {
    display: none;
    width: 80%;
  }
`;

export const TitleContainer = styled.div`
  @media (max-width: 769px) {
    margin-left: 15%;
    margin-top: 20%;
    padding: 0%;
  }

  @media (max-width: 576px) {
    margin-left: 0%;
    margin-top: 0%;
  }

  @media (max-width: 1200px) {
    margin-top: 0%;
    margin-left: 0%;
  }
  @media (max-width: 820px) {
    margin-top: 0%;
    margin-left: 12%;
  }
  @media (max-width: 500px) {
    margin-top: 0%;
    margin-left: 0%;
  }
`;

export const TitleText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 60px;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 3%;

  @media (max-width: 769px) {
    font-size: 50px;
    font-weight: bold;
  }
  @media (max-width: 576px) {
    font-size: 50px;
    font-weight: bold;
  }
  @media (max-width: 820px) {
    font-size: 40px;
    font-weight: bold;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const SubTitleContainer = styled.div`
  margin-left: 5%;
  @media (max-width: 769px) {
    margin-left: 15%;
  }
  @media (max-width: 576px) {
    margin-left: 0%;
  }
  @media (max-width: 1200px) {
    margin-left: 5%;
  }
  @media (max-width: 500px) {
    margin-left: 0%;
  }
`;

export const SubTitleText = styled.div`
  color: #fff;
  text-align: justify;
`;

export const ButtonContainer = styled.div`
  margin-left: 5%;
  margin-top: 2%;

  @media (max-width: 769px) {
    margin-top: 2%;
  }
  @media (max-width: 576px) {
    margin-left: 0%;
    margin-top: 2%;
  }
  @media (max-width: 1200px) {
    margin-top: 2%;
    margin-left: 5%;
  }
  @media (max-width: 500px) {
    margin-left: 0%;
    margin-top: 3%;
  }
  @media (max-width: 576px) {
    background-color: #000;
    // margin: 0%;
  }
`;
