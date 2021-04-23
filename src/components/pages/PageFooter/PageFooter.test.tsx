import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import { PageFooter } from './PageFooter';

const DEVELOPER = 'Developer';
const YEAR = 2021;
const URL = 'https://url.com';

const renderPageFooter = (): RenderResult => {
  return render(
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <PageFooter madeBy={ DEVELOPER } year={ YEAR } url={ URL }/>
      </Provider>,
    </ThemeProvider>,
  );
};

describe('PageContainer', () => {
  it('should have text', () => {
    const { getByTestId } = renderPageFooter();

    const expectedText = `Made by ${ DEVELOPER } in ${ YEAR }.`;
    expect(getByTestId('footer')).toHaveTextContent(expectedText);
  });
});
