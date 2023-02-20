import { StyledButton } from "./Button.styles";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import { useNavigate } from "react-router";

const Button = (props: any) => {
  const navigate = useNavigate();
  return (
    <StyledButton onClick={() => navigate(props.path)}>
      {props.tittle}
      <ShortcutIcon />
    </StyledButton>
  );
};

export default Button;
