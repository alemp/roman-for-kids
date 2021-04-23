import { initialState } from '../../../store/slices/roman';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { dispatchMock, useDispatchMock, useSelectorMock } from '../../../testing';
import { ButtonRoman } from './ButtonRoman';

const renderButtonRoman = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <ButtonRoman>X</ButtonRoman>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('ButtonRoman', () => {
  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it('should call setRomanValue dispatch on click', () => {
    useSelectorMock.mockReturnValue(initialState);
    useDispatchMock.mockReturnValue(dispatchMock);

    const { getByText } = renderButtonRoman();

    fireEvent.click(getByText('X'));

    expect(dispatchMock).toHaveBeenCalledWith({
      payload: 'X',
      type: 'roman/setRomanValue',
    });
  });
});
