import { Button } from '@/components/atoms/Button';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Box } from '@/components/miscellaneous/layout/Box';

import { type Meta, type StoryObj } from '@storybook/react';
import { ButtonSize } from '@/components/atoms/Button/shared';
import { DataView } from '.';

const meta: Meta = {
  title: 'Molecules/DataView',
  component: DataView,
  argTypes: {
    actions: { control: false },
  },
  args: {
    actions: null,
  },
};

type DataViewStory = StoryObj<typeof DataView>;

export const Default: DataViewStory = {
  render: props => (
    <Box style={{ width: 800 }}>
      <DataView
        {...props}
        actions={
          <Button.Default
            size={ButtonSize.MEDIUM}
            leadingIcon={GlyphIcon.ADD}
          >
            추가
          </Button.Default>
        }
      />
    </Box>
  ),
};

export default meta;
