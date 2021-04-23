import { initialState } from '../../../store/slices/roman';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { dispatchMock, useDispatchMock, useSelectorMock } from '../../../testing';
import { ButtonNumeric } from './ButtonNumeric';

const renderButtonNumeric = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <ButtonNumeric>1</ButtonNumeric>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('ButtonNumeric', () => {
  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it('should call setNumericValue dispatch on click', () => {
    useSelectorMock.mockReturnValue(initialState);
    useDispatchMock.mockReturnValue(dispatchMock);

    const { getByText } = renderButtonNumeric();

    fireEvent.click(getByText('1'));

    expect(dispatchMock).toHaveBeenCalledWith({
      payload: '1',
      type: 'roman/setNumericValue',
    });
  });
});
