import { ThemeProvider } from 'styled-components/macro';
import theme from './themes';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { GameUpdateProvider } from './Context';

export default function AppThemeProvider({
  children,
  mode,
}) {
  return (
    <ThemeProvider theme={theme[mode]}>
      <Router>
        <GlobalStyle />
        <GameUpdateProvider>
          {children}
        </GameUpdateProvider>
      </Router>
    </ThemeProvider>
  );
}
