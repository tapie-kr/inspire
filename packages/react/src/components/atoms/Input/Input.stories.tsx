import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import { type Meta, type StoryObj } from '@storybook/react';
import { getIconArgType } from '@/lib/storybook/icon';
import { Input } from '.';
import { InputSize } from './shared';

const meta: Meta = {
  title: 'Atoms/Input',
};

type TextInputStory = StoryObj<typeof Input.Text>;
type FileInputStory = StoryObj<typeof Input.File>;
type DraggableFileInputStory = StoryObj<typeof Input.File.Draggable>;
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
      options: Object.values(InputSize),
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
      options: Object.values(InputSize),
      control: { type: 'select' },
    },
  },
  args: {
    leadingIcon: GlyphIcon.UPLOAD,
    placeholder: 'Placeholder',
    multiple: true,
  },
};

export const DraggableFile: DraggableFileInputStory = {
  render: props => (
    <div style={{ width: 350 }}>
      <Input.File.Draggable {...props} />
    </div>
  ),
  argTypes: {
    leadingIcon: getIconArgType(),
    placeholder: { control: 'text' },
    multiple: { control: 'boolean' },
    size: {
      options: Object.values(InputSize),
      control: { type: 'select' },
    },
  },
  args: {
    leadingIcon: GlyphIcon.UPLOAD,
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
