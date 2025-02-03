'use client';

import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack } from '@/components/miscellaneous/layout/HStack';

import { useCallback, useEffect, useState } from 'react';
import { ControlButton, PageButton, Square } from './button';
import { getCurrentItems as _getCurrentVisiblePages } from './shared';

type PaginationProps = {
  min:           number;
  max:           number;
  visiblePages?: number;
  defaultPage?:  number;
  onPageChange?: (page: number) => unknown;
};

export function Pagination(props: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(props.defaultPage || props.min);

  const getCurrentVisiblePages = useCallback(() => _getCurrentVisiblePages(props.min, props.max, props.visiblePages || 10, currentPage),
    [currentPage, props.max, props.min, props.visiblePages]);

  const [currentItems, setCurrentItems] = useState(getCurrentVisiblePages());

  const handleNext = useCallback(() => {
    setCurrentPage(prev => {
      const newValue = Math.min(prev + 1, props.max);

      props.onPageChange?.(newValue);

      return newValue;
    });
  }, [props]);

  const handlePrevious = useCallback(() => {
    setCurrentPage(prev => {
      const newValue = Math.max(prev - 1, props.min);

      props.onPageChange?.(newValue);

      return newValue;
    });
  }, [props]);

  useEffect(() => {
    setCurrentItems(getCurrentVisiblePages());
  }, [currentPage, getCurrentVisiblePages, props]);

  return (
    <HStack
      fullWidth
      spacing={spacingVars.moderate}
    >
      <ControlButton
        type='previous'
        onClick={handlePrevious}
      />

      <HStack spacing={spacingVars.micro}>
        {currentItems.map(c => {
          if (c.type === 'ellipsis') {
            return <Square key={c.type}>...</Square>;
          }

          if (!c.value) return null;

          const handleClick = () => {
            if (c.value) {
              setCurrentPage(c.value);

              props.onPageChange?.(c.value);
            }
          };

          return (
            <PageButton
              page={c.value}
              isActive={currentPage === c.value}
              onClick={handleClick}
            />
          );
        })}
      </HStack>

      <ControlButton
        type='next'
        onClick={handleNext}
      />
    </HStack>
  );
}
