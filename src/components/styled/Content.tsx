import styled from 'styled-components';

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  ${ props => props.theme.responsive.phone } {
    width: 100%;
  }
  
  ${ props => props.theme.responsive.phablet } {
    width: 75%;
  }
  
  ${ props => props.theme.responsive.tablet } {
    width: 50%;
  }
  
  ${ props => props.theme.responsive.desktop } {
    width: 30%;
  }
`;
