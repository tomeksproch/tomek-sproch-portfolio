import { StyledButton } from "./Button.styles";
import ShortcutIcon from "@mui/icons-material/Shortcut";

const Button = ({ children }: any) => {
  return (
    <StyledButton>
      {children}
      <ShortcutIcon />
    </StyledButton>
  );
};

export default Button;
