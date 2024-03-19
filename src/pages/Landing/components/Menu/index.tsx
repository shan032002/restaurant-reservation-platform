import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  ColContainer,
  DishContainer,
  DishCost,
  DishName,
  ImageContainer,
  ImageStyle,
  MainContainer,
  MenuColContainer,
  RowContainer,
  TitleContainer,
  TitleText,
} from "./styles";
export interface MenuProps {
  title?: string;
  bgImage?: any;
  menu?: any[];
}
export const Menu = (props: MenuProps) => {
  const { title, bgImage, menu } = props;
  const [selectedGroup, setSelectedGroup] = useState<string>("all");

  const [breakPoint, setBreakPoint] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768 && screenWidth > 500) {
        setBreakPoint(2);
      } else if (screenWidth >= 768 && screenWidth < 992) {
        setBreakPoint(2);
      } else if (screenWidth >= 400 && screenWidth < 1200) {
        setBreakPoint(0);
      } else if (screenWidth < 500) {
        setBreakPoint(0);
      } else {
        setBreakPoint(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const _renderTitle = () => {
    return (
      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
    );
  };

  const handleGroupClick = (groupName: string) => {
    setSelectedGroup(groupName);
  };

  const _renderFilter = () => {
    return (
      <RowContainer>
        {menu?.map((item) => (
          <ColContainer key={item.id} sm={breakPoint}>
            <Button
              style={{
                backgroundColor:
                  selectedGroup == item?.groupName ? "black" : "#ffd700",
                border: "0px",
                textAlign: "center",
                color: selectedGroup == item?.groupName ? "#fff" : "#000",
                fontWeight: "bold",
              }}
              onClick={() => handleGroupClick(item.groupName)}
            >
              {item.groupName}
            </Button>
          </ColContainer>
        ))}
      </RowContainer>
    );
  };

  const _renderMenu = () => {
    const selectedMenuGroup = menu?.find(
      (group) => group.groupName === selectedGroup
    );
    const menuItems = selectedMenuGroup?.child || [];

    let rows: JSX.Element[] = [];
    let cols: JSX.Element[] = [];

    menuItems.forEach((item: any, index: number) => {
      cols.push(
        <MenuColContainer key={index}>
          <ImageContainer>
            <ImageStyle src={item.image} />

            <DishName>{item.name}</DishName>

            <DishContainer>{item.description}</DishContainer>
            <DishCost>{item.cost}</DishCost>
          </ImageContainer>
        </MenuColContainer>
      );

      if ((index + 1) % 3 === 0 || index === menuItems.length - 1) {
        rows.push(<Row key={index}>{cols}</Row>);
        cols = [];
      }
    });

    return <Container fluid="md">{rows}</Container>;
  };

  return (
    <MainContainer
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      id={"menu"}
    >
      {_renderTitle()}
      {_renderFilter()}
      {_renderMenu()}
    </MainContainer>
  );
};

Menu.defaultProps = {
  title: "OUR MENU",
  bgImage: "",
  menu: [],
};
export default Menu;
