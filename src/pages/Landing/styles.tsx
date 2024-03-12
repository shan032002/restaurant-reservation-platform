import styled from "styled-components";

export const Container = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  min-width: 100%;
  min-height: 100%;
  @media (max-width: 768px) {
    height: 90%;
  }
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;
