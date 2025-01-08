import { Meta, StoryObj } from '@storybook/react';
import { Label } from '.';

const meta: Meta = {
  title: 'Atoms/Label',
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    disabled: false,
    children: 'Label',
  },
};

type DefaultLabelStory = StoryObj<typeof Label>;

export const Default: DefaultLabelStory = {
  render: (props) => <Label {...props} />,
};

export default meta;
