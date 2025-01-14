import { type Meta, type StoryObj } from '@storybook/react';
import { getIconArgType } from '@/lib/storybook/icon';
import { Icon } from '.';
import { GlyphIcon } from './icon-set';

const meta: Meta = {
  title: 'Foundations/Icon',
  argTypes: {
    name: getIconArgType(),
    size: { control: 'number' },
    color: { control: 'color' },
  },
  args: {
    name: GlyphIcon.FACE,
    size: 24,
  },
};

type IconStory = StoryObj<typeof Icon>;

export const Default: IconStory = {
  render: props => <Icon {...props} />,
};

export default meta;
