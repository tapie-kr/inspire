import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Box } from '@/components/miscellaneous/layout/Box';

import { type Meta, type StoryObj } from '@storybook/react';
import { DataView } from '.';

const meta: Meta = {
  title: 'Molecules/DataView',
  component: DataView,
  argTypes: {
    actions: { control: false },
  },
  args: {
    actions: [
      {
        icon: GlyphIcon.ADD,
        label: '추가',
      },
    ],
    filters: [
      {
        label: '상태',
        options: [
          {
            label: '전체',
            value: GlyphIcon.PALETTE,
          },
          {
            label: '활성',
            value: GlyphIcon.ADD,
          },
          {
            label: '비활성',
            value: GlyphIcon.CLOSE,
          },
        ],
      },
      {
        label: '타입1234',
        options: [
          {
            label: '전체',
            value: GlyphIcon.PALETTE,
          },
          {
            label: '타입1',
            value: GlyphIcon.ADD,
          },
          {
            label: '타입2',
            value: GlyphIcon.CLOSE,
          },
        ],
      },
    ],
  },
};

type DataViewStory = StoryObj<typeof DataView>;

export const Default: DataViewStory = {
  render: props => (
    <Box style={{ width: 800 }}>
      <DataView {...props} />
    </Box>
  ),
};

export default meta;
