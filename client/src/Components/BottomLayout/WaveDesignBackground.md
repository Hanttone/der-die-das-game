```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';
import theme from '../../Services/themes.js';
import GlobalStyle from '../../Services/GlobalStyle.js';

const [mode, setMode] = React.useState('dark');
<>
  <AppThemeProvider mode={mode}>
    <div
      style={{
        height: '300px',
        width: '300px',
        overflow: 'hidden',
        position: 'relative',
      }}>
      <WaveDesignBackground
        width="200px"
        heigth="200px"
        mode={mode}
      />
    </div>
  </AppThemeProvider>
</>;
```

```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';
import theme from '../../Services/themes.js';
import GlobalStyle from '../../Services/GlobalStyle.js';

const [mode, setMode] = React.useState('light');
<>
  <AppThemeProvider mode="light">
    <div
      style={{
        height: '300px',
        width: '300px',
        overflow: 'hidden',
        position: 'relative',
      }}>
      <WaveDesignBackground
        width="200px"
        heigth="200px"
        mode="light"
      />
    </div>
  </AppThemeProvider>
</>;
```
