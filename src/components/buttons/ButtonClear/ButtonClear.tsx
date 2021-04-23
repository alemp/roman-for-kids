import { Button } from '../../styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../../store/slices/roman';
import { Store } from '../../../store/store';

export const ButtonClear = () => {
  const dispatch = useDispatch();
  const { error, showResult } = useSelector((state: Store) => state.romanReducer);

  const handleClick = () => {
    dispatch(reset());
  };

  return (
    <Button clear error={Boolean(error) || showResult} type="button" onClick={ handleClick } data-testid="clear">C</Button>
  );
};
