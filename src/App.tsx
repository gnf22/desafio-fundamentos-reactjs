import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Routes from './routes';

import GlobalStyle from './styles/global';

import Header from './components/Header';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header toggleTheme={toogleTheme} />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
