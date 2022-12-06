import { ButtonContainer, Buttonzero } from "./styles";

const Button = ({label, onClick}) => {
  
  
  return (
    <ButtonContainer onClick={onClick} type="button">
       {label}
    </ButtonContainer>
  );
}

const ButtonZ = ({label, onClick}) => { 
 
  return (
    <Buttonzero onClick={onClick} type="button">
       {label}
    </Buttonzero>
  );
}




export {Button, ButtonZ};

