import { ButtonContainer } from "./styles";
import Arrow from "./assets/arrow-right.svg";

type primary = "primary";
type secondary = "secondary";
type textBtn = "text-btn";
type welcomeBtn = "welcome-btn";

// const btnType = {
//   PRIMARY: "primary",
//   SECONDARY: "secondary",
//   TEXTBTN: "text-btn",
//   WELCOMEBTN: "welcome-btn",
// };
export type btnTypeList = primary | secondary | textBtn | welcomeBtn;

export interface ButtonProps {
  text: string;
  isArrow: boolean;
  btnType: btnTypeList;
  onClickFunc: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  isArrow,
  btnType,
  onClickFunc,
}) => {
  return (
    <ButtonContainer btnType={btnType} onClick={onClickFunc}>
      {text + " "}
      {isArrow && <img src={Arrow} />}
    </ButtonContainer>
  );
};

export default Button;
