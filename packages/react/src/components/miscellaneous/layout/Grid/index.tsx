'use client';

import { grid } from './styles.css';

import cn from 'classnames';
import { useMediaQuery } from '@/hooks/use-media-query';
import { type DefaultProps } from '@/types/prop';
import { Box } from '../Box';

type GridProps = DefaultProps & {
  gap?:           string | number;
  rowGap?:        string | number;
  columnGap?:     string | number;
  columnCount?:   number;
  disableMobile?: boolean;
  fullWidth?:     boolean;
  fullHeight?:    boolean;
};

export function Grid(props: GridProps) {
  const {
    gap,
    rowGap,
    columnGap,
    columnCount,
    disableMobile,
    fullWidth,
    fullHeight,
    className,
    children,
  } = props;

  const isMobile = useMediaQuery();

  return (
    <Box
      className={cn(grid, className)}
      style={{
        rowGap:              rowGap || gap,
        columnGap:           columnGap || gap,
        gridTemplateColumns: `repeat(${isMobile && !disableMobile ? 1 : columnCount}, 1fr)`,
        width:               fullWidth ? '100%' : undefined,
        height:              fullHeight ? '100%' : undefined,
      }}
    >
      {children}
    </Box>
  );
}
