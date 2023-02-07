import styled from "styled-components";
import { useTimer } from "../useTimer";
import { Button } from "../../UI/button/Button";
export const Timer = () => {
  const { timer, startHandler, restartHandler, stopHandler } = useTimer(60);
  return (
    <Card>
      <StyledTimer>
        Timer:{timer}
      </StyledTimer>
      <Button onClick={startHandler}>Start</Button>
      <Button onClick={restartHandler}>Restart</Button>
      <Button onClick={stopHandler}>Stop</Button>
    </Card>
  );
};

const StyledTimer = styled.h2`
  text-align: center;
  color: blueviolet;
`;
const Card = styled.div`
  padding: 20px 25px;
  margin: 30px auto;
  width: 480px;
  border-radius: 20px;
  -webkit-box-shadow: -1px 1px 9px 14px rgba(81, 84, 86, 0.2);
  -moz-box-shadow: -1px 1px 9px 14px rgba(81, 84, 86, 0.2);
  box-shadow: -1px 1px 9px 14px rgba(81, 84, 86, 0.2);
  Button {
    margin-left: 5rem;
    margin-top: 2rem;
  }
`;
