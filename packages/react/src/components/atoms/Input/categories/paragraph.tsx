'use client';

import * as s from '../styles/paragraph.css';
import { colorVars } from '@/lib/style/contract/color.css';

import { VStack } from '@cottons-kr/react-foundation';
import { Typo } from '@/components/foundations/Typography';

import cn from 'classnames';
import { useTextInputController } from '../hooks/use-text-input-controller';
import { type HTMLTextAreaProps, InputSize } from '../shared';
import { DraggableFileInput } from './draggable-file';

export enum ParagraphInputResize {
  NONE = 'none',
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  BOTH = 'both',
}

type ParagraphInputProps = HTMLTextAreaProps & {
  size?:   InputSize;
  resize?: ParagraphInputResize;
  height?: string | number;
};

export function ParagraphInput(props: ParagraphInputProps) {
  const {
    size = InputSize.LARGE,
    resize = ParagraphInputResize.NONE,
    ...restProps
  } = props;

  const { value, controller } = useTextInputController<HTMLTextAreaProps>(restProps);

  const isLarge = size === InputSize.LARGE;

  const heightText = typeof props.height === 'number' ? `${props.height}px` : props.height;

  return (
    <VStack
      fullWidth
      className={cn(s.container)}
    >
      <textarea
        style={{
          height: heightText,
          resize: resize,
        }}
        {...restProps}
        className={cn(s.base,
          isLarge ? s.baseLarge : s.baseMedium,
          resize !== ParagraphInputResize.HORIZONTAL && s.baseHorizontal)}
        {...controller}
      />
      {props.maxLength && (
        <Typo.Mini
          color={colorVars.content.muted}
          className={cn(s.maxLength, isLarge ? s.maxLengthLarge : s.maxLengthMedium)}
        >{`${value.length}/${restProps.maxLength?.toLocaleString()}`}
        </Typo.Mini>
      )}
    </VStack>
  );
}

ParagraphInput.Draggable = DraggableFileInput;
