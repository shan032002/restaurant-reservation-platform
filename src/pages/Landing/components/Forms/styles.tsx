import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import { styled } from "styled-components";
import { TimePicker } from "@mui/x-date-pickers";

export const Container = styled.div`
  padding: 2%;
  width: 100%;
`;

export const CustomTextField = styled(TextField)`
  width: 100%;
  color: #fff;

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #ffd700;
    color: #ffd700;
  }

  & .MuiOutlinedInput-input {
    background: #000;
    border-radius: 3%;
    color: #fff;
    font-size: 12px;
  }

  & label {
    color: #ffd700;
    font-size: 12px;
  }

  & .MuiOutlinedInput-root .MuiSvgIcon-root {
    /* Apply styles to the icon */
    color: #ffd700; /* Change the color of the icon */
  }

  & .MuiOutlinedInput-input[type="date"]::-webkit-calendar-picker-indicator {
    /* Hide the default date picker icon */
    display: none;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  background-color: #000;

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #ffd700;
    color: #ffd700;
  }

  & .MuiOutlinedInput-input {
    background: #000;
    border-radius: 3%;
    color: #fff;
    font-size: 12px;
  }

  & label {
    color: #ffd700;
    font-size: 12px;
  }
  .MuiSvgIcon-root {
    color: #ffd700;
    background-color: #000;
  }

  & .MuiInputAdornment-root .MuiSvgIcon-root {
    color: #ffd700; /* Icon color */
    width: 24px; /* Icon width */
    height: 24px; /* Icon height */
  }

  &
    .MuiOutlinedInput-root.Mui-focused
    .MuiInputAdornment-root
    .MuiSvgIcon-root {
    color: #ffd700; /* Icon color when focused */
  }

  & .MuiOutlinedInput-root:hover .MuiInputAdornment-root .MuiSvgIcon-root {
    color: #ffd700; /* Icon color on hover */
  }

  & .MuiOutlinedInput-root.Mui-error .MuiInputAdornment-root .MuiSvgIcon-root {
    color: #ff0000; /* Icon color when there's an error */
  }
`;

export const StyledTimePicker = styled(TimePicker)`
  width: 100%;
  background-color: #000;

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #ffd700;
    color: #ffd700;
  }

  & .MuiOutlinedInput-input {
    background: #000;
    border-radius: 3%;
    color: #fff;
    font-size: 12px;
  }

  & label {
    color: #ffd700;
    font-size: 12px;
  }
  .MuiSvgIcon-root {
    color: #ffd700;
    background-color: #000;
  }

  & .MuiInputAdornment-root .MuiSvgIcon-root {
    color: #ffd700; /* Icon color */
    width: 24px; /* Icon width */
    height: 24px; /* Icon height */
  }

  &
    .MuiOutlinedInput-root.Mui-focused
    .MuiInputAdornment-root
    .MuiSvgIcon-root {
    color: #ffd700; /* Icon color when focused */
  }

  & .MuiOutlinedInput-root:hover .MuiInputAdornment-root .MuiSvgIcon-root {
    color: #ffd700; /* Icon color on hover */
  }

  & .MuiOutlinedInput-root.Mui-error .MuiInputAdornment-root .MuiSvgIcon-root {
    color: #ff0000; /* Icon color when there's an error */
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 4%;
`;
