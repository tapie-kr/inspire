import { Input } from '@/components/atoms/Input';
import { Box } from '@/components/miscellaneous/layout/Box';

import { type Meta, type StoryObj } from '@storybook/react';
import { getEnumArgType } from '@/lib/storybook/enum';
import { FormField } from '.';
import { FormFieldSize } from './shared';

const meta: Meta = {
  title: 'Molecules/FormField',
  component: FormField,
  argTypes: {
    label: { control: 'text' },
    isEssential: { control: 'boolean' },
    description: { control: 'text' },
    size: getEnumArgType(FormFieldSize),
  },
  args: {
    label: 'Label',
    isEssential: false,
    description: 'Description',
    size: FormFieldSize.LARGE,
  },
};

type FormFieldStory = StoryObj<typeof FormField>;

export const Default: FormFieldStory = {
  render: props => (
    <Box style={{ width: 320 }}>
      <FormField {...props}>
        <Input.Text placeholder='Placeholder' />
      </FormField>
    </Box>
  ),
};

export default meta;
