import * as s from '../styles/file.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack } from '@cottons-kr/react-foundation';
import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Typo } from '@/components/foundations/Typography';

import cn from 'classnames';
import React, { useCallback, useMemo } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';
import { useFileInputController } from '../hooks/use-file-input-controller';
import { type HTMLInputProps, InputSize } from '../shared';
import { DraggableFileInput } from './draggable-file';

type FileInputProps = HTMLInputProps & {
  leadingIcon?: IconName;
  size?: InputSize;
};

export function FileInput(props: FileInputProps) {
  const { leadingIcon, size = InputSize.LARGE, placeholder, ...restProps } = props;
  const { files, tools, controller } = useFileInputController();

  const hasValue = useMemo(() => files != null && files.length > 0, [files]);
  const showClearButton = hasValue;

  const isLarge = size === InputSize.LARGE;

  const handleClearButton = useCallback(
    (e: React.MouseEvent<SVGElement>) => {
      e.preventDefault();
      e.stopPropagation();

      setTimeout(() => {
        tools.clearFiles();
      }, 0);
    },
    [tools],
  );

  const Label = isLarge ? Typo.Base : Typo.Petite;

  return (
    <HStack
      className={cn(s.base, isLarge ? s.baseLarge : s.baseMedium)}
      align='center'
      fullWidth
      gap={spacingVars.mini}
    >
      <HStack
        align='center'
        gap={spacingVars.micro}
        fullWidth
        className={cn(s.label, isLarge ? s.labelLarge : s.labelMedium)}
        tag='label'
      >
        <Icon
          name={leadingIcon}
          color={hasValue ? colorVars.content.emphasized : colorVars.content.default}
          size={isLarge ? 24 : 18}
        />
        <HStack
          className={s.inputContainer}
          fullWidth
        >
          <Label
            className={s.inputText}
            nowrap
            color={hasValue && files ? colorVars.content.emphasized : colorVars.content.muted}
          >
            {hasValue && files
              ? files.length === 1
                ? files[0].name
                : `${files[0].name} 외 ${files.length - 1}개`
              : placeholder}
          </Label>
          <Label
            nowrap
            color={colorVars.content.emphasized}
          >
            {hasValue && files && files.length > 1 ? `외 ${files.length - 1}개` : ''}
          </Label>
          <input
            {...restProps}
            className={s.input}
            type={'file'}
            {...controller}
          />
        </HStack>
        <Icon
          name={showClearButton && GlyphIcon.CLOSE}
          size={isLarge ? 20 : 16}
          onClick={handleClearButton}
        />
      </HStack>
    </HStack>
  );
}

FileInput.Draggable = DraggableFileInput;
