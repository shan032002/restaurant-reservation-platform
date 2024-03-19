import { useRef } from "react";
import { TitleText } from "./styles";
import { FaArrowUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
export interface CopyRightsProps {
  title?: string;
}

export const CopyRights = (props: CopyRightsProps) => {
  const { title } = props;
  const home = document.getElementById("home");

  const _renderText = () => {
    return <TitleText>{title}</TitleText>;
  };

  const _renderScrollToTop = () => {
    return (
      <div
        style={{
          // display: "flex",
          justifyContent: "flex-end",
          // alignSelf: "flex-end",
          // backgroundColor: "red",
          position: "fixed",
          bottom: 10,
          right: 50,
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffd700",
            width: "50px",
            textAlign: "center",
            borderRadius: "5px",
            padding: "10%",
          }}
        >
          <a
            href="#home"
            onClick={() =>
              home.current?.scrollIntoView({
                block: "end",
                inline: "nearest",
                behavior: "smooth",
              })
            }
          >
            <FaArrowUp
              size={25}
              style={{ textAlign: "center", color: "#000" }}
              href="#home"
            />
          </a>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        backgroundColor: "#000",
        display: "blcok",
        justifyContent: "center",
        padding: "2%",
      }}
    >
      {_renderText()}
      {_renderScrollToTop()}
    </div>
  );
};

CopyRights.defaultProps = {
  title: "Copr © All rights reserved",
};
export default CopyRights;
