import type { TAPIESymbolSize } from './shared'
import cn from 'classnames'

import GrayscaleSymbol from './assets/grayscale-symbol.svg'
import GrayscaleLabel from './assets/grayscale-label.svg'
import SolidSymbol from './assets/solid-symbol.svg'
import SolidLabel from './assets/solid-label.svg'

type TAPIESymbolProps = {
  size: TAPIESymbolSize
  solid?: boolean
  withLabel?: boolean
  inverted?: boolean
  className?: string
}

export function TAPIESymbol(props: TAPIESymbolProps) {
  let SvgToRender = GrayscaleSymbol
  if (props.solid) {
    SvgToRender = props.withLabel ? SolidLabel : SolidSymbol
  } else {
    SvgToRender = props.withLabel ? GrayscaleLabel : GrayscaleSymbol
  }

  return <>
    <SvgToRender
      className={cn(props.inverted && 'inverted', props.className)}
      height={props.size}
    />
  </>
}
