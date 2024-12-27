import { GlyphIconMap, BrandIconMap } from './icon-set'
import { IconType, isGlyphIconName } from './shared'

type IconProps = {
  name: IconType
  size?: number
  fill?: string
}

export function Icon(props: IconProps) {
  let Icon = null
  if (isGlyphIconName(props.name)) {
    Icon = GlyphIconMap[props.name]
  } else {
    Icon = BrandIconMap[props.name]
  }

  return <Icon width={props.size} height={props.size} fill={props.fill} />
}
