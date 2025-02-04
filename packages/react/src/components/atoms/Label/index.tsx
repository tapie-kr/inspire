import * as s from './styles.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack } from '@cottons-kr/react-foundation';
import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Typo } from '@/components/foundations/Typography';

import cn from 'classnames';

export enum LabelSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

type LabelProps = {
  isEssential?: boolean;
  isDisabled?:  boolean;
  children?:    string;
  size?:        LabelSize;
};

export function Label(props: LabelProps) {
  const { isEssential, isDisabled, size = LabelSize.LARGE } = props;

  const isLarge = size === LabelSize.LARGE;

  const isMedium = size === LabelSize.MEDIUM;

  const LabelTypo = isLarge ? Typo.Petite : isMedium ? Typo.Tiny : Typo.Mini;

  return (
    <HStack
      fitContent
      className={cn(s.base, isDisabled && s.disabled)}
      align='center'
      gap={spacingVars.mini}
    >
      <LabelTypo>{props.children}</LabelTypo>
      <Icon
        name={isEssential && GlyphIcon.ASTERISK}
        size={isLarge ? 10 : isMedium ? 8 : 6}
        color={isDisabled ? colorVars.solid.translucent.red._30 : colorVars.solid.red}
      />
    </HStack>
  );
}
