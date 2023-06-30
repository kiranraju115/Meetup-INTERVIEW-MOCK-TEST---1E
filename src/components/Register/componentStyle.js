import styled from 'styled-components'

export const RegisterContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

export const RegisterBody = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterImage = styled.img`
  width: 30%;
`
export const RegisterForm = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RegisterHeading = styled.h1`
  width: 80%;
  font-family: 'Roboto';
  color: #334155;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 20px;
`
export const Label = styled.label`
  width: 80%;
  font-family: 'Roboto';
  color: #64748b;
  font-weight: 500;
  font-size: 14px;
`
export const UserInput = styled.input`
  width: 80%;
  height: 30px;
  background-color: transparent;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  outline: none;
  width: 80%;
  font-family: 'Roboto';
  color: #475569;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 30px;
  padding-left: 10px;
`

export const Option = styled.option``

export const RegisterButton = styled.button`
  width: 150px;
  height: 30px;
  border: none;
  background-color: #3b82f6;
  border-radius: 5px;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  align-self: flex-start;
  margin: 0px 0px 0px 68px;
  outline: none;
  cursor: pointer;
`
export const Error = styled.p`
  width: 80%;
  font-family: 'Roboto';
  color: #ff0b37;
  font-weight: 400;
  font-size: 14px;
`
