import { IoIosPlayCircle, IoMdClose } from "react-icons/io";
import ReactPlayer from "react-player";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import VideoContent, { VideoContentProps } from "../VideoContent";

import {
  IconContainer,
  MainContainer,
  OverlayContainer,
  SpinnerContainer,
  ThumbNailContainer,
  ThumbNailImage,
  TransparentModal,
} from "./styles";

import { ClipLoader } from "react-spinners";
import { useState } from "react";
export interface VideoPlayerProps {
  backgroundImage?: any;
  thumbNail?: any;
  videoUrl?: any;
}

export const VideoPlayer = (props: VideoPlayerProps & VideoContentProps) => {
  const { backgroundImage, thumbNail, videoUrl } = props;

  const [showModal, setShowModal] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const _renderSpinner = () => {
    return (
      <div className="sweet-loading">
        <SpinnerContainer>
          <ClipLoader
            color={"#fff"}
            loading={isLoading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </SpinnerContainer>
      </div>
    );
  };
  const _renderModal = () => {
    return (
      <TransparentModal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        backdrop
      >
        <Modal.Header>
          <IoMdClose
            size={20}
            cursor={"pointer"}
            onClick={() => setShowModal(false)}
          />
        </Modal.Header>
        <Modal.Body>
          <ReactPlayer
            url="https://youtu.be/8V-R4f1QXds?si=y4hr88VXxEvmKB8T"
            controls
            onReady={() => setIsLoading(false)}
          />

          {isLoading && _renderSpinner()}
        </Modal.Body>
        <Button
          variant="contained"
          onClick={() => setShowModal(false)}
          style={{
            width: "30%",
            alignSelf: "center",
            padding: "1%",
            margin: "1%",
            color: "#000",
            backgroundColor: "#ffd700",
            border: "0px",
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
        >
          Close
        </Button>
      </TransparentModal>
    );
  };

  const _renderThumbNail = () => {
    return (
      <ThumbNailContainer>
        <ThumbNailImage src={thumbNail} />
        <OverlayContainer>
          <IconContainer onClick={() => setShowModal(true)}>
            <IoIosPlayCircle
              onClick={() => setShowModal(true)}
              cursor={"pointer"}
            />
          </IconContainer>
        </OverlayContainer>
      </ThumbNailContainer>
    );
  };

  const _renderContent = () => {
    return <VideoContent content={props?.content} />;
  };
  const _renderContainer = () => {
    return (
      <MainContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
        {_renderThumbNail()}
        {showModal && _renderModal()}
        {_renderContent()}
      </MainContainer>
    );
  };

  return <>{_renderContainer()}</>;
};

VideoPlayer.defaultProps = {
  backgroundImage: "",
  thumbNail: "",
  videoUrl: "",
};
export default VideoPlayer;
