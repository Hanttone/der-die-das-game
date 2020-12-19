```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';
import theme from '../../Services/themes.js';
import GlobalStyle from '../../Services/GlobalStyle.js';

const [mode, setMode] = React.useState('dark');
const [isToggled, setToggled] = React.useState(
  false
);
function changeMode() {
  if (mode === 'dark') {
    setMode('light');
    setIsToggled(!isToggled);
  } else {
    setMode('dark');
    setIsToggled(!isToggled);
  }
}

<>
  <AppThemeProvider mode={mode}>
    <GlobalStyle color={mode} />
    <Switch
      checked={isToggled}
      onChange={changeMode}
    />
  </AppThemeProvider>
</>;
```
