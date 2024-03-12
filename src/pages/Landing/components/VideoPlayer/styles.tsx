import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

export const ThumbNailContainer = styled.div`
  position: relative;
  width: 100%;
  maxwidth: 80%;
  margin: 3%;
  @media (max-width: 769px) {
  }
`;

export const ThumbNailImage = styled.img`
  display: block;
  width: 95%;
  height: 100%;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  transition: 0.3s ease;
`;

export const IconContainer = styled.a`
  color: #ffd700;
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

export const TransparentModal = styled(Modal)`
  backdrop-filter: blur(2px);

  .modal-content {
    background-color: rgba(
      128,
      128,
      128,
      0.25
    ); /* Gray color with 50% transparency */
    border: 1px solid rgba(255, 255, 255, 0.2); /* Optional: Border for contrast */
  }
  .modal-header {
    border: 0px;
    color: #fff;
    display: flex;
    justify-content: flex-end;
  }

  .modal-body {
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const ModalButton = styled(Button)`
  width: 30%;
  align-self: center;
  padding: 1%;
  margin: 1%;
  color: #000;
  background-color: #ffd700;
  border: 0px;
  font-weight: bold;
  letter-spacing: 0.5px;
`;
export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainContainer = styled.div`
  min-height: 600px;
  margin: 3% 3% 3% 3%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
