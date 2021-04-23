import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { PageContainer } from './PageContainer';

const renderPageContainer = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <PageContainer>
          <h1>test</h1>
        </PageContainer>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('PageContainer', () => {
  it('should create', () => {
    const { getByText } = renderPageContainer();

    expect(getByText('test')).toBeTruthy();
  });
});
