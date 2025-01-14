import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import { type Meta, type StoryObj } from '@storybook/react';
import { getIconArgType } from '@/lib/storybook/icon';
import { Input } from '.';

const meta: Meta = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    leadingIcon: getIconArgType(),
    isSecure: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    leadingIcon: GlyphIcon.SEARCH,
    isSecure: false,
    placeholder: 'Search',
  },
};

type InputStory = StoryObj<typeof Input>;

export const Default: InputStory = {
  render: props => (
    <div style={{ width: 350 }}>
      <Input {...props} />
    </div>
  ),
};

export default meta;
