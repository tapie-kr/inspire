import * as s from '../styles/indicator.css'

import { BadgeSize, BadgeTheme } from '../shared'
import cn from 'classnames'

type IndicatorBadgeProps = {
  theme?: BadgeTheme,
  size?: BadgeSize,
}

export function IndicatorBadge(props: IndicatorBadgeProps) {
  const {
    theme = BadgeTheme.MONOCHROME,
    size = BadgeSize.LARGE,
  } = props

  return <>
    <div className={cn(s.indicator, s[theme], s[size])} />
  </>
}
