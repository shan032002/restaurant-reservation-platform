import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #000;
  margin: 0% 3% 3% 3%;
  padding: 3%;
`;

export const HeaderContainer = styled.div`
  background-color: #000;
  width: 100%;
  padding: 2%;
`;

export const HeaderTitleText = styled.div`
  text-align: center;
  color: #fff;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 40px;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const ImageContainer = styled.div`
  flex: 0 0 33.33%;
  max-width: 33.33%;
  background-color: red;

  @media (max-width: 769px) {
    flex: 0 0 44.44%;
    max-width: 44.44%;
    background-color: red;
  }
  @media (max-width: 576px) {
    flex: 0 0 55.55%;
    max-width: 55.55%;
    background-color: red;
  }
`;

export const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 80%;
  max-width: 100%;
  justify-content: center;
`;
