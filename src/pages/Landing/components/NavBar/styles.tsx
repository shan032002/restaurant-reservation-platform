import styled, { withTheme } from "styled-components";

export const Container = styled.nav`
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.img`
  width: auto;
  height: 50px;
  border-radius: 50px;
`;

export const TextContainer = styled.div`
  padding: 0 20px;
`;

export const TitleText = styled.p`
  color: #fff;
  margin: 0;
  font-weight: bold;

  @media (max-width: 769px) {
    font-size: 10px;
  }
`;

export const SubTitleText = styled.p`
  color: #fff;
  margin: 0;
  @media (max-width: 769px) {
    font-size: 8px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 10px;
    z-index: 1000;
  }
  @media (max-width: 1200px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 10px;
    z-index: 1000;
  }
`;

export const NavItem = styled.li`
  margin-right: 70px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #ffd700;
  }
`;

export const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #333;
  padding: 20px;
  z-index: 1000;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const DrawerItem = styled(NavLink)`
  display: block;
  margin-bottom: 20px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  cursor: pointer;
`;

export const MenuButton = styled.div`
  color: #fff;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2%;
  flex-wrap: wrap;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;

  background-color: #000;
`;
