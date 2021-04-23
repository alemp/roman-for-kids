import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleResult } from '../../../store/slices/roman';
import { ButtonBase } from '../ButtonBase/ButtonBase';

export const ButtonResult = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleResult());
  };

  return (
    <ButtonBase calc onClick={ handleClick }>=</ButtonBase>
  );
};
