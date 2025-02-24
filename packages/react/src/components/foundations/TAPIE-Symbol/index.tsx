import { colorBinding } from './styles.css';

import cn from 'classnames';
import GrayscaleLabel from './assets/grayscale-label.svg';
import GrayscaleSymbol from './assets/grayscale-symbol.svg';
import SolidLabel from './assets/solid-label.svg';
import SolidSymbol from './assets/solid-symbol.svg';
import { TAPIESymbolSize } from './shared';

type TAPIESymbolProps = {
  size:       TAPIESymbolSize;
  isSolid?:   boolean;
  hasLabel?:  boolean;
  className?: string;
};

export function TAPIESymbol(props: TAPIESymbolProps) {
  let SvgToRender = GrayscaleSymbol;

  if (props.isSolid) {
    SvgToRender = props.hasLabel ? SolidLabel : SolidSymbol;
  } else {
    SvgToRender = props.hasLabel ? GrayscaleLabel : GrayscaleSymbol;
  }

  return (
    <SvgToRender
      className={cn(props.className, colorBinding)}
      height={props.size}
    />
  );
}
