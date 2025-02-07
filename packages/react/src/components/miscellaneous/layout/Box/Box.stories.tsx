import { Meta, StoryObj } from '@storybook/react';
import { Box } from '.';

const meta: Meta = {
  title:     'Miscellaneous/Layout/Box',
  component: Box,
};

type BoxStory = StoryObj<typeof Box>;

export const Default: BoxStory = { render: props => <Box {...props} /> };
export default meta;
