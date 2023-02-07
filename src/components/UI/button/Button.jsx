import styled from "styled-components"

export const Button = ({children,onClick, disabled})=>{
    return <BtnStyled onClick={onClick} disabled={disabled}>{children}</BtnStyled>
}
const BtnStyled= styled.button`
    background-color: #7c7ed4;
    border: none;
    margin-left: 1rem;
    height: 2rem;
    border-radius: 12px;
`