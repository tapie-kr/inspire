import { container, content } from './styles.css';

import cn from 'classnames';
import { type DefaultProps } from '@/types/prop';
import { Box } from '../Box';

type AspectRatioProps = DefaultProps & {
  ratio: number;
};

export function AspectRatio(props: AspectRatioProps) {
  const { ratio, className, children } = props;

  return (
    <Box
      className={cn(container, className)}
      fullWidth
      style={{ paddingBottom: `${(1 / ratio) * 100}%` }}
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
