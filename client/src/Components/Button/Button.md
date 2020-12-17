```js
<Button
  width="80%"
  radius="28px"
  text="Play"></Button>
```

```js padded
const [
  isDisabled,
  setIsDisabled,
] = React.useState(false);
<div>
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
</div>;
```

```js padded
<Button width="15%" radius="20px" text="Der"></Button>
<Button width="15%" radius="20px" text="Die"></Button>
<Button width="15%" radius="20px" text="Das"></Button>
```
