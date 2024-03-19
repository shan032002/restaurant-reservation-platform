import { Row } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  margin: 0% 3% 3% 3%;
  overflow-x: hidden;
`;

export const HeaderContainer = styled.div`
  background-color: #000;
  width: 100%;
  padding: 2%;
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

export const RowStyle = styled(Row)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3%;
`;

export const ChildContainer = styled.div`
  margin-left: 10%;
`;

export const ChildTitleText = styled.p`
  color: #fff;
  font-weight: bold;
`;

export const ChildDescText = styled.p`
  color: #fff;
`;

export const ChildItem = styled.div`
  display: flex;
`;
