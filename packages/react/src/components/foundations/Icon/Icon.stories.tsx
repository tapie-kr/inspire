import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '.'
import { BrandIcon, GlyphIcon } from './icon-set'
import { ColorVariable } from '@/constants'

const meta: Meta = {
  title: 'Foundations/Icon',
  argTypes: {
    name: {
      options: [...Object.values(GlyphIcon), ...Object.values(BrandIcon)],
      control: 'select',
    },
    size: { control: 'number' },
    color: { control: 'color' },
  },
  args: {
    name: GlyphIcon.FACE,
    size: 24,
    color: ColorVariable.Content.Emphasized,
  },
}

type IconStory = StoryObj<typeof Icon>

export const Default: IconStory = {
  render: props => <Icon {...props} />,
}

export default meta
