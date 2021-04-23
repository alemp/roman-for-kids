import React from 'react';
import { useDispatch } from 'react-redux';
import { setRomanValue } from '../../../store/slices/roman';
import { ButtonBase } from '../ButtonBase/ButtonBase';

interface Props {
  children: string;
}

export const ButtonRoman = (props: Props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setRomanValue(children));
  };

  const { children } = props;
  return (
    <ButtonBase onClick={ handleClick }>{ children }</ButtonBase>
  );
};
