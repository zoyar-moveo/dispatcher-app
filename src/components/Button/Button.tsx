import { StyledButton } from "./styles";

export interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton>click</StyledButton>;
};

export default Button;
