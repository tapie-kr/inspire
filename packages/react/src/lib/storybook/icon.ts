import { GlyphIcon, BrandIcon } from '@/components/foundations/Icon/icon-set'
import { InputType } from 'storybook/internal/types'

export function getIconArgType(): InputType {
  return {
    options: [...Object.values(GlyphIcon), ...Object.values(BrandIcon)],
    control: 'select',
  }
}
