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
import { type HTMLInputProps } from '../shared';

export enum FileInputSize {
  LARGE = 'large',
  MEDIUM = 'medium',
}

type FileInputProps = HTMLInputProps & {
  leadingIcon?: IconName;
  size?: FileInputSize;
};

export function FileInput(props: FileInputProps) {
  const { leadingIcon, size = FileInputSize.LARGE, placeholder, ...restProps } = props;
  const { files, tools, controller } = useFileInputController();

  const hasValue = useMemo(() => files != null && files.length > 0, [files]);
  const showClearButton = hasValue;

  const isLarge = size === FileInputSize.LARGE;

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
        />
        <HStack
          className={s.inputContainer}
          fullWidth
        >
          <Typo.Base
            className={s.inputText}
            nowrap
            color={hasValue && files ? colorVars.content.emphasized : colorVars.content.muted}
          >
            {hasValue && files
              ? files.length === 1
                ? files[0].name
                : `${files[0].name} 외 ${files.length - 1}개`
              : placeholder}
          </Typo.Base>
          <Typo.Base
            nowrap
            color={colorVars.content.emphasized}
          >
            {hasValue && files && files.length > 1 ? `외 ${files.length - 1}개` : ''}
          </Typo.Base>
          <input
            {...restProps}
            className={s.input}
            type={'file'}
            {...controller}
          />
        </HStack>
        <Icon
          name={showClearButton && GlyphIcon.CLOSE}
          size={20}
          onClick={handleClearButton}
        />
      </HStack>
    </HStack>
  );
}
