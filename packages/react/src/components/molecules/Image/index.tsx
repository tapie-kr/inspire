'use client';

import { container } from './styles.css';

import { Skeleton } from '@/components/atoms/Skeleton';
import { Box } from '@/components/miscellaneous/layout/Box';

import { useCallback, useState } from 'react';
import { type DefaultProps } from '@/types/prop';

type ImageProps = DefaultProps<true> & {
  src: string | File | Blob;
  alt: string;
  width?: string | number;
  height?: string | number;
  fullWidth?: boolean;
  fullHeight?: boolean;
};

export function Image(props: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const src = typeof props.src === 'string' ? props.src : URL.createObjectURL(props.src);

  const handleLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);
  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <Box
      className={container}
      style={{
        width: props.fullWidth ? '100%' : props.width,
        height: props.fullHeight ? '100%' : props.height,
      }}
    >
      {isLoading && (
        <Skeleton
          width={props.width}
          height={props.height}
          fullWidth={props.fullWidth}
          fullHeight={props.fullHeight}
        />
      )}
      <img
        src={src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
        loading='lazy'
      />
    </Box>
  );
}
