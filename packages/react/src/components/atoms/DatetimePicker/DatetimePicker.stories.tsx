import { Box } from '@/components/miscellaneous/layout/Box';

import { type Temporal } from '@js-temporal/polyfill';
import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatetimePicker } from '.';

const meta: Meta  = {
  title:     'Atoms/DatetimePicker',
  component: DatetimePicker,
};

type DatetimePickerStory = StoryObj<typeof DatetimePicker>;

export const Default: DatetimePickerStory = { render: props => {
  const [value, setValue] = useState<Temporal.PlainDateTime | undefined>(undefined);

  return (
    <Box style={{ width: '200px' }}>
      <DatetimePicker
        {...props}
        value={value}
        onChange={setValue}
      />
    </Box>
  );
} };

export default meta;
