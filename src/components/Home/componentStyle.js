import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const MeetupCard = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isRegistered ? '#2563eb' : '#334155')};
  font-weight: ${props => (props.isRegistered ? '700' : '500')};
  font-size: ${props => (props.isRegistered ? '40px' : '30px')};
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isRegistered ? '#334155' : '#475569')};
  font-weight: ${props => (props.isRegistered ? '700' : '400')};
  font-size: ${props => (props.isRegistered ? '30px' : '20px')};
`
export const Button = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  background-color: #3b82f6;
  border-radius: 5px;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  outline: none;
  cursor: pointer;
`
export const LinkEl = styled(Link)`
  text-decoration: none;
`
export const RegisterImage = styled.img`
  width: 50%;
`
