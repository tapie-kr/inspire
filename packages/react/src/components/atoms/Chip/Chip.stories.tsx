import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import { type Meta, type StoryObj } from '@storybook/react';
import { getIconArgType } from '@/lib/storybook/icon';
import { Chip } from '.';

const meta: Meta = {
  title:     'Atoms/Chip',
  component: Chip,
  argTypes:  {
    isActive:     { control: { type: 'boolean' } },
    leadingIcon:  getIconArgType(),
    trailingIcon: getIconArgType(),
    children:     { control: { type: 'text' } },
  },
  args: {
    isActive:     false,
    leadingIcon:  GlyphIcon.DEFAULT,
    trailingIcon: GlyphIcon.CLOSE,
    children:     'Chip',
  },
};

type DefaultChipStory = StoryObj<typeof Chip>;

export const Default: DefaultChipStory = { render: props => <Chip {...props} /> };
export default meta;
