import { Meta, StoryObj } from '@storybook/react'
import { TAPIESymbol } from '.'
import { TAPIESymbolSize } from './shared'

const meta: Meta = {
  title: 'Foundations/TAPIE-Symbol',
  argTypes: {
    size: {
      options: Object.values(TAPIESymbolSize),
      control: 'select',
    },
    solid: { control: 'boolean' },
    withLabel: { control: 'boolean' },
  },
  args: {
    size: 96,
    solid: false,
    withLabel: true,
  },
}

type TAPIESymbolStory = StoryObj<typeof TAPIESymbol>

export const Default: TAPIESymbolStory = {
  render: props => <TAPIESymbol {...props} />,
}

export default meta
