import { active, square } from './styles.css';

import { Button } from '@/components/atoms/Button';

import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import { Box } from '@/components/miscellaneous/layout/Box';

import cn from 'classnames';

import { type ReactNode } from 'react';

import { ButtonSize, ButtonVariant } from '@/components/atoms/Button/shared';

type ControlButtonProps = {
  type?:    'previous' | 'next';
  onClick?: () => unknown;
};

export function ControlButton(props: ControlButtonProps) {
  const isPrevious = props.type === 'previous';

  const icon = isPrevious ? GlyphIcon.CHEVRON_LEFT : GlyphIcon.CHEVRON_RIGHT;

  const label = isPrevious ? '이전' : '다음';

  const handleOnClick = props.onClick;

  return (
    <Button.Default
      variant={ButtonVariant.SECONDARY}
      size={ButtonSize.MEDIUM}
      leadingIcon={isPrevious ? icon : undefined}
      trailingIcon={!isPrevious ? icon : undefined}
      onClick={handleOnClick}
    >
      {label}
    </Button.Default>
  );
}

type PageButtonProps = {
  page:      number;
  isActive?: boolean;
  onClick?:  () => unknown;
};

export function PageButton(props: PageButtonProps) {
  const handleClick = props.onClick;

  return (
    <Square isActive={props.isActive}>
      <Button.Text
        fullWidth
        fullHeight
        onClick={handleClick}
      >
        {props.page}
      </Button.Text>
    </Square>
  );
}

type SquareProps = {
  isActive?: boolean;
  children?: ReactNode;
};

export function Square(props: SquareProps) {
  return <Box className={cn(square, { [active]: props.isActive })}>{props.children}</Box>;
}
