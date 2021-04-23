import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../store/store';
import { Button } from '../../styled';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  calc?: boolean
}

export const ButtonBase = (props: Props) => {
  const { showResult, error } = useSelector((state: Store) => state.romanReducer);
  const { children } = props;

  return (
    <Button type="button" disabled={ showResult || Boolean(error) } {...props}>{ children }</Button>
  );
};
