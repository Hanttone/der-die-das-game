import { ThemeProvider } from 'styled-components/macro';
import theme from './themes';

export default function AppThemeProvider({
  children,
  mode,
}) {
  return (
    <ThemeProvider theme={theme[mode]}>
      {children}
    </ThemeProvider>
  );
}
