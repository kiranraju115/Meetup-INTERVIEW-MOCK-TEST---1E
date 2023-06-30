import styled from 'styled-components'

export const NotFoundCard = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundFoundImage = styled.img`
  width: 30%;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.yes ? ' #7b8794' : '#334155')};
  font-weight: ${props => (props.yes ? ' 400' : '700')};
  font-size: ${props => (props.yes ? ' 14px' : '30px')};
`
