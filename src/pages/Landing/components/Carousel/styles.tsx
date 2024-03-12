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

  .slick-dots {
    position: absolute;
    width: 100%;
    padding: 0 20px;
    list-style: none;
    text-align: center;
    background-color: #000;
  }

  .slick-dots li {
    display: inline-block;
    margin: 0 5px;
  }

  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 5px;
    height: 5px;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    background-color: gray;
  }

  .slick-dots li.slick-active button {
    background-color: #fff;
  }
`;

export const CarouselSubContainer = styled.div``;

export const CarouselItemsContainer = styled.div`
  margin: 0 10px;
  height: 100%;
  width: 100%;
`;

export const ImageStyle = styled.img`
  max-width:100%;
  max-height:100%,
  object-fit: contain; 
  display: block;
  margin: auto; 
`;

export const TextContainer = styled.p`
  max-width: 100%;
  padding: 0 10px;
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
  padding: 10px;
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
