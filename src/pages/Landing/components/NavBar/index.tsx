import React, { useEffect, useState } from "react";
import logo from "../../../../assets/logo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  CloseButton,
  Container,
  DrawerContainer,
  DrawerItem,
  Header,
  Logo,
  LogoContainer,
  MainContainer,
  MenuButton,
  NavItem,
  NavLink,
  NavList,
  SubTitleText,
  TextContainer,
  TitleText,
} from "./styles";

export interface NavBarProps {
  title?: string;
  subTitle?: string;
}

export function NavBar(props: NavBarProps) {
  const { title, subTitle } = props;
  const [showDrawer, setShowDrawer] = useState(false);

  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    handleResize(); // Check screen size on initial render

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      setShowDrawer(false); // Close drawer when screen size becomes large
    }
  }, [isLargeScreen]);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const _renderHeader = () => {
    return (
      <Header>
        <LogoContainer src={logo} />
        {_renderLogoText()}
      </Header>
    );
  };

  const _renderTitle = () => {
    return <TitleText> {title}</TitleText>;
  };

  const _renderSubTitle = () => {
    return <SubTitleText>{subTitle} </SubTitleText>;
  };

  const _renderLogoText = () => {
    return (
      <TextContainer>
        {_renderTitle()}
        {_renderSubTitle()}
      </TextContainer>
    );
  };

  const navbar = () => {
    return (
      <Container>
        <NavList>
          <NavItem>
            <NavLink href="#">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">ABOUT US</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">CHEFS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">MENU</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">GALLERY</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">CONTACTS</NavLink>
          </NavItem>
        </NavList>
      </Container>
    );
  };

  return (
    <MainContainer scrolled={scrolled}>
      {_renderHeader()}
      {navbar()}
      <MenuButton onClick={toggleDrawer}>
        <FaBars size={25} />
      </MenuButton>
      <DrawerContainer isOpen={showDrawer}>
        <DrawerItem>
          <CloseButton onClick={closeDrawer}>
            <FaTimes />
          </CloseButton>
        </DrawerItem>

        <DrawerItem href="#" onClick={() => setShowDrawer(false)}>
          HOME
        </DrawerItem>
        <DrawerItem href="#" onClick={() => setShowDrawer(false)}>
          ABOUT US
        </DrawerItem>
        <DrawerItem href="#" onClick={() => setShowDrawer(false)}>
          CHEFS
        </DrawerItem>
        <DrawerItem href="#" onClick={() => setShowDrawer(false)}>
          MENU
        </DrawerItem>
        <DrawerItem href="#" onClick={() => setShowDrawer(false)}>
          GALLERY
        </DrawerItem>
        <DrawerItem href="#" onClick={() => setShowDrawer(false)}>
          CONTACTS
        </DrawerItem>
      </DrawerContainer>
    </MainContainer>
  );
}

NavBar.defaultProps = {
  title: "RESTFOOD",
  subTitle: "RESTAURANT",
};

export default NavBar;
