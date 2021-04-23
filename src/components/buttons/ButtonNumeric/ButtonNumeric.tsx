import React from 'react';
import { useDispatch } from 'react-redux';
import { setNumericValue } from '../../../store/slices/roman';
import { ButtonBase } from '../ButtonBase/ButtonBase';

interface Props {
  children: string;
}

export const ButtonNumeric = (props: Props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setNumericValue(children));
  };

  const { children } = props;
  return (
    <ButtonBase onClick={ handleClick }>{ children }</ButtonBase>
  );
};
