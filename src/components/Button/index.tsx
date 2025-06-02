import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ isValid, title, onClick }: IButtonProps) => {
  return <ButtonContainer 
    className={!isValid ? 'disabled': ''} 
    onClick={onClick}>
      {title}
    </ButtonContainer>;
};

export default Button;
