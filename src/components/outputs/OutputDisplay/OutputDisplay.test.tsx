import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { useSelectorMock } from '../../../testing';
import { initialState } from '../../../store/slices/roman';
import { OutputDisplay } from './OutputDisplay';

const renderOutputDisplay = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <OutputDisplay/>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('OutputDisplay', () => {
  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it('should show numeric value on view mode roman as result', () => {
    useSelectorMock.mockReturnValue({
      ...initialState,
      showResult: true,
      viewMode: 'roman',
      romanValue: 'I',
      numericValue: '1',
    });

    const { getByText } = renderOutputDisplay();

    expect(getByText('1')).toBeTruthy();
  });

  it('should show numeric value on view mode numeric', () => {
    useSelectorMock.mockReturnValue({
      ...initialState,
      showResult: false,
      viewMode: 'numeric',
      romanValue: 'I',
      numericValue: '1',
    });

    const { getByText } = renderOutputDisplay();

    expect(getByText('1')).toBeTruthy();
  });

  it('should show roman value on view mode numeric as result', () => {
    useSelectorMock.mockReturnValue({
      ...initialState,
      showResult: true,
      viewMode: 'numeric',
      romanValue: 'I',
      numericValue: '1',
    });

    const { getByText } = renderOutputDisplay();

    expect(getByText('I')).toBeTruthy();
  });

  it('should show roman value on view mode roman', () => {
    useSelectorMock.mockReturnValue({
      ...initialState,
      showResult: false,
      viewMode: 'roman',
      romanValue: 'I',
      numericValue: '1',
    });

    const { getByText } = renderOutputDisplay();

    expect(getByText('I')).toBeTruthy();
  });
});
