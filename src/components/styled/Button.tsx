import styled from 'styled-components';
import { pulse } from './animations';

interface Props {
  calc?: boolean
  clear?: boolean
  switch?: boolean
  error?: boolean
}

export const Button = styled.button<Props>`
  background-color: ${
    props => props.disabled ? props.theme.colors.lightGray :
      props.calc ? props.theme.colors.green :
      props.clear ? props.theme.colors.red :
        props.switch ? props.theme.colors.blue :
          
          'white'
  };
  color: ${
    props => props.calc || props.clear || props.switch || props.disabled ? 'white' : 'inherit'
  };
  border-radius: ${ props => props.theme.border.radius };
  border: ${ 
    props => `${ 
      props.theme.border.width } solid ${ props.disabled ? 
      props.theme.colors.lightGray : props.theme.border.color 
    }` 
  };
  font-size: ${ props => props.theme.font.size };
  font-weight: ${ props => props.clear || props.calc ? 700 : 'inherit' };
  height: 50px;
  margin: 1em;
  padding: 0.25em 1em;
  width: ${ props => props.switch ? '100%' : '65px' };
  animation-name: ${ props => props.error ? pulse : '' };
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;
