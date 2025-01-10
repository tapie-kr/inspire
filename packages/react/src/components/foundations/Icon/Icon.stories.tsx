import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '.'
import { GlyphIcon } from './icon-set'
import { ColorVariable } from '@/constants'
import { getIconArgType } from '@/lib/storybook/icon'

const meta: Meta = {
  title: 'Foundations/Icon',
  argTypes: {
    name: getIconArgType(),
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
