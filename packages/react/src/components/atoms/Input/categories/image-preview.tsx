'use client';

import * as s from '../styles/image-preview.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack, VStack } from '@cottons-kr/react-foundation';
import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Typo } from '@/components/foundations/Typography';
import { AspectRatio } from '@/components/miscellaneous/layout/AspectRatio';

import cn from 'classnames';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Weight } from '@/components/foundations/Typography/shared';
import { StackAlign, StackJustify } from '@/lib/layout/types';
import { useFileInputController } from '../hooks/use-file-input-controller';
import { type HTMLInputProps } from '../shared';

export enum ImagePreviewShape {
  DEFAULT = 'default',
  CIRCLE = 'circle',
}

type ImagePreviewInputProps = HTMLInputProps & {
  shape?:   ImagePreviewShape;
  size?:    string | number;
  preview?: string;
};

export function ImagePreviewInput(props: ImagePreviewInputProps) {
  const {
    shape = ImagePreviewShape.DEFAULT,
    preview,
    placeholder,
    size = 100,
    ...restProps
  } = props;

  const { files, controller } = useFileInputController(restProps);
  const [isHover, setIsHover] = useState(false);
  const hasValue = useMemo(() => files != null && files.length > 0, [files]);
  const showPreview = (hasValue && files) || preview;
  const isCircle = shape === ImagePreviewShape.CIRCLE;
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (hasValue && files) {
      setPreviewImage(URL.createObjectURL(files[0]));
    } else if (preview) {
      setPreviewImage(preview);
    }
  }, [
    hasValue,
    files,
    preview,
  ]);

  const handleMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  const backgroundImageSrc = useMemo(() => {
    if (showPreview) {
      return `url(${previewImage})`;
    }
  }, [previewImage, showPreview]);

  return (
    <AspectRatio
      ratio={1}
      width={size}
      className={cn(s.container, isCircle && s.circle)}
    >
      <VStack
        fullWidth
        fullHeight
        className={cn(s.base, isCircle && s.circle, showPreview && s.baseHasValue)}
        justify={StackJustify.CENTER}
        align={StackAlign.CENTER}
        gap={spacingVars.mini}
        tag='label'
        style={{ backgroundImage: backgroundImageSrc }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showPreview
          ? (

            <HStack
              fitContent
              justify={StackJustify.CENTER}
              align={StackAlign.CENTER}
              className={cn(s.overlay, isHover && s.overlayVisible)}
            >
              <Typo.Micro
                nowrap
                weight={Weight.MEDIUM}
                color={colorVars.solid.translucent.white._90}
              >
                클릭해 바꾸기
              </Typo.Micro>
            </HStack>
          )
          : (
            <>
              <Icon
                name={GlyphIcon.DEFAULT}
                size={24}
                color={colorVars.content.emphasized}
              />
              <Typo.Petite
                weight={Weight.MEDIUM}
                color={colorVars.content.emphasized}
              >
                {placeholder}
              </Typo.Petite>
            </>
          )}
        <input
          {...restProps}
          className={s.input}
          type='file'
          accept={'image/*'}
          {...controller}
        />
      </VStack>
    </AspectRatio>
  );
}
