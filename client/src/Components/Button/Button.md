#### Main button examples:

```js
import AppThemeProvider from '../../Services/AppThemeProvider';

<>
  <AppThemeProvider mode={mode}>
    <Button
      width="80%"
      radius="28px"
      text="Play"
    />
  </AppThemeProvider>
</>;
```

```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';

<>
  <AppThemeProvider mode="dark">
    <Button
      width="80%"
      radius="28px"
      text="Submit"
    />
  </AppThemeProvider>
</>;
```

```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';

<>
  <AppThemeProvider mode="dark">
    <Button
      width="80%"
      radius="28px"
      text="Replay"
    />
  </AppThemeProvider>
</>;
```

```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';
<>
  <AppThemeProvider mode="dark">
    <Button
      width="80%"
      radius="28px"
      text="High Score"
    />
  </AppThemeProvider>
</>;
```

```js
import AppThemeProvider from '../../Services/AppThemeProvider.js';

<>
  <AppThemeProvider mode="dark">
    <Button
      width="80%"
      radius="28px"
      text="End Game"
    />
  </AppThemeProvider>
</>;
```

#### Example of disabled and enabled buttons

```js padded
import AppThemeProvider from '../../Services/AppThemeProvider.js';

const [
  isDisabled,
  setIsDisabled,
] = React.useState(true);

<>
  <AppThemeProvider mode="dark">
    <Button
      width="15%"
      radius="20px"
      text="der"
      onPlayerClick={() =>
        setIsDisabled(!isDisabled)
      }
    />

    <Button
      width="15%"
      radius="20px"
      text="der"
      disabled={isDisabled}
    />
  </AppThemeProvider>
</>;
```

#### Example small game buttons

```js padded
import AppThemeProvider from '../../Services/AppThemeProvider.js';

<>
  <AppThemeProvider mode="dark">
    <Button
      width="15%"
      radius="20px"
      text="der"
    />
    <Button
      width="15%"
      radius="20px"
      text="die"
    />
    <Button
      width="15%"
      radius="20px"
      text="das"
    />
  </AppThemeProvider>
</>;
```
