import '@/styles/color/index.css';
import '@/styles/component/index.css';
import '@/styles/typography/index.css';
import { inspireFontKit } from './typography/index.css';
import { colorVars } from '@/lib/style/contract/color.css';

import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  background: colorVars.surface.default,
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
  transition: `
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `,
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
