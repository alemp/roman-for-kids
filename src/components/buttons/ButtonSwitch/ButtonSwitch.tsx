import { Button } from '../../styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setViewMode } from '../../../store/slices/roman';
import { Store } from '../../../store/store';

export const ButtonSwitch = () => {
  const dispatch = useDispatch();
  const { viewMode } = useSelector((state: Store) => state.romanReducer);

  const handleClick = () => {
    if (viewMode === 'numeric') {
      dispatch(setViewMode('roman'));
    } else {
      dispatch(setViewMode('numeric'));
    }
  };

  return (
    <Button switch type="button" onClick={ handleClick }>switch view</Button>
  );
};
