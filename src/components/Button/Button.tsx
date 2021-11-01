import { ButtonContainer } from "./styles";
import Arrow from "./assets/arrow-right.svg";

export enum btnTypeList {
  primary = "primary",
  secondary = "secondary",
  textBtn = "textBtn",
  welcomeBtn = "welcomeBtn",
}

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
      {text}
      {isArrow && <img alt="" src={Arrow} />}
    </ButtonContainer>
  );
};

export default Button;
