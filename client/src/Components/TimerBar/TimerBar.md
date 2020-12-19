import AppThemeProvider from '../../Services/AppThemeProvider.js';
import {
useEffect,
useRef,
useState,
} from 'react';

const [countDown, setCounter] = useState(10);
const timer = useRef();

<AppThemeProvider mode="dark">
  <TimerBar />
</AppThemeProvider>;
