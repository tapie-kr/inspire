import * as s from '../styles/text.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack } from '@cottons-kr/react-foundation';
import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import { useCallback, useMemo } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';
import { useToggle } from '@/hooks/use-toggle';
import { useInputController } from '../hooks/use-input-controller';
import { type HTMLInputProps } from '../shared';

type InputProps = HTMLInputProps & {
  leadingIcon?: IconName;
  isSecure?: boolean;
};

export function ImagePreviewInput(props: InputProps) {
  const { leadingIcon, isSecure, ...restProps } = props;
  const { value, isFocused, tools, controller } = useInputController(restProps);
  const [hideValue, toggleHideValue] = useToggle(isSecure);

  const hasValue = useMemo(() => value.length > 0, [value]);
  const showClearButton = hasValue;
  const showVisibilityButton = useMemo(() => hasValue && isSecure, [hasValue, isSecure]);

  const handleVisibilityButton = useCallback(() => toggleHideValue(), [toggleHideValue]);
  const handleClearButton = useCallback(() => tools.clearValue(), [tools]);

  return (
    <HStack
      tag='label'
      className={s.base}
      align='center'
      fullWidth
      gap={spacingVars.mini}
    >
      <HStack
        align='center'
        gap={spacingVars.micro}
      >
        <Icon
          name={leadingIcon}
          color={isFocused && colorVars.content.emphasized}
        />
        <input
          {...restProps}
          className={s.input}
          type={hideValue ? 'password' : 'text'}
          {...controller}
        />
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
