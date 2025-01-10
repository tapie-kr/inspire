import { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'
import { GlyphIcon } from '@/components/foundations/Icon/icon-set'
import { getIconArgType } from '@/lib/storybook/icon'

const meta: Meta = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    leadingIcon: getIconArgType(),
    secure: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    leadingIcon: GlyphIcon.SEARCH,
    secure: false,
    placeholder: 'Search',
  },
}

type InputStory = StoryObj<typeof Input>

export const Default: InputStory = {
  render: props => (
    <div style={{ width: 350 }}>
      <Input {...props} />
    </div>
  ),
}

export default meta
