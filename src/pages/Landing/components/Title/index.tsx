import ButtonComp from "../Button";
import tandoori from "../../../../assets/tandoori.png";
import {
  ButtonContainer,
  ImageContainer,
  MainContainer,
  SubTitleContainer,
  SubTitleText,
  TitleContainer,
  TitleText,
} from "./styles";
const _renderButton = () => {
  return <ButtonComp />;
};
export interface TitleProps {
  title?: string;
  subTitle?: string;
  btnTitle?: string;
}

export const Title = (props: TitleProps) => {
  const { title, subTitle, btnTitle } = props;

  const _renderTitle = () => {
    return (
      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
    );
  };

  const _renderSubTitle = () => {
    return (
      <SubTitleContainer>
        <SubTitleText>{subTitle}</SubTitleText>
      </SubTitleContainer>
    );
  };

  const _renderButton = () => {
    return (
      <ButtonContainer>
        <ButtonComp title={btnTitle} />
      </ButtonContainer>
    );
  };

  const _renderImage = () => {
    return <ImageContainer src={tandoori} />;
  };
  return (
    <MainContainer>
      {_renderImage()}
      {_renderTitle()}
      {_renderSubTitle()}
      {_renderButton()}
    </MainContainer>
  );
};

Title.defaultProps = {
  title: "BEST QUALITY FOOD",
  subTitle:
    "Savor the essence of culinary perfection with our meticulously crafted dishes, each a symphony of flavor and artistry. From farm-fresh ingredients to expertly seasoned creations, indulge in an unforgettable dining experience that tantalizes the senses. Elevate your palate and embrace the taste of excellence at Shan's",
  btnTitle: "Book A TABLE",
};
export default Title;
