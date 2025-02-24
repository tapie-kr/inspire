import { Box } from '@/components/miscellaneous/layout/Box';

import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '.';

const meta: Meta  = {
  title:     'Atoms/DatePicker',
  component: DatePicker,
  argTypes:  { withTime: { control: 'boolean' } },
  args:      { withTime: false },
};

type DatePickerStory = StoryObj<typeof DatePicker>;

export const Default: DatePickerStory = { render: props => (
  <Box style={{ width: '200px' }}>
    <DatePicker {...props} />
  </Box>
) };

export default meta;
