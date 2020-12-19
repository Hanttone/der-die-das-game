```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';

const [isToggled, setIsToggled] = React.useState(
  false
);
function changeMode() {
  if (mode === 'dark') {
    setIsToggled(!isToggled);
  } else {
    setIsToggled(!isToggled);
  }
}

<>
  <AppThemeProvider mode="dark">
    <Switch
      checked={isToggled}
      onChange={changeMode}
    />
  </AppThemeProvider>
</>;
```
