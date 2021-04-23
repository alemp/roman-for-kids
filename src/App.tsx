import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styled/theme';
import { PageMain } from './components';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <PageMain/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
