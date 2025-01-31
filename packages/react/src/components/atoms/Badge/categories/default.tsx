import { base } from '../styles/base.css';

import * as s from '../styles/default.css';

import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack } from '@cottons-kr/react-foundation';

import { Icon } from '@/components/foundations/Icon';

import { Typo } from '@/components/foundations/Typography';

import cn from 'classnames';

import { type IconName } from '@/components/foundations/Icon/shared';

import { Weight } from '@/components/foundations/Typography/shared';

import { BadgeSize, BadgeTheme } from '../shared';

const IconSizeMap = {
  [BadgeSize.LARGE]: 18,
  [BadgeSize.SMALL]: 14,
} as const;

const GapMap = {
  [BadgeSize.LARGE]: spacingVars.mini,
  [BadgeSize.SMALL]: spacingVars.optical,
} as const;

type BadgeProps = {
  theme?: BadgeTheme;
  size?: BadgeSize;
  leadingIcon?: IconName;
  label: string;
};

export function DefaultBadge(props: BadgeProps) {
  const { theme = BadgeTheme.MONOCHROME, size = BadgeSize.LARGE, leadingIcon, label } = props;

  const iconSize = IconSizeMap[size];

  const Label = size === BadgeSize.LARGE ? Typo.Tiny : Typo.Mini;

  return (
    <HStack
      fitContent
      className={cn(s[theme], s[size], base)}
      align='center'
      gap={GapMap[size]}
    >
      {leadingIcon && (
        <Icon
          name={leadingIcon}
          size={iconSize}
        />
      )}

      <Label weight={Weight.MEDIUM}>{label}</Label>
    </HStack>
  );
}
