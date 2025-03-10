import { Box } from '@/components/miscellaneous/layout/Box';

import { type Temporal } from '@js-temporal/polyfill';
import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker } from '.';

const meta: Meta  = {
  title:     'Atoms/DatePicker',
  component: DatePicker,
};

type DatePickerStory = StoryObj<typeof DatePicker>;

export const Default: DatePickerStory = { render: props => {
  const [value, setValue] = useState<Temporal.PlainDate | undefined>(undefined);

  return (
    <Box style={{ width: '200px' }}>
      <DatePicker
        {...props}
        value={value}
        onChange={setValue}
      />
    </Box>
  );
} };

export default meta;
