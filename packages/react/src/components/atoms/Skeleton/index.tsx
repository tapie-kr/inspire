import { skeleton } from './styles.css';
import { radiusVars } from '@/lib/style/contract/component.css';

import { Box } from '@/components/miscellaneous/layout/Box';

import cn from 'classnames';

type SkeletonProps = {
  width?:        string | number;
  height?:       string | number;
  fullWidth?:    boolean;
  fullHeight?:   boolean;
  borderRadius?: string | number;
  className?:    string;
};

export function Skeleton(props: SkeletonProps) {
  return (
    <Box
      className={cn(skeleton, props.className)}
      style={{
        width:        props.fullWidth ? '100%' : props.width,
        height:       props.fullHeight ? '100%' : props.height,
        borderRadius: props.borderRadius || radiusVars.pill,
      }}
    />
  );
}
