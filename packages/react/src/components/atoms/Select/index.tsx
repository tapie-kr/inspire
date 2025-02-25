'use client';

import * as s from './styles.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack, VStack } from '@cottons-kr/react-foundation';
import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Typo } from '@/components/foundations/Typography';

import cn from 'classnames';
import { Children, isValidElement, useRef } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';
import { useSelectController } from './hooks/use-select-controller';
import SelectItem from './SelectItem';
import { type HTMLSelectProps, type SelectItemProps, SelectSize } from './shared';

type SelectProps = HTMLSelectProps & {
  leadingIcon?: IconName;
  size?:        SelectSize;
  placeholder?: string;
};

export function Select(props: SelectProps) {
  const {
    leadingIcon,
    size = SelectSize.LARGE,
    ...restProps
  } = props;

  const {
    value,
    isOpen,
    isFocused,
    toggleOpen,
    handleSelect,
    onFocus,
    onBlur,
  } = useSelectController(restProps);

  const isLarge = size === SelectSize.LARGE;
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel = Children.toArray(props.children)
    .filter((child): child is React.ReactElement<SelectItemProps> => isValidElement(child) && 'value' in (child.props as SelectItemProps))
    .find(child => child.props.value === value)?.props.label || '';

  const Label = isLarge ? Typo.Base : Typo.Petite;
  const focusColor = isFocused ? colorVars.content.emphasized : colorVars.content.default;

  return (
    <div
      ref={containerRef}
      className={s.container}
      style={{ position: 'relative' }}
    >
      <HStack
        fullWidth
        tag='div'
        className={cn(s.base, isLarge && s.baseLarge, props.className)}
        align='center'
        gap={isLarge ? spacingVars.mini : spacingVars.tiny}
        tabIndex={0}
        onClick={toggleOpen}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <HStack gap={isLarge ? spacingVars.mini : spacingVars.optical}>
          <Icon
            name={leadingIcon}
            color={focusColor}
            size={isLarge ? 24 : 18}
          />
          <Label
            className={s.value}
            color={focusColor}
          >{selectedLabel || props.placeholder}
          </Label>
        </HStack>
        <Icon
          name={isOpen ? GlyphIcon.KEYBOARD_ARROW_UP : GlyphIcon.KEYBOARD_ARROW_DOWN}
          color={colorVars.content.default}
        />
      </HStack>
      {isOpen && (
        <VStack
          tag='ul'
          className={s.dropdown}
        >
          {Children.map(props.children, child => {
            if (!isValidElement<SelectItemProps>(child)) return null;

            return (
              <div
                className={s.option}
                data-selected={child.props.value === value}
                onClick={() => handleSelect(child.props.value)}
              >
                {child.props.label}
              </div>
            );
          })}
        </VStack>
      )}
    </div>
  );
}

Select.Item = SelectItem;
