import React, { useEffect, useRef, useState } from "react";
import logo from "../../../../assets/logo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  CloseButton,
  Container,
  DrawerContainer,
  DrawerItem,
  Header,
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

  /// nav Links

  const home = useRef<HTMLDivElement | null>(null);
  const aboutUs = useRef<HTMLDivElement | null>(null);
  const gallery = useRef<HTMLDivElement | null>(null);
  const chefs = useRef<HTMLDivElement | null>(null);
  const menu = useRef<HTMLDivElement | null>(null);
  const contacts = useRef<HTMLDivElement | null>(null);

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
            <NavLink
              href="#home"
              onClick={() =>
                home.current?.scrollIntoView({
                  block: "end",
                  inline: "nearest",
                  behavior: "smooth",
                })
              }
            >
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#about"
              onClick={() =>
                aboutUs.current?.scrollIntoView({
                  block: "start",
                  inline: "nearest",
                  behavior: "smooth",
                })
              }
            >
              ABOUT US
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#chefs"
              onClick={() =>
                chefs.current?.scrollIntoView({
                  block: "start",
                  inline: "nearest",
                  behavior: "smooth",
                })
              }
            >
              CHEFS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#menu"
              onClick={() =>
                menu.current?.scrollIntoView({
                  block: "start",
                  inline: "nearest",
                  behavior: "smooth",
                })
              }
            >
              MENU
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#gallery"
              onClick={() =>
                gallery.current?.scrollIntoView({
                  block: "start",
                  inline: "nearest",
                  behavior: "smooth",
                })
              }
            >
              GALLERY
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#contacts"
              onClick={() =>
                contacts.current?.scrollIntoView({
                  block: "end",
                  inline: "nearest",
                  behavior: "smooth",
                })
              }
            >
              CONTACTS
            </NavLink>
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

        <DrawerItem
          href="#home"
          onClick={() => {
            home.current?.scrollIntoView({
              block: "end",
              inline: "nearest",
              behavior: "smooth",
            });
            setShowDrawer(false);
          }}
        >
          HOME
        </DrawerItem>
        <DrawerItem
          href="#about"
          onClick={() => {
            aboutUs.current?.scrollIntoView({
              block: "start",
              inline: "nearest",
              behavior: "smooth",
            });
            setShowDrawer(false);
          }}
        >
          ABOUT US
        </DrawerItem>
        <DrawerItem
          href="#chefs"
          onClick={() => {
            chefs.current?.scrollIntoView({
              block: "start",
              inline: "nearest",
              behavior: "smooth",
            });
            setShowDrawer(false);
          }}
        >
          CHEFS
        </DrawerItem>
        <DrawerItem
          href="#menu"
          onClick={() => {
            menu.current?.scrollIntoView({
              block: "start",
              inline: "nearest",
              behavior: "smooth",
            });
            setShowDrawer(false);
          }}
        >
          MENU
        </DrawerItem>
        <DrawerItem
          href="#gallery"
          onClick={() => {
            gallery.current?.scrollIntoView({
              block: "start",
              inline: "nearest",
              behavior: "smooth",
            });
            setShowDrawer(false);
          }}
        >
          GALLERY
        </DrawerItem>
        <DrawerItem
          href="#contacts"
          onClick={() => {
            contacts.current?.scrollIntoView({
              block: "center",
              inline: "nearest",
              behavior: "smooth",
            });
            setShowDrawer(false);
          }}
        >
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
