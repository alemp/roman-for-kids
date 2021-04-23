import { initialState } from '../../../store/slices/roman';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { dispatchMock, useDispatchMock, useSelectorMock } from '../../../testing';
import { ButtonSwitch } from './ButtonSwitch';

const renderButtonSwitch = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <ButtonSwitch/>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('ButtonSwitch', () => {
  beforeEach(() => {
    useDispatchMock.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it('should call change view mode to numeric on click', () => {
    useSelectorMock.mockReturnValue(initialState);

    const { getByText } = renderButtonSwitch();

    fireEvent.click(getByText('switch view'));

    expect(dispatchMock).toHaveBeenCalledWith({ 'payload': 'numeric', 'type': 'roman/setViewMode' });
  });

  it('should call change view mode to roman on click', () => {
    useSelectorMock.mockReturnValue({
      ...initialState,
      viewMode: 'numeric',
    });

    const { getByText } = renderButtonSwitch();

    fireEvent.click(getByText('switch view'));

    expect(dispatchMock).toHaveBeenCalledWith({ 'payload': 'roman', 'type': 'roman/setViewMode' });
  });
});
