import Button from "@mui/material/Button";

export interface ButtonCompProps {
  title?: string;
}

export const ButtonComp = (props: ButtonCompProps) => {
  const { title } = props;
  const _renderButton = () => {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#ffd700",
          color: "#000",
          fontWeight: "bold",
        }}
      >
        {title}
      </Button>
    );
  };
  return <div>{_renderButton()}</div>;
};

ButtonComp.defaultProps = {};

export default ButtonComp;
