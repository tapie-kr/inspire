import { Icon } from '@/components/foundations/Icon';
import * as s from './styles.css';

import { Typo } from '@/components/foundations/Typography';
import { Color, Spacing } from '@/constants';
import { HStack } from '@cottons-kr/react-foundation';
import cn from 'classnames';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

type LabelProps = {
  disabled?: boolean;
  children?: string;
};

export function Label(props: LabelProps) {
  const { disabled = false } = props;

  return (
    <>
      <HStack
        className={cn(s.base, disabled && s.disabled)}
        fitContent
        align="center"
        justify="center"
        gap={Spacing.Mini}>
        <Typo.Base>{props.children}</Typo.Base>
        <Icon
          name={GlyphIcon.ASTERISK}
          size={12}
          color={disabled ? Color.Solid.Translucent.Red._30 : Color.Solid.Red}
        />
      </HStack>
    </>
  );
}
