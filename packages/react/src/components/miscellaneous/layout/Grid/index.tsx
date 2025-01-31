import { grid } from './styles.css';

import cn from 'classnames';

import { type DefaultProps } from '@/types/prop';

import { Box } from '../Box';

type GridProps = DefaultProps & {
  gap?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
  columnCount?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
};

export function Grid(props: GridProps) {
  const { gap, rowGap, columnGap, columnCount, fullWidth, fullHeight, className, children } = props;

  return (
    <Box
      className={cn(grid, className)}
      style={{
        rowGap:              rowGap || gap,
        columnGap:           columnGap || gap,
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        width:               fullWidth ? '100%' : undefined,
        height:              fullHeight ? '100%' : undefined,
      }}
    >
      {children}
    </Box>
  );
}
