import { type Meta, type StoryObj } from '@storybook/react';
import { loremIpsum } from '@/lib/storybook/shared';
import { Details } from '.';

const meta: Meta = {
  title: 'Atoms/Details',
  component: Details,
  argTypes: {
    title: { control: 'text' },
    defaultOpen: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    title: 'Details',
    defaultOpen: false,
    disabled: false,
    children: loremIpsum,
  },
};

type DetailsStory = StoryObj<typeof Details>;

export const Default: DetailsStory = {
  render: props => <Details {...props} />,
};

export default meta;
