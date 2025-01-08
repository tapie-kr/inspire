import * as s from '../styles/default.css'

import { IconName } from '@/components/foundations/Icon/shared'
import { BadgeSize, BadgeTheme } from '../shared'
import { HStack } from '@cottons-kr/react-foundation'
import cn from 'classnames'
import { Typo } from '@/components/foundations/Typography'
import { Weight } from '@/components/foundations/Typography/shared'
import { Icon } from '@/components/foundations/Icon'
import { Spacing } from '@/constants'

const IconSizeMap = {
  [BadgeSize.LARGE]: 18,
  [BadgeSize.SMALL]: 14,
} as const

const GapMap = {
  [BadgeSize.LARGE]: Spacing.Mini,
  [BadgeSize.SMALL]: Spacing.Optical,
} as const

type BadgeProps = {
  theme?: BadgeTheme
  size?: BadgeSize
  leadingIcon?: IconName
  label: string
}

export function DefaultBadge(props: BadgeProps) {
  const {
    theme = BadgeTheme.MONOCHROME,
    size = BadgeSize.LARGE,
    leadingIcon, label
  } = props
  const iconSize = IconSizeMap[size]
  const Label = size === BadgeSize.LARGE ? Typo.Tiny : Typo.Mini

  return <>
    <HStack className={cn(s[theme], s[size])} fitContent align='center' gap={GapMap[size]}>
      {leadingIcon && <Icon name={leadingIcon} size={iconSize} />}
      <Label weight={Weight.MEDIUM}>{label}</Label>
    </HStack>
  </>
}
