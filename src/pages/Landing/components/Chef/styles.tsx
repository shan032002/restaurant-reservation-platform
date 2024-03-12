import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
`;

export const HeaderContainer = styled.div`
  background-color: #000;
  padding: 1%;
  width: 100%;
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

export const HeaderSubTitleContainer = styled.div`
  display: block;
  margin-right: 30%;
  margin-left: 30%;
  padding: 1%;
`;

export const HeaderSubTitleText = styled.div`
  text-align: center;
  color: #fff;
  display: block;
`;
export const CarouselContainer = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
`;

export const CarouselSubContainer = styled.div``;

export const CarouselItemsContainer = styled.div`
  margin: 0px;
  max-height: 100%;
  max-width: 100%;
  padding: 0px;
`;

export const ImageStyle = styled.img`
  width:100%;
  height:100%,
  object-fit: cover; 
  display: block;
  margin: auto; 
`;

export const TextContainer = styled.p`
  max-width: 100%;
  padding: 10px;
`;

export const TitleStyle = styled.p`
  text-align: center;
  font-weight: bold;
  color: #fff;
  padding: 2%;
  max-width: 100%;
  margin: 0 auto;
`;

export const DescriptionStyle = styled.p`
  text-align: center;
  color: #fff;
  maxwidth: 100%;
  margin: 0 auto;
  max-height: 100%;
`;

export const CostStyle = styled.p`
  padding: 1%;
  text-align: center;
  color: #ffd700;
  font-weight: bold;
  max-width: 100%;
  margin: 0 auto;
`;

export const ArrowContainer = styled.div`
  display: inline;
  display: flex;
  justify-content: center;
`;

export const ArrowButton = styled.div`
  cursor: pointer;
  display: inline;
  flex-direction: row;
  padding: 1%;
`;

export const PrevArrow = styled(ArrowButton)`
  left: 0px;
`;

export const NextArrow = styled(ArrowButton)`
  right: 0px;
`;
