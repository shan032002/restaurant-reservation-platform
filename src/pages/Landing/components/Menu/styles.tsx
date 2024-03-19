import { Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 3%;
  overflow-x: hidden;

  @media-screen (max-width :758px) {
    margin: 2%;
  }
  @media-screen (max-width : 576px) {
    margin: 0%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2%;
`;

export const TitleText = styled.p`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

export const RowContainer = styled(Row)`
  display: flex;
  margin: 0px 0% 0px 1%;
  justify-content: center;
  width: 100%;
`;

export const ColContainer = styled(Col)`
  padding: 2%;

  @media (max-width: 576px) {
    justify-content: center;
    display: flex;
  }
`;

export const MenuColContainer = styled(Col)`
  padding: 1%;
  margin: 0% 3% 0% 5%;
  display: flex;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
`;

export const ImageStyle = styled.img`
  width: 100%;
  height: auto;
  border-radius: 2%;
`;

export const DishName = styled.p`
  color: #fff;
  text-align: center;
  padding-top: 2%;
  font-weight: bold;
  font-size: 20px;
`;

export const DishContainer = styled.p`
  color: #fff;
  text-align: center;
`;

export const DishCost = styled.p`
  color: #ffd700;
  text-align: center;
  font-weight: bold;
`;
