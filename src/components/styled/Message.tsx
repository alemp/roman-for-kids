import styled from 'styled-components';

export const Message = styled.span`
  padding: 20px;
  color: ${ props => props.theme.colors.red };
  font-size: ${ props => props.theme.font.size };
`;
