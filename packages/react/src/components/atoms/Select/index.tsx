'use client';

import * as s from './styles.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack, VStack } from '@cottons-kr/react-foundation';
import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Typo } from '@/components/foundations/Typography';

import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';
import { useClickOutside } from './hooks/use-click-outside';
import { useSelectController } from './hooks/use-select-controller';
import { type HTMLSelectProps, type SelectItemProps, SelectSize } from './shared';

type SelectProps = HTMLSelectProps & {
  leadingIcon?: IconName;
  size?:        SelectSize;
  placeholder?: string;
  options?:     SelectItemProps[];
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
  } = useSelectController(restProps);

  const isLarge = size === SelectSize.LARGE;
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedLabel = props.options?.find(option => option.value === value)?.label || props.placeholder;
  const Label = isLarge ? Typo.Base : Typo.Petite;
  const focusColor = isFocused ? colorVars.content.emphasized : colorVars.content.default;

  useClickOutside(containerRef as React.RefObject<HTMLElement>, () => {
    if (isOpen) {
      toggleOpen();
    }
  });

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative', width: '100%',
      }}
    >
      <HStack
        fullWidth
        tag='div'
        className={cn(s.base, isLarge && s.baseLarge, props.className)}
        align='center'
        gap={isLarge ? spacingVars.mini : spacingVars.tiny}
        tabIndex={0}
        onClick={toggleOpen}
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
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon
            name={GlyphIcon.KEYBOARD_ARROW_UP}
            color={colorVars.content.default}
          />
        </motion.div>
      </HStack>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{ zIndex: 1000 }}
            exit={{
              y: -10, opacity: 0,
            }}
            initial={{
              y: -10, opacity: 0,
            }}
            animate={{
              y: 0, opacity: 1,
            }}
          >
            <VStack
              className={s.dropdown}
            >
              {props.options?.map((option, index) => (
                <div
                  key={index}
                  className={s.option}
                  data-selected={option.value === value}
                  onMouseUp={() => handleSelect(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </VStack>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
