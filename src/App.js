import styled from "styled-components";
import { Form } from "./components/form/Form";
import { Header } from "./components/header/Header";
import { useTheme } from "./components/theme/useTheme";
import { Button } from "./components/UI/button/Button";
import { useCounter } from "./components/useCounter/useCounter";
import { Timer } from "./components/useTimer/Timer/Timer";
function App() {
  const {
    count,
    incrementHandler,
    incrementHandler2,
    decrementHandler,
    decrementHandler2,
    resetHandler,
  } = useCounter(0);
  const { theme, themeDark, themeLight} = useTheme();
  return (
    <div
      style={
        theme === "black"
          ? {
              backgroundColor: "black",
            }
          : {
              backgroundColor: "#ffff",
            }
      }
    >
      <Header />
      <Button onClick={themeDark}>Night</Button>
      <Button onClick={themeLight}>Day</Button>
      <Form />
      <Timer/>
      <Card>
        <h2>
          {count}
        </h2>
        <Button onClick={incrementHandler}>+1</Button>
        <Button onClick={decrementHandler}>-1</Button>
        <Button onClick={incrementHandler2}>+4</Button>
        <Button onClick={decrementHandler2}>-2</Button>
        <Button onClick={resetHandler}>Reset</Button>
      </Card>
    </div>
  );
}

export default App;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  background-color: blueviolet;
  width: 300px;
  height: 100px;
  margin-top: 30px;
  border-radius: 10px;
`;
