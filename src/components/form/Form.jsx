import { useInput } from "../useInput/useInput";
import styled from "styled-components";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
export const Form = () => {
  const {
    email,
    password,
    formIsValid,
    emailChangeHandler,
    passwordChangeHandler,
  } = useInput();
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <label>Email</label>
      <Input
        placeholder="Email"
        id="email"
        value={email}
        onChange={emailChangeHandler}
      />
      <label>Password</label>
      <Input
        placeholder="Password"
        id="password"
        type="password"
        value={password}
        onChange={passwordChangeHandler}
      />
      <Button type="submit" disabled={!formIsValid}>
        Sign in{" "}
      </Button>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: darkblue;
  width: 400px;
  border-radius: 12px;
  label {
    color: white;
    margin-left: 7rem;
    margin-top: 1rem;
  }
  Button {
    margin-left: 15rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
