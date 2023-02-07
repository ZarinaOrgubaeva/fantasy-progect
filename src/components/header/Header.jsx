import styled from "styled-components";
import { Button } from "../UI/button/Button";
export const Header = () => {
  return (
    <HeaderStyled>
      <h2>Custom Hook</h2>
      <div>
        <Button>Counter</Button>
        <Button>Form</Button>
        <Button>Timer</Button>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  height: 5rem;
  background-color: #ababe9;
  display: flex;
  justify-content: flex-end;
  h2{
    color: #5c4572;
  }
`;
