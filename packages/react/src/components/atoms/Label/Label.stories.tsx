import { Meta, StoryObj } from '@storybook/react'
import { Label } from '.'

const meta: Meta = {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    essential: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    essential: false,
    disabled: false,
    children: 'Label',
  },
}

type DefaultLabelStory = StoryObj<typeof Label>

export const Default: DefaultLabelStory = {
  render: (props) => <Label {...props} />,
}

export default meta
