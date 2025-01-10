import { Meta, StoryObj } from '@storybook/react'
import { GlyphIcon } from '@/components/foundations/Icon/icon-set'
import { ButtonSize, ButtonVariant } from './shared'
import { Button } from '.'
import { getIconArgType } from '@/lib/storybook/icon'

const baseArgsType = {
  size: {
    options: Object.values(ButtonSize),
    control: { type: 'select' },
  },
  disabled: { control: { type: 'boolean' } },
  children: { control: { type: 'text' } },
} as const

const meta: Meta = {
  title: 'Atoms/Button',
  args: {
    size: ButtonSize.LARGE,
    disabled: false,
    children: 'Button',
  },
}

type DefaultButtonStory = StoryObj<typeof Button.Default>
type TextButtonStory = StoryObj<typeof Button.Text>
type IconButtonStory = StoryObj<typeof Button.Icon>

export const Default: DefaultButtonStory = {
  render: props => <Button.Default {...props} />,
  argTypes: {
    ...baseArgsType,
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: 'select' },
    },
    leadingIcon: getIconArgType(),
    trailingIcon: getIconArgType(),
  }
}

export const Text: TextButtonStory = {
  render: props => <Button.Text {...props} />,
  argTypes: {
    ...baseArgsType,
  },
}

export const Icon: IconButtonStory = {
  render: props => <Button.Icon {...props} />,
  argTypes: {
    ...baseArgsType,
    icon: getIconArgType(),
  },
  args: {
    icon: GlyphIcon.FLAG,
  },
}

export default meta
