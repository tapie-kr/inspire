'use client';

import { container, image } from './styles.css';
import { radiusVars } from '@/lib/style/contract/component.css';

import { Skeleton } from '@/components/atoms/Skeleton';
import { Box } from '@/components/miscellaneous/layout/Box';

import { useCallback, useMemo, useState } from 'react';
import { useMountedState } from '@/hooks/use-mounted-state';
import { type DefaultProps } from '@/types/prop';

type ImageProps = DefaultProps<true> & {
  src:         string | File | Blob;
  alt:         string;
  delay?:      number;
  width?:      string | number;
  height?:     string | number;
  fullWidth?:  boolean;
  fullHeight?: boolean;
};

export function Image(props: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const isMounted = useMountedState();

  const src = useMemo(() => isMounted ? (typeof props.src === 'string' ? props.src : URL.createObjectURL(props.src)) : '',
    [isMounted, props.src]);

  const handleLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handleLoad = useCallback(() => {
    setTimeout(() => setIsLoading(false), props.delay ?? 0);
  }, [props.delay]);

  return (
    <Box
      className={container}
      style={{
        width:  props.fullWidth ? '100%' : props.width,
        height: props.fullHeight ? '100%' : props.height,
      }}
    >
      {isLoading && (
        <Skeleton
          width={props.width}
          height={props.height}
          fullWidth={props.fullWidth}
          fullHeight={props.fullHeight}
          borderRadius={radiusVars.none}
        />
      )}
      {isMounted && (
        <img
          className={image}
          src={src}
          alt={props.alt}
          style={{ display: isLoading ? 'none' : 'block' }}
          onLoadStart={handleLoadStart}
          onLoad={handleLoad}
          onError={handleLoad}
        />
      )}
    </Box>
  );
}
