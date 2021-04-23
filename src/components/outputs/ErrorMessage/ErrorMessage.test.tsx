import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { ErrorMessage, INVALID_NUMERIC_MESSAGE, INVALID_ROMAN_MESSAGE } from './ErrorMessage';
import { dispatchMock, useSelectorMock } from '../../../testing';
import { initialState } from '../../../store/slices/roman';

const renderErrorMessage = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <ErrorMessage/>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('ErrorMessage', () => {
  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it('should show numeric error message', () => {
    useSelectorMock.mockReturnValue({
      ...initialState,
      error: 'maxNumberReached',
    });

    const { getByText } = renderErrorMessage();

    expect(getByText(INVALID_NUMERIC_MESSAGE)).toBeTruthy();
  });

  it('should show roman error message', () => {
    useSelectorMock.mockReturnValue({
      ...initialState,
      error: 'invalidRomanValue',
    });

    const { getByText } = renderErrorMessage();

    expect(getByText(INVALID_ROMAN_MESSAGE)).toBeTruthy();
  });
});
