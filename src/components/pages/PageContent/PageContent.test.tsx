import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { PageContent } from './PageContent';

const renderPageContent = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <PageContent>
          <h1>test</h1>
        </PageContent>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('PageContainer', () => {
  it('should create', () => {
    const { getByText } = renderPageContent();

    expect(getByText('test')).toBeTruthy();
  });
});
