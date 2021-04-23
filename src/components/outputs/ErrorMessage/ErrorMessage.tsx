import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../store/store';
import { Message } from '../../styled';

export const INVALID_NUMERIC_MESSAGE = 'The maximum value is 3999.';
export const INVALID_ROMAN_MESSAGE = 'Invalid roman numeral';

export const ErrorMessage = () => {
  const { error } = useSelector((state: Store) => state.romanReducer);

  const errorMessage: string = error === 'invalidRomanValue' ? INVALID_ROMAN_MESSAGE :
    error === 'maxNumberReached' ? INVALID_NUMERIC_MESSAGE :
      '';

  return (
    <Message>{ errorMessage }</Message>
  );
};
