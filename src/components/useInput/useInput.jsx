import { useState, useEffect } from "react";
export const useInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    setFormIsValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(email.includes("@"));
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    setIsPasswordValid(password.trim().length > 6);
  };
  return {
    email,
    password,
    formIsValid,
    emailChangeHandler,
    passwordChangeHandler,
  };
};
