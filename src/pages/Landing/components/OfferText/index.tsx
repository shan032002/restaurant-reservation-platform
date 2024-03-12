import Lottie from "react-lottie";
import ButtonComp from "../Button";
import {
  ButtonContainer,
  MainContainer,
  SubTitleText,
  TitleContainer,
  TitleText,
} from "./styles";

export interface OfferTextProps {
  title?: string;
  subTitle?: string;
  lottie?: any;
}

export const OfferText = (props: OfferTextProps) => {
  const { title, subTitle, lottie } = props;

  const buttonStyle = {
    display: "block",
    margin: "10px auto",
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const _renderTitle = () => {
    return (
      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
    );
  };

  const _renderSubTitle = () => {
    return (
      <TitleContainer>
        <SubTitleText> {subTitle}</SubTitleText>
      </TitleContainer>
    );
  };

  const _renderLottie = () => {
    return <Lottie options={defaultOptions} height={200} width={200} />;
  };

  const _renderButton = () => {
    return (
      <ButtonContainer>
        <ButtonComp title={"Book a Table"} />
      </ButtonContainer>
    );
  };

  return (
    <MainContainer>
      {_renderTitle()}
      {_renderSubTitle()}
      {_renderLottie()}
      {_renderButton()}
    </MainContainer>
  );
};

OfferText.defaultProps = {
  title: "Chicken Bucket Briyani",
  subTitle: "40% OFF only on Saturday's",
  lottie: "",
};

export default OfferText;
