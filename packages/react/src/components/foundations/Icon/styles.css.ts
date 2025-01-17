import { componentStyle } from '@/styles/layer.css';

export const base = componentStyle({
  fill: 'currentColor',
  flexShrink: 0,
  userSelect: 'none',
  transition: 'color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
});

export const interactive = componentStyle({
  display: 'inline-block',
  flexShrink: 0,
  cursor: 'pointer',
});
