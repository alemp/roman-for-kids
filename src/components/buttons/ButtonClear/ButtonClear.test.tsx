import { initialState } from '../../../store/slices/roman';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { ButtonClear } from './ButtonClear';
import { dispatchMock, useDispatchMock, useSelectorMock } from '../../../testing';

const renderButtonClear = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <ButtonClear/>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('ButtonClear', () => {
  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it('should call reset dispatch on click', () => {
    useSelectorMock.mockReturnValue(initialState);
    useDispatchMock.mockReturnValue(dispatchMock);

    const { getByText } = renderButtonClear();

    fireEvent.click(getByText('C'));

    expect(dispatchMock).toHaveBeenCalledWith({
      payload: undefined,
      type: 'roman/reset',
    });
  });
});
