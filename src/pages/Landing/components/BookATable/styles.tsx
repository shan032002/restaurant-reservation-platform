import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  margin: 3%;
  overflow-x: hidden;
`;

export const HeaderContainer = styled.div`
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

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
