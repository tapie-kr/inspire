import '@/styles/color/index.css';
import '@/styles/component/index.css';
import '@/styles/typography/index.css';
import '@/styles/interactive.css';
import '@/styles/utility.css';
import { resetGlobalStyle } from './layer.css';
import { inspireFontKit } from './typography/index.css';
import { colorVars } from '@/lib/style/contract/color.css';

import { getCSSTransition } from '@/lib';

resetGlobalStyle('html, body', {
  background: colorVars.surface.default,
  color: colorVars.content.emphasized,
  wordBreak: 'keep-all',
  wordWrap: 'break-word',
  scrollBehavior: 'smooth',
});

resetGlobalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily: inspireFontKit,
  fontSynthesis: 'none',
  transition: [
    getCSSTransition('background-color', 0.3),
    getCSSTransition('background', 0.3),
    getCSSTransition('border-color', 0.3),
    getCSSTransition('box-shadow', 0.3),
  ].join(', '),
});

resetGlobalStyle('*:focus', {
  outline: 'none',
});

resetGlobalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
});

resetGlobalStyle('input, textarea, button', {
  fontFamily: 'inherit',
  color: 'inherit',
  background: 'transparent',
  border: 'none',
  outline: 'none',
});

resetGlobalStyle('::-webkit-scrollbar', {
  display: 'none',
});
