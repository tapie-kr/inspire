import { spacingVars } from '@/lib/style/contract/component.css';

import { type Meta, type StoryObj } from '@storybook/react';
import { LayoutTag, StackAlign, StackDirection, StackJustify, StackWrap } from '@/lib/layout/types';
import { getEnumArgType } from '@/lib/storybook/enum';
import { Box } from '../Box';
import { Stack } from '.';

const meta: Meta = {
  title: 'Miscellaneous/Layout/Stack',
  component: Stack,
  argTypes: {
    tag: getEnumArgType(LayoutTag),
    direction: getEnumArgType(StackDirection),
    align: getEnumArgType(StackAlign),
    justify: getEnumArgType(StackJustify),
    spacing: getEnumArgType(spacingVars),
    wrap: getEnumArgType(StackWrap),
    fullWidth: { control: 'boolean' },
    fullHeight: { control: 'boolean' },
    className: { control: false },
    children: { control: false },
  },
  args: {
    tag: LayoutTag.DIV,
    direction: StackDirection.ROW,
    align: StackAlign.START,
    justify: StackJustify.START,
    spacing: spacingVars.base,
    wrap: StackWrap.NO_WRAP,
    fullWidth: false,
    fullHeight: false,
  },
};

type StackStory = StoryObj<typeof Stack>;

export const Default: StackStory = {
  render: props => (
    <Stack {...props}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
};

export default meta;
