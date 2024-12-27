import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '.'
import { BrandIcon, GlyphIcon } from './icon-set'
import { ColorVariable } from '@/constants'

const meta: Meta = {
  title: 'Foundations/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: [...Object.values(GlyphIcon), ...Object.values(BrandIcon)],
      control: 'select',
    },
    size: { control: 'number' },
    fill: { control: 'color' },
  },
  args: {
    name: GlyphIcon.Face,
    size: 24,
    fill: ColorVariable.Content.Emphasized,
  },
}

type IconStory = StoryObj<typeof Icon>

export const Default: IconStory = {
  render: props => <Icon {...props} />,
}

export default meta
