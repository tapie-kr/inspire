import { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'
import { GlyphIcon } from '@/components/foundations/Icon/icon-set'

const meta: Meta = {
  title: 'Atoms/Input',
}

type InputStory = StoryObj<typeof Input>

export const Default: InputStory = {
  render: props => (
    <div style={{ width: 350 }}>
      <Input {...props} />
    </div>
  ),
  args: {
    leadingIcon: GlyphIcon.SEARCH,
    placeholder: 'Search',
  },
}

export default meta
