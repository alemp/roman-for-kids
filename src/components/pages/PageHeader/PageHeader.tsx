import React from 'react';
import { Header } from '../../styled';

interface Props {
  title: string;
  subTitle: string;
}

export const PageHeader = (props: Props) => {
  const { title, subTitle } = props;

  const Title: JSX.Element = (<div><h1>{ title }</h1></div>);
  const SubTitle: JSX.Element = (<div><h2>{ subTitle }</h2></div>);

  return (
    <Header data-testid="header">
      { Title }
      { SubTitle }
    </Header>
  );
};
