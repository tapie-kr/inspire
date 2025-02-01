import * as s from '../styles/indicator.css';

import cn from 'classnames';

import { BadgeSize, BadgeTheme } from '../shared';

type IndicatorBadgeProps = {
  theme?: BadgeTheme;
  size?:  BadgeSize;
};

export function IndicatorBadge(props: IndicatorBadgeProps) {
  const { theme = BadgeTheme.MONOCHROME, size = BadgeSize.LARGE } = props;

  return <div className={cn(s.indicator, s[theme], s[size])} />;
}
