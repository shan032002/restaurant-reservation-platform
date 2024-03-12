import {
  ArrowContainer,
  CarouselContainer,
  CarouselItemsContainer,
  CarouselSubContainer,
  Container,
  CostStyle,
  DescriptionStyle,
  HeaderContainer,
  HeaderSubTitleContainer,
  HeaderSubTitleText,
  HeaderTitleText,
  ImageStyle,
  NextArrow,
  PrevArrow,
  TextContainer,
  TitleStyle,
} from "./styles";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface CarouselProps {
  title?: string;
  subTitle?: string;
  child?: any[];
}

export const CarouselComp = (props: CarouselProps) => {
  const { title, child, subTitle } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSlidesToShow(1);
      } else if (screenWidth >= 768 && screenWidth < 992) {
        setSlidesToShow(2);
      } else if (screenWidth >= 400 && screenWidth < 1200) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const customPrevArrow = <FaArrowLeft color="#fff" />;

  const customNextArrow = <FaArrowRight color="#fff" />;
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplay: !isFocused,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    prevArrow: customPrevArrow,
    nextArrow: customNextArrow,
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };
  const _renderSubTitle = () => {
    return (
      <HeaderSubTitleContainer>
        <HeaderSubTitleText>{subTitle}</HeaderSubTitleText>
      </HeaderSubTitleContainer>
    );
  };
  const _renderHeader = () => {
    return (
      <HeaderContainer>
        <HeaderTitleText>{title}</HeaderTitleText>
        {_renderSubTitle()}
      </HeaderContainer>
    );
  };

  const _renderImage = (card?: any, width?: any, height?: any) => {
    return (
      <ImageStyle
        src={card.source}
        alt={`Card ${card.id}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    );
  };

  const _renderTitle = (card?: any) => {
    return <TitleStyle>{card.name}</TitleStyle>;
  };

  const _renderDescription = (card?: any, width?: any) => {
    return (
      <DescriptionStyle
        style={{
          width: `${width}px`,
        }}
      >
        {card.description}
      </DescriptionStyle>
    );
  };

  const _renderCost = (card?: any) => {
    return <CostStyle style={{}}>{card?.cost}</CostStyle>;
  };

  const _renderInfo = (card?: any, width?: any) => {
    return (
      <TextContainer>
        {_renderTitle(card)}
        {_renderDescription(card, width)}
        {_renderCost(card)}
      </TextContainer>
    );
  };

  const _renderCarousel = () => {
    const desiredWidth = 300;
    const desiredHeight = 200;

    const aspectRatio = desiredWidth / desiredHeight;

    const cardMargin = 0;

    return (
      <CarouselContainer onFocus={handleFocus} onBlur={handleBlur}>
        <Slider ref={sliderRef} {...settings}>
          {child &&
            child.map((card) => {
              let width = desiredWidth;
              let height = desiredHeight;

              if (card.width && card.height) {
                const originalAspectRatio = card.width / card.height;

                if (originalAspectRatio > aspectRatio) {
                  height = width / originalAspectRatio;
                } else {
                  width = height * originalAspectRatio;
                }
              }

              return (
                <CarouselSubContainer
                  key={card.id}
                  style={{
                    margin: `0 ${cardMargin}px`,
                    height: `${desiredHeight}px`,
                    width: `${desiredWidth}px`,
                  }}
                >
                  <CarouselItemsContainer>
                    {_renderImage(card, width, height)}
                    {_renderInfo(card, width)}
                  </CarouselItemsContainer>
                </CarouselSubContainer>
              );
            })}
        </Slider>
      </CarouselContainer>
    );
  };

  const _renderArrows = () => {
    return (
      <ArrowContainer>
        <PrevArrow onClick={handlePrevClick}>{customPrevArrow}</PrevArrow>
        <NextArrow onClick={handleNextClick}>{customNextArrow}</NextArrow>
      </ArrowContainer>
    );
  };
  return (
    <Container>
      {_renderHeader()}
      {_renderCarousel()}
      {_renderArrows()}
    </Container>
  );
};

CarouselComp.defaultProps = {
  title: "OUR SPECIAL DISHES",
  subTitle:
    "Experience our renowned culinary creations, crafted with precision and passion, offering a symphony of flavors to delight every palate.",
};

export default CarouselComp;
