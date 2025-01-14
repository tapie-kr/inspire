import '@/styles/color/index.css';
import '@/styles/component/index.css';
import '@/styles/typography/index.css';
import '@/styles/interactive.css';
import '@/styles/utility.css';
import { inspireFontKit } from './typography/index.css';
import { colorVars } from '@/lib/style/contract/color.css';

import { globalStyle } from '@vanilla-extract/css';
import { getCSSTransition } from '@/lib';

globalStyle('html, body', {
  background: colorVars.surface.default,
  color: colorVars.content.emphasized,
  wordBreak: 'keep-all',
  wordWrap: 'break-word',
  scrollBehavior: 'smooth',
});

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily: inspireFontKit,
  fontSynthesis: 'none',
  WebkitFontSmoothing: 'antialiased',
  transition: [
    getCSSTransition('background-color', 0.3),
    getCSSTransition('background', 0.3),
    getCSSTransition('border-color', 0.3),
    getCSSTransition('box-shadow', 0.3),
  ].join(', '),
});

globalStyle('*:focus', {
  outline: 'none',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
});

globalStyle('input, textarea, button', {
  fontFamily: 'inherit',
  color: 'inherit',
  background: 'transparent',
  border: 'none',
  outline: 'none',
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});
