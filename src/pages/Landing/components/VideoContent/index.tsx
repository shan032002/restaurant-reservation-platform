import { SiCodechef } from "react-icons/si";
import { LuFiles } from "react-icons/lu";
import { GiFullPizza } from "react-icons/gi";
import {
  DescriptionContainer,
  DescriptionText,
  IconParent,
  IconText,
  IconsContainer,
  MainContainer,
  TitleText,
} from "./styles";
import { Icon } from "@mui/material";

export interface VideoContentProps {
  title?: any;
  content?: any[];
}

export const VideoContent = (props: VideoContentProps) => {
  const { title, content } = props;

  const _renderTitle = () => {
    return <TitleText>{title}</TitleText>;
  };

  const _renderContent = () => {
    let compProps: any = [];

    content?.forEach((item?: any) => {
      compProps.push(
        <DescriptionContainer>
          <DescriptionText>{item?.description}</DescriptionText>
        </DescriptionContainer>
      );
    });

    return compProps;
  };

  const _renderIcons = () => {
    return (
      <IconsContainer>
        <IconParent>
          <SiCodechef
            size={80}
            color={"#ffd700"}
            style={{ alignSelf: "center" }}
          />
          <IconText>{"EXPERIENCED CHEFS"}</IconText>
        </IconParent>

        <IconParent>
          <LuFiles
            size={75}
            color={"#ffd700"}
            style={{ alignSelf: "center" }}
          />
          <IconText>{"ORGINAL RECEPIES"}</IconText>
        </IconParent>

        <IconParent>
          <GiFullPizza
            size={80}
            color={"#ffd700"}
            style={{ alignSelf: "center" }}
          />
          <IconText>{"GREAT FOOD"}</IconText>
        </IconParent>
      </IconsContainer>
    );
  };

  return (
    <MainContainer>
      {_renderTitle()}
      {_renderContent()}
      {_renderIcons()}
    </MainContainer>
  );
};

VideoContent.defaultProps = {
  title: "Nourish your soul with food that brings joy",
};

export default VideoContent;
