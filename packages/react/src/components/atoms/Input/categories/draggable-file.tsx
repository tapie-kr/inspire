'use client';

import * as s from '../styles/draggable-file.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack, VStack } from '@cottons-kr/react-foundation';
import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Typo } from '@/components/foundations/Typography';

import cn from 'classnames';
import React, { useCallback, useMemo } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';
import { Weight } from '@/components/foundations/Typography/shared';
import { useDraggableFileInputController } from '../hooks/use-draggable-file-input-controller';
import { type HTMLInputProps, InputSize } from '../shared';

type DraggableFileInputProps = HTMLInputProps & {
  leadingIcon?: IconName;
  size?:        InputSize;
  onDelete?:    () => void;
};

export function DraggableFileInput(props: DraggableFileInputProps) {
  const {
    leadingIcon,
    size = InputSize.LARGE,
    placeholder,
    onDelete,
    ...restProps
  } = props;

  const {
    files,
    tools,
    controller,
  } = useDraggableFileInputController(restProps);

  const hasValue = useMemo(() => files != null && files.length > 0, [files]);
  const isLarge = size === InputSize.LARGE;

  const handleRemoveButton = useCallback((e: React.MouseEvent<SVGElement>, index: number) => {
    e.preventDefault();

    e.stopPropagation();

    e.nativeEvent.stopImmediatePropagation();

    tools.removeFile(index);

    if (onDelete) {
      onDelete();
    }
  },
  [tools]);

  const Label = isLarge ? Typo.Base : Typo.Petite;
  const DescriptionLabel = isLarge ? Typo.Tiny : Typo.Mini;
  const FileLabel = isLarge ? Typo.Micro : Typo.Mini;

  const handleDefendPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <VStack
      fullWidth
      className={cn(s.base, isLarge ? s.baseLarge : s.baseMedium)}
      align='center'
      gap={isLarge ? spacingVars.petite : spacingVars.micro}
      tag='label'
      {...controller}
    >
      {leadingIcon && (
        <div className={s.iconContainer}>
          <Icon
            name={leadingIcon}
            color={colorVars.content.default}
            size={isLarge ? 24 : 20}
          />
        </div>
      )}
      <VStack
        fullWidth
        className={s.inputContainer}
        align='center'
        gap={spacingVars.mini}
      >
        {hasValue && files
          ? files.map((file, index) => (
            <HStack
              key={index}
              fullWidth
              justify='between'
              align='center'
              className={cn(s.file, isLarge ? s.fileLarge : s.fileMedium)}
              gap={spacingVars.micro}
            >
              <FileLabel
                nowrap
                className={s.inputText}
                color={colorVars.content.emphasized}
              >
                {file.name}
              </FileLabel>
              <Icon
                color={colorVars.content.muted}
                name={GlyphIcon.CLOSE}
                size={isLarge ? 14 : 12}
                onClick={e => handleRemoveButton(e, index)}
                onMouseDown={handleDefendPropagation}
              />
            </HStack>
          ))
          : (
            <>
              <Label
                nowrap
                color={colorVars.content.emphasized}
                weight={Weight.SEMIBOLD}
              >
                {placeholder}
              </Label>
              <DescriptionLabel
                nowrap
                color={colorVars.content.muted}
                weight={Weight.MEDIUM}
              >
                클릭 또는 드래그하여 파일 업로드
              </DescriptionLabel>
            </>
          )}
        <input
          {...restProps}
          className={s.input}
          type='file'
        />
      </VStack>
    </VStack>
  );
}
