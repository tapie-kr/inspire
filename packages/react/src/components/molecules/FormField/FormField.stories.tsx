import { Input } from '@/components/atoms/Input';
import { Box } from '@/components/miscellaneous/layout/Box';

import { type Meta, type StoryObj } from '@storybook/react';
import { getEnumArgType } from '@/lib/storybook/enum';
import { FormField } from '.';
import { FormFieldSize } from './shared';

const meta: Meta = {
  title:     'Molecules/FormField',
  component: FormField,
  argTypes:  {
    label:       { control: 'text' },
    isEssential: { control: 'boolean' },
    description: { control: 'text' },
    fitContent:  { control: 'boolean' },
    size:        getEnumArgType(FormFieldSize),
  },
  args: {
    label:       'Label',
    isEssential: false,
    description: 'Description',
    fitContent:  false,
    size:        FormFieldSize.LARGE,
  },
};

type FormFieldStory = StoryObj<typeof FormField>;

export const Text: FormFieldStory = { render: props => (
  <Box style={{ width: 320 }}>
    <FormField {...props}>
      <Input.Text placeholder='Placeholder' />
    </FormField>
  </Box>
) };

export const Paragraph: FormFieldStory = { render: props => (
  <Box style={{ width: 320 }}>
    <FormField {...props}>
      <Input.Paragraph placeholder='Placeholder' />
    </FormField>
  </Box>
) };

export const File: FormFieldStory = { render: props => (
  <Box style={{ width: 320 }}>
    <FormField {...props}>
      <Input.File placeholder='Placeholder' />
    </FormField>
  </Box>
) };

export const DraggableFile: FormFieldStory = { render: props => (
  <Box style={{ width: 320 }}>
    <FormField {...props}>
      <Input.DraggableFile placeholder='Placeholder' />
    </FormField>
  </Box>
) };

export const ImagePreview: FormFieldStory = { render: props => (
  <Box style={{ width: 320 }}>
    <FormField {...props}>
      <Input.ImagePreview placeholder='Placeholder' />
    </FormField>
  </Box>
) };

export default meta;
