import SocialMedia from "../SocialMedia";
import {
  ChildContainer,
  ChildDescText,
  ChildItem,
  ChildTitleText,
  Container,
  HeaderContainer,
  HeaderTitleText,
  RowStyle,
} from "./styles";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { Col, Row } from "react-bootstrap";
export interface ContactProps {
  title?: string;
  locationTitle?: string;
  locationDesc?: string;
  phoneTitle?: string;
  pnoneDesc?: string;
  emailTitle?: string;
  emailDesc?: string;
}

export const Contacts = (props: ContactProps) => {
  const {
    title,
    locationTitle,
    locationDesc,
    phoneTitle,
    pnoneDesc,
    emailTitle,
    emailDesc,
  } = props;
  const _renderHeader = () => {
    return (
      <HeaderContainer>
        <HeaderTitleText>{title}</HeaderTitleText>
      </HeaderContainer>
    );
  };

  const _renderLocation = () => {
    return (
      <>
        <ChildItem>
          <FaLocationDot
            color="#ffd700"
            size={20}
            style={{ marginRight: "1%" }}
          />
          <ChildTitleText> {locationTitle}</ChildTitleText>
        </ChildItem>

        <ChildDescText>{locationDesc}</ChildDescText>
      </>
    );
  };
  const _renderPhone = () => {
    return (
      <>
        <ChildItem>
          <FaLocationDot
            color="#ffd700"
            size={20}
            style={{ marginRight: "1%" }}
          />
          <ChildTitleText>{phoneTitle}</ChildTitleText>
        </ChildItem>

        <ChildDescText>{pnoneDesc}</ChildDescText>
      </>
    );
  };

  const _renderEmail = () => {
    return (
      <>
        <ChildItem>
          <FaLocationDot
            color="#ffd700"
            size={20}
            style={{ marginRight: "1%" }}
          />
          <ChildTitleText>{emailTitle}</ChildTitleText>
        </ChildItem>

        <ChildDescText>{emailDesc}</ChildDescText>
      </>
    );
  };

  const _renderSocialMedia = () => {
    return (
      <div>
        <FaFacebookF color="#ffd700" style={{ marginRight: "10px" }} />
        <FaInstagram color="#ffd700" style={{ marginRight: "10px" }} />
        <BsTwitterX color="#ffd700" style={{ marginRight: "10px" }} />
        <IoLogoYoutube color="#ffd700" style={{ marginRight: "5px" }} />
      </div>
    );
  };
  const _renderChildren = () => {
    return (
      <ChildContainer>
        <RowStyle>
          <Col>{_renderLocation()}</Col>
          <Col>{_renderPhone()}</Col>
          <Col>{_renderEmail()}</Col>
          <Col>{_renderSocialMedia()}</Col>
        </RowStyle>
      </ChildContainer>
    );
  };

  return (
    <Container id="contacts">
      {_renderHeader()}
      {_renderChildren()}
    </Container>
  );
};

Contacts.defaultProps = {
  title: "CONTACTS",
  locationTitle: "LOCATION",
  locationDesc: "2900 Rd, Port Hurons",
  phoneTitle: "PHONE",
  pnoneDesc: "123 456 78 30",
  emailTitle: "EMAIL",
  emailDesc: "shan032002@gmail.com",
};

export default Contacts;
