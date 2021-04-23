import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { KeyboardNumeric } from './KeyboardNumeric';

const renderKeyboardNumeric = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <KeyboardNumeric/>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('KeyboardNumeric', () => {
  it('should have all keys', () => {
    const { getByText, getByTestId } = renderKeyboardNumeric();

    for (let i = 0; i < 10; i++) {
      expect(getByText(i.toString())).toBeTruthy();
    }

    expect(getByTestId('clear')).toBeTruthy();
    expect(getByText('=')).toBeTruthy();
  });
});
