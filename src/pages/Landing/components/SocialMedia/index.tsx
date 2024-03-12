import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { IconContainer } from "./styles";

export interface SocialMedia {}

export const SocialMedia = () => {
  const _renderMedias = () => {
    return (
      <IconContainer>
        <FaFacebookF color="#ffd700" style={{ marginRight: "10px" }} />
        <FaInstagram color="#ffd700" style={{ marginRight: "10px" }} />
        <BsTwitterX color="#ffd700" style={{ marginRight: "10px" }} />
        <IoLogoYoutube color="#ffd700" style={{ marginRight: "5px" }} />
      </IconContainer>
    );
  };
  return <>{_renderMedias()}</>;
};

SocialMedia.defaultProps = {};
export default SocialMedia;
