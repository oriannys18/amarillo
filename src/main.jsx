import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HooksApp from './HooksApp';
import { CounterApp } from './01-useState/CounterApp';
import { Layout } from './05-useLayoutEffect/Layout';
import { Memorize } from './06-memos/Memorize';
import { MemoHook } from './06-memos/MemoHook';
import { CalbackHooks } from './06-memos/CalbackHooks';
import { Padre } from './07-tarea-memo/Padre';

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <Padre/>
  //</StrictMode>,
);
