import { initialState } from '../../../store/slices/roman';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ButtonBase } from './ButtonBase';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { useSelectorMock } from '../../../testing';

const renderButtonBase = (label: string): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <ButtonBase>{ label }</ButtonBase>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('ButtonBase', () => {
  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it('should not be disabled', () => {
    useSelectorMock.mockReturnValue(initialState);
    const { getByText } = renderButtonBase('test');
    expect(getByText('test').closest('button')).not.toHaveAttribute('disabled');
  });

  it('should be disabled if show result', () => {
    useSelectorMock.mockReturnValue({
      ...initialState,
      showResult: true,
    });

    const { getByText } = renderButtonBase('test');
    expect(getByText('test').closest('button')).toHaveAttribute('disabled');
  });

  it('should be disabled if has error', () => {
    useSelectorMock.mockReturnValue({
      ...initialState,
      error: 'maxNumberReached',
    });

    const { getByText } = renderButtonBase('test');
    expect(getByText('test').closest('button')).toHaveAttribute('disabled');
  });
});
