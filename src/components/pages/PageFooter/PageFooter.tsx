import React from 'react';
import { Footer } from '../../styled';

interface Props {
  madeBy: any
  year: number
  url: string
}



export const PageFooter = (props: Props) => {
  const { madeBy, year, url } = props;

  return (
    <Footer data-testid="footer">Made by &nbsp;<a href={ url } target="_blank" rel="noreferrer">{ madeBy }</a>&nbsp; in { year }.</Footer>
  );
};
