import { StyledButton } from "./styles";
import Arrow from "../../svg/arrow-right.svg";

type primary = "primary";
type secondary = "secondary";
type textBtn = "text-btn";
type welcomeBtn = "welcome-btn";
export type btnTypeList = primary | secondary | textBtn | welcomeBtn;

export interface ButtonProps {
  text: string;
  isArrow: boolean;
  btnType: btnTypeList;
  primary: boolean;
  onClickFunc: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  isArrow,
  btnType,
  primary,
  onClickFunc,
}) => {
  return (
    <StyledButton primary={primary} btnType={btnType} onClick={onClickFunc}>
      {text}
      {isArrow && <img src={Arrow} />}
    </StyledButton>
  );
};

export default Button;
