import {
  Container,
  GalleryContainer,
  HeaderContainer,
  HeaderTitleText,
  ImageContainer,
  ImageStyle,
} from "./styles";

export interface GalleryProps {
  title?: string;
  galleryData?: any[];
}

export const Gallery = (props: GalleryProps) => {
  const { title, galleryData } = props;
  const _renderHeader = () => {
    return (
      <HeaderContainer>
        <HeaderTitleText>{title}</HeaderTitleText>
      </HeaderContainer>
    );
  };

  const _renderImages = () => {
    let compProps: any = [];
    galleryData?.forEach((item?: any) => {
      compProps.push(
        <ImageContainer>
          <ImageStyle src={item?.image} />
        </ImageContainer>
      );
    });
    return <GalleryContainer>{compProps}</GalleryContainer>;
  };

  return (
    <Container id="gallery">
      {_renderHeader()}
      {_renderImages()}
    </Container>
  );
};

Gallery.defaultProps = {
  title: "GALLERY",
  galleryData: [],
};
export default Gallery;
