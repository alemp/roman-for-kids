import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { PageMain } from './PageMain';
import { useSelectorMock } from '../../../testing';
import { initialState } from '../../../store/slices/roman';

const renderPageMain = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <PageMain/>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('PageMain', () => {
  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it('should have roman numeral', () => {
    useSelectorMock.mockReturnValue({
      ...initialState,
      viewMode: 'roman',
    });

    const { getByText } = renderPageMain();

    expect(getByText('X')).toBeTruthy();
  });

  it('should have numeric numeral', () => {
    useSelectorMock.mockReturnValue({
      ...initialState,
      viewMode: 'numeric',
    });

    const { getByText } = renderPageMain();

    expect(getByText('1')).toBeTruthy();
  });
});
