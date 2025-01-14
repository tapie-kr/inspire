import * as s from './styles.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack } from '@cottons-kr/react-foundation';
import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Typo } from '@/components/foundations/Typography';

import cn from 'classnames';

type LabelProps = {
  isEssential?: boolean;
  isDisabled?: boolean;
  children?: string;
};

export function Label(props: LabelProps) {
  const { isEssential, isDisabled } = props;

  return (
    <HStack
      className={cn(s.base, isDisabled && s.disabled)}
      fitContent
      align='center'
      gap={spacingVars.mini}
    >
      <Typo.Base>{props.children}</Typo.Base>
      <Icon
        name={isEssential && GlyphIcon.ASTERISK}
        size={12}
        color={isDisabled ? colorVars.solid.translucent.red._30 : colorVars.solid.red}
      />
    </HStack>
  );
}
