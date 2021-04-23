import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { KeyboardRoman } from './KeyboardRoman';

const renderKeyboardRoman = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <KeyboardRoman/>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('KeyboardRoman', () => {
  it('should have all keys', () => {
    const { getByText, getAllByText, getByTestId } = renderKeyboardRoman();

    expect(getAllByText('C')).toBeTruthy();
    expect(getByText('D')).toBeTruthy();
    expect(getByText('M')).toBeTruthy();
    expect(getByText('V')).toBeTruthy();
    expect(getByText('X')).toBeTruthy();
    expect(getByText('L')).toBeTruthy();
    expect(getByText('I')).toBeTruthy();

    expect(getByTestId('clear')).toBeTruthy();
    expect(getByText('=')).toBeTruthy();
  });
});
