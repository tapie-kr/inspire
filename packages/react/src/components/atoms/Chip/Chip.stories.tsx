import { Meta, StoryObj } from '@storybook/react';
import { BrandIcon, GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Chip } from '.';

const meta: Meta = {
  title: 'Atoms/Chip',
  argTypes: {
    active: {
      control: { type: 'boolean' },
    },
    leadingIcon: {
      options: [...Object.values(GlyphIcon), ...Object.values(BrandIcon)],
      control: { type: 'select' },
    },
    trailingIcon: {
      options: [...Object.values(GlyphIcon), ...Object.values(BrandIcon)],
      control: { type: 'select' },
    },
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
