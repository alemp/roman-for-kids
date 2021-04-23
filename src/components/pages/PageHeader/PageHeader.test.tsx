import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { PageHeader } from './PageHeader';

const TITLE = 'title';
const SUB_TITLE = 'sub title';

const renderPageHeader = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <PageHeader title={ TITLE } subTitle={ SUB_TITLE }/>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('PageHeader', () => {
  it('should have texts', () => {
    const { getByTestId } = renderPageHeader();

    expect(getByTestId('header')).toHaveTextContent(TITLE);
    expect(getByTestId('header')).toHaveTextContent(SUB_TITLE);
  });
});
