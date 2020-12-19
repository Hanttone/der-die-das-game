```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';
import theme from '../../Services/themes.js';
import GlobalStyle from '../../Services/GlobalStyle.js';

const [mode, setMode] = React.useState('dark');

<>
  <AppThemeProvider mode={mode}>
    <GlobalStyle />
    <Button
      width="80%"
      radius="28px"
      text="Play"></Button>
  </AppThemeProvider>
</>;
```

```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';
import theme from '../../Services/themes.js';
import GlobalStyle from '../../Services/GlobalStyle.js';

const [mode, setMode] = React.useState('dark');

<>
  <AppThemeProvider mode={mode}>
    <GlobalStyle />
    <Button
      width="80%"
      radius="28px"
      text="Submit"></Button>
  </AppThemeProvider>
</>;
```

```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';
import theme from '../../Services/themes.js';
import GlobalStyle from '../../Services/GlobalStyle.js';

const [mode, setMode] = React.useState('dark');

<>
  <AppThemeProvider mode={mode}>
    <GlobalStyle />
    <Button
      width="80%"
      radius="28px"
      text="Replay"></Button>
  </AppThemeProvider>
</>;
```

```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';
import theme from '../../Services/themes.js';
import GlobalStyle from '../../Services/GlobalStyle.js';

const [mode, setMode] = React.useState('dark');

<>
  <AppThemeProvider mode={mode}>
    <GlobalStyle />
    <Button
      width="80%"
      radius="28px"
      text="High Score"></Button>
  </AppThemeProvider>
</>;
```

```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';
import theme from '../../Services/themes.js';
import GlobalStyle from '../../Services/GlobalStyle.js';

const [mode, setMode] = React.useState('light');

<>
  <AppThemeProvider mode={mode}>
    <Button
      width="80%"
      radius="28px"
      text="End Game"
    />
  </AppThemeProvider>
</>;
```

```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';
import theme from '../../Services/themes.js';
import GlobalStyle from '../../Services/GlobalStyle.js';

const [mode, setMode] = React.useState('dark');

<>
  <AppThemeProvider mode={mode}>
    <GlobalStyle />
    <Button
      width="80%"
      radius="28px"
      text="End Game"></Button>
  </AppThemeProvider>
</>;
```

```js padded
import AppThemeProvider from '../../Services/AppThemeProvider.js';
import theme from '../../Services/themes.js';
import GlobalStyle from '../../Services/GlobalStyle.js';
const [
  isDisabled,
  setIsDisabled,
] = React.useState(true);
const [mode, setMode] = React.useState('dark');
<>
  <AppThemeProvider mode={mode}>
    <Button
      width="15%"
      radius="20px"
      text="der"
      onPlayerClick={() =>
        setIsDisabled(!isDisabled)
      }></Button>

    <Button
      width="15%"
      radius="20px"
      text="der"
      disabled={isDisabled}></Button>
  </AppThemeProvider>
</>;
```

```js padded
import AppThemeProvider from '../../Services/AppThemeProvider.js';
import theme from '../../Services/themes.js';
import GlobalStyle from '../../Services/GlobalStyle.js';

const [mode, setMode] = React.useState('dark');

<>
  <AppThemeProvider mode={mode}>
    <Button
      width="15%"
      radius="20px"
      text="der"></Button>
    <Button
      width="15%"
      radius="20px"
      text="die"></Button>
    <Button
      width="15%"
      radius="20px"
      text="das"></Button>
  </AppThemeProvider>
</>;
```
