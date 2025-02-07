import { Meta, StoryObj } from '@storybook/react';
import { TAPIESymbol } from '.';
import { TAPIESymbolSize } from './shared';

const meta: Meta = {
  title:    'Foundations/TAPIE-Symbol',
  argTypes: {
    size: {
      options: Object.values(TAPIESymbolSize),
      control: 'select',
    },
    isSolid:  { control: 'boolean' },
    hasLabel: { control: 'boolean' },
  },
  args: {
    size:     96,
    isSolid:  false,
    hasLabel: true,
  },
};

type TAPIESymbolStory = StoryObj<typeof TAPIESymbol>;

export const Default: TAPIESymbolStory = { render: props => <TAPIESymbol {...props} /> };
export default meta;
