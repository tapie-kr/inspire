import { Meta, StoryObj } from '@storybook/react';
import { BrandIcon, GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Chip } from '.';
import { getIconArgType } from '@/lib/storybook/icon';

const meta: Meta = {
  title: 'Atoms/Chip',
  argTypes: {
    active: {
      control: { type: 'boolean' },
    },
    leadingIcon: getIconArgType(),
    trailingIcon: getIconArgType(),
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    active: false,
    leadingIcon: GlyphIcon.DEFAULT,
    trailingIcon: GlyphIcon.CLOSE,
    children: 'Chip',
  },
};

type DefaultChipStory = StoryObj<typeof Chip>;

export const Default: DefaultChipStory = {
  render: (props) => <Chip {...props} />,
};

export default meta;
