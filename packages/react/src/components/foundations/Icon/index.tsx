import * as s from './styles.css';

import cn from 'classnames';
import { type SVGAttributes } from 'react';
import { BrandIconMap, GlyphIconMap } from './icon-set';
import { type IconName, isGlyphIconName } from './shared';

type FilteredSVGAttributes = Omit<SVGAttributes<SVGElement>, keyof IconProps>;

type IconProps = {
  name?: IconName | false;
  size?: number;
  color?: string | false;
  className?: string;
};

export function Icon(props: FilteredSVGAttributes & IconProps) {
  if (!props.name) return null;

  const size = props.size || 24;

  let Icon = null;
  if (isGlyphIconName(props.name)) {
    Icon = GlyphIconMap[props.name];
  } else {
    Icon = BrandIconMap[props.name];
  }

  const renderedIcon = (
    <Icon
      className={cn(props.className, s.base)}
      width={size}
      height={size}
      color={props.color ? props.color : 'currentColor'}
    />
  );

  const interactiveProps = Object.entries(props).reduce(
    (acc, [key, value]) => {
      if (typeof value === 'function') {
        acc[key] = value;
      }
      return acc;
    },
    {} as Record<string, Function>,
  );

  if (Object.keys(interactiveProps).length > 0) {
    return (
      <div
        className={s.interactive}
        style={{ width: size, height: size }}
        {...interactiveProps}
      >
        {renderedIcon}
      </div>
    );
  }

  return renderedIcon;
}
