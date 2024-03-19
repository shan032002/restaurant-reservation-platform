import { useState } from "react";
import {
  ButtonContainer,
  Container,
  CustomTextField,
  StyledDatePicker,
  StyledTimePicker,
} from "./styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import ButtonComp from "../Button";

export interface FormsProps {}

export const Forms = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17T15:30"));

  const _renderName = () => {
    return (
      <div className="row">
        <div className="col">
          <CustomTextField
            id="outlined-basic"
            label="EMAIL"
            variant="outlined"
            type="text"
            InputLabelProps={{
              style: { color: "#ffd700" },
            }}
          />
        </div>
        <div className="col">
          <CustomTextField
            id="outlined-basic"
            label="LAST NAME"
            variant="outlined"
            type="text"
            InputLabelProps={{
              style: { color: "#ffd700" },
            }}
          />
        </div>
      </div>
    );
  };
  const _renderPhoneAndEmail = () => {
    return (
      <div className="row" style={{ marginTop: "3%" }}>
        <div className="col">
          <CustomTextField
            id="outlined-basic"
            label="PHONE"
            variant="outlined"
            type="tel"
            InputLabelProps={{
              style: { color: "#ffd700" },
            }}
          />
        </div>
        <div className="col">
          <CustomTextField
            id="outlined-basic"
            label="EMAIL"
            variant="outlined"
            type="email"
            InputLabelProps={{
              style: { color: "#ffd700" },
            }}
          />
        </div>
      </div>
    );
  };

  const _renderDateAndTime = () => {
    return (
      <div className="row" style={{ marginTop: "3%" }}>
        <div className="col">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker label="DATE" />
          </LocalizationProvider>
        </div>
        <div className="col">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledTimePicker label="TIME" />
          </LocalizationProvider>
        </div>
      </div>
    );
  };

  const _renderButton = () => {
    return (
      <ButtonContainer>
        <ButtonComp />
      </ButtonContainer>
    );
  };
  const _renderForms = () => {
    return (
      <form>
        {_renderName()}
        {_renderPhoneAndEmail()}
        {_renderDateAndTime()}
        {_renderButton()}
      </form>
    );
  };
  return <Container>{_renderForms()}</Container>;
};

Forms.defaultprops = {};

export default Forms;
