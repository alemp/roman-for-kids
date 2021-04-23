import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../store/store';
import { Output } from '../../styled';

export const OutputDisplay = () => {
  const { romanValue, numericValue, viewMode, showResult, error } = useSelector((state: Store) => state.romanReducer);

  const showResultViewMode = (): string => {
    if (showResult) {
      if (viewMode === 'numeric') {
        return romanValue;
      }
      return numericValue;
    } else {
      if (viewMode === 'numeric') {
        return numericValue;
      }
      return romanValue;
    }
  };

  return (
    <Output error={ Boolean(error) } showResult={ showResult }>
      { showResultViewMode() }
    </Output>
  );
};
