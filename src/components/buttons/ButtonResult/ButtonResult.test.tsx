import { initialState } from '../../../store/slices/roman';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { dispatchMock, useDispatchMock, useSelectorMock } from '../../../testing';
import { ButtonResult } from './ButtonResult';

const renderButtonResult = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <ButtonResult/>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('ButtonResult', () => {
  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it('should call toggleResult dispatch on click', () => {
    useSelectorMock.mockReturnValue(initialState);
    useDispatchMock.mockReturnValue(dispatchMock);

    const { getByText } = renderButtonResult();

    fireEvent.click(getByText('='));

    expect(dispatchMock).toHaveBeenCalledWith({
      payload: undefined,
      type: 'roman/toggleResult',
    });
  });
});
