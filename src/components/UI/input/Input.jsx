import styled from "styled-components";

export const Input = ({ type, placeholder, value, onChange, id }) => {
  return (
    <StyledInput
    id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
const StyledInput = styled.input`
    padding: 5px;
    border: none;
    border-radius: 6px;
`