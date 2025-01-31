import { type Meta, type StoryObj } from '@storybook/react';

import { Label, LabelSize } from '.';

const meta: Meta = {
  title:     'Atoms/Label',
  component: Label,
  argTypes:  {
    isEssential: { control: { type: 'boolean' } },
    isDisabled:  { control: { type: 'boolean' } },
    children:    { control: { type: 'text' } },
    size:        {
      options: Object.values(LabelSize),
      control: { type: 'select' },
    },
  },
  args: {
    isEssential: false,
    isDisabled:  false,
    children:    'Label',
    size:        LabelSize.LARGE,
  },
};

type DefaultLabelStory = StoryObj<typeof Label>;

export const Default: DefaultLabelStory = { render: props => <Label {...props} /> };

export default meta;
