import * as s from '../styles/text.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack } from '@cottons-kr/react-foundation';
import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import cn from 'classnames';
import { useCallback, useMemo } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';
import { useToggle } from '@/hooks/use-toggle';
import { useTextInputController } from '../hooks/use-text-input-controller';
import { type HTMLInputProps, InputSize } from '../shared';

type TextInputProps = HTMLInputProps & {
  leadingIcon?: IconName;
  isSecure?: boolean;
  size?: InputSize;
};

export function TextInput(props: TextInputProps) {
  const { leadingIcon, isSecure, size = InputSize.LARGE, ...restProps } = props;
  const { value, isFocused, tools, controller } = useTextInputController(restProps);
  const [hideValue, toggleHideValue] = useToggle(isSecure);

  const hasValue = useMemo(() => value.length > 0, [value]);
  const showClearButton = hasValue;
  const showVisibilityButton = useMemo(() => hasValue && isSecure, [hasValue, isSecure]);

  const isLarge = size === InputSize.LARGE;

  const handleVisibilityButton = useCallback(() => toggleHideValue(), [toggleHideValue]);
  const handleClearButton = useCallback(() => tools.clearValue(), [tools]);

  return (
    <HStack
      tag='label'
      className={cn(s.base, isLarge ? s.baseLarge : s.baseMedium)}
      align='center'
      fullWidth
      gap={isLarge ? spacingVars.mini : spacingVars.tiny}
    >
      <HStack
        align='center'
        gap={isLarge ? spacingVars.mini : spacingVars.optical}
      >
        <Icon
          name={leadingIcon}
          color={isFocused && colorVars.content.emphasized}
          size={isLarge ? 24 : 18}
        />
        <HStack className={cn(s.inputContainer)}>
          <input
            {...restProps}
            className={cn(s.input, isLarge ? s.inputLarge : s.inputMedium)}
            type={hideValue ? 'password' : 'text'}
            {...controller}
          />
        </HStack>
      </HStack>
      <HStack
        gap={spacingVars.micro}
        fitContent
      >
        <Icon
          name={
            showVisibilityButton && (hideValue ? GlyphIcon.VISIBILITY : GlyphIcon.DEFAULT) // TODO: Change DEFAULT to VISIBILITY_OFF
          }
          size={20}
          onClick={handleVisibilityButton}
        />
        <Icon
          name={showClearButton && GlyphIcon.CLOSE}
          size={20}
          onClick={handleClearButton}
        />
      </HStack>
    </HStack>
  );
}
