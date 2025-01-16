import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import { type Meta, type StoryObj } from '@storybook/react';
import { getIconArgType } from '@/lib/storybook/icon';
import { Input } from '.';
import { TextInputSize } from './categories/text';

const meta: Meta = {
  title: 'Atoms/Input',
};

type TextInputStory = StoryObj<typeof Input.Text>;
type FileInputStory = StoryObj<typeof Input.File>;
type ImagePreviewInputStory = StoryObj<typeof Input.ImagePreview>;

export const Text: TextInputStory = {
  render: props => (
    <div style={{ width: 350 }}>
      <Input.Text {...props} />
    </div>
  ),
  argTypes: {
    leadingIcon: getIconArgType(),
    isSecure: { control: 'boolean' },
    placeholder: { control: 'text' },
    size: {
      options: Object.values(TextInputSize),
      control: { type: 'select' },
    },
  },
  args: {
    leadingIcon: GlyphIcon.SEARCH,
    isSecure: true,
    placeholder: 'Placeholder',
  },
};

export const File: FileInputStory = {
  render: props => (
    <div style={{ width: 350 }}>
      <Input.File {...props} />
    </div>
  ),
  argTypes: {
    leadingIcon: getIconArgType(),
    placeholder: { control: 'text' },
    multiple: { control: 'boolean' },
    size: {
      options: Object.values(TextInputSize),
      control: { type: 'select' },
    },
  },
  args: {
    leadingIcon: GlyphIcon.SEARCH,
    placeholder: 'Placeholder',
    multiple: true,
  },
};

export const ImagePreview: ImagePreviewInputStory = {
  render: props => (
    <div style={{ width: 350 }}>
      <Input.ImagePreview {...props} />
    </div>
  ),
};

export default meta;
