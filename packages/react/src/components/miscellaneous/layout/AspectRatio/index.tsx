import { container, content } from './styles.css';

import cn from 'classnames';
import { type CSSProperties } from 'react';
import { type DefaultProps } from '@/types/prop';
import { Box } from '../Box';

type AspectRatioProps = DefaultProps & {
  ratio: number;
  style?: CSSProperties;
};

export function AspectRatio(props: AspectRatioProps) {
  const { ratio, style, className, children } = props;

  return (
    <Box
      className={cn(container, className)}
      style={{ ...style, aspectRatio: ratio }}
    >
      <Box
        className={content}
        fullWidth
        fullHeight
      >
        {children}
      </Box>
    </Box>
  );
}
