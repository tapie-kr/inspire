import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import { type Meta, type StoryObj } from '@storybook/react';
import { getIconArgType } from '@/lib/storybook/icon';
import { Input } from '.';
import { ImagePreviewShape } from './categories/image-preview';
import { ParagraphInputResize } from './categories/paragraph';
import { InputSize } from './shared';

const meta: Meta = { title: 'Atoms/Input' };

type TextInputStory = StoryObj<typeof Input.Text>;

type ParagraphInputStory = StoryObj<typeof Input.Paragraph>;

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
    isSecure:    { control: 'boolean' },
    placeholder: { control: 'text' },
    size:        {
      options: Object.values(InputSize),
      control: { type: 'select' },
    },
  },
  args: {
    leadingIcon: GlyphIcon.SEARCH,
    isSecure:    false,
    placeholder: 'Placeholder',
  },
};

export const Paragraph: ParagraphInputStory = {
  render: props => (
    <div style={{ width: 350 }}>
      <Input.Paragraph {...props} />
    </div>
  ),
  argTypes: {
    resize: {
      options: Object.values(ParagraphInputResize),
      control: { type: 'select' },
    },
    size: {
      options: Object.values(InputSize),
      control: { type: 'select' },
    },
    height:      { control: 'number' },
    placeholder: { control: 'text' },
    maxLength:   { control: 'number' },
  },
  args: {
    resize:      ParagraphInputResize.NONE,
    placeholder: 'Placeholder',
    height:      160,
    maxLength:   100,
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
    multiple:    { control: 'boolean' },
    size:        {
      options: Object.values(InputSize),
      control: { type: 'select' },
    },
  },
  args: {
    leadingIcon: GlyphIcon.UPLOAD,
    placeholder: 'Placeholder',
    multiple:    true,
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
    multiple:    { control: 'boolean' },
    size:        {
      options: Object.values(InputSize),
      control: { type: 'select' },
    },
  },
  args: {
    leadingIcon: GlyphIcon.UPLOAD,
    placeholder: 'Placeholder',
    multiple:    true,
  },
};

export const ImagePreview: ImagePreviewInputStory = {
  render: props => (
    <div style={{ width: 350 }}>
      <Input.ImagePreview {...props} />
    </div>
  ),
  argTypes: {
    placeholder: { control: 'text' },
    shape:       {
      options: Object.values(ImagePreviewShape),
      control: { type: 'select' },
    },
    size:    { control: 'number' },
    preview: { control: 'text' },
  },
  args: {
    placeholder: 'Placeholder',
    shape:       ImagePreviewShape.DEFAULT,
    size:        150,
  },
};

export default meta;
