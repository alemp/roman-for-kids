import React from 'react';
import { Container, Wrapper } from '../../styled';

interface Props {
  children: any
}

export const PageContainer = (props: Props) => {
  const { children } = props;

  return (
    <Wrapper>
      <Container>
        { children }
      </Container>
    </Wrapper>
  );
};
