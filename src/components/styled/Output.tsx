import styled from 'styled-components';

interface Props {
  error?: boolean
  showResult?: boolean
}

export const Output = styled.span<Props>`
  align-items: center;
  border: ${ props => `${ props.theme.border.width } solid ${ props.theme.border.color }` };
  background-color: ${
    props => props.error ? props.theme.colors.red :
      props.showResult ? props.theme.colors.green :
        props.theme.colors.white
  };
  color: ${ props => props.error || props.showResult ? props.theme.colors.white : 'inherit' };
  display: flex;
  font-size: 2em;
  font-weight: 700;
  height: 70px;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
  width: 100%;
`;
