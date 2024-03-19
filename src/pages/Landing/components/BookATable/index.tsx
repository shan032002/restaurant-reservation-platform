import Forms from "../Forms";
import OpeningHours, { OpeningHoursProps } from "../OpeningHours";
import {
  Container,
  HeaderContainer,
  HeaderTitleText,
  SubContainer,
} from "./styles";

export interface BookATableProps {
  title?: string;
  bgImage?: any;
}

export const BookATable = (props: BookATableProps & OpeningHoursProps) => {
  const { title, bgImage } = props;
  const _renderHeader = () => {
    return (
      <HeaderContainer>
        <HeaderTitleText>{title}</HeaderTitleText>
      </HeaderContainer>
    );
  };

  const _renderForms = () => {
    return <Forms />;
  };

  const _renderOpeningHours = () => {
    return <OpeningHours list={props?.list} />;
  };
  return (
    <Container style={{ backgroundImage: `url(${bgImage})` }}>
      {_renderHeader()}
      <SubContainer>
        {_renderForms()}
        {_renderOpeningHours()}
      </SubContainer>
    </Container>
  );
};

BookATable.defaultProps = {
  title: "BOOK A TABLE",
  bgImage: "",
};
export default BookATable;
