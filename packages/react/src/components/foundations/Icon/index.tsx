import { GlyphIconMap, BrandIconMap } from './icon-set'
import { IconName, isGlyphIconName } from './shared'
import cn from 'classnames'
import { transition } from './styles.css'

type IconProps = {
  name: IconName
  size?: number
  color?: string
  className?: string
}

export function Icon(props: IconProps) {
  let Icon = null
  if (isGlyphIconName(props.name)) {
    Icon = GlyphIconMap[props.name]
  } else {
    Icon = BrandIconMap[props.name]
  }

  const size = props.size || 24

  return <>
    <Icon
      className={cn(props.className, transition)}
      width={size} height={size}
      color={props.color}
    />
  </>
}
