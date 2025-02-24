import {
  container,
  content,
  fullHeight as fullHeightStyle,
  fullWidth as fullWidthStyle,
} from './styles.css';

import cn from 'classnames';
import { DefaultProps } from '@/types/prop';
import { Box } from '../Box';

type AspectRatioProps = DefaultProps & {
  ratio:       number;
  width?:      string | number;
  height?:     string | number;
  fullWidth?:  boolean;
  fullHeight?: boolean;
};

export function AspectRatio(props: AspectRatioProps) {
  const {
    ratio,
    width,
    height,
    fullWidth,
    fullHeight,
    className,
    children,
  } = props;

  const classNames = [
    container,
    className,
    {
      [fullWidthStyle]:  fullWidth,
      [fullHeightStyle]: fullHeight,
    },
  ];

  return (
    <Box
      className={cn(classNames)}
      style={{
        width,
        height,
        aspectRatio: ratio,
      }}
    >
      <Box
        fullWidth
        fullHeight
        className={content}
      >
        {children}
      </Box>
    </Box>
  );
}
