import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
const ServiceSes = styled.h1`
  background: linear-gradient(to bottom right, yellow, black);
  color: white;
  font-size: ${props => props.large ? "4rem" : '2rem'}
`
export const HomeSubTitle = styled.h2`
  color: white;
  background: green;
  font-size: 23px;
`
export const MyButton = styled(Button)`
  border-radius: 20px !important;
  color: red !important;
`
export default ServiceSes;