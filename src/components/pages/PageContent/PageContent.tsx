import React from 'react';
import { Content } from '../../styled';

interface Props {
  children: any
}

export const PageContent = (props: Props) => {
  const { children } = props;

  return (
    <Content>
      { children }
    </Content>
  );
};
