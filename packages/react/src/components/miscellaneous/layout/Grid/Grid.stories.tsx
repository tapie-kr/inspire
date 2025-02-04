import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars } from '@/lib/style/contract/component.css';

import { type Meta, type StoryObj } from '@storybook/react';
import { Box } from '../Box';
import { Grid } from '.';

const meta: Meta = {
  title:     'Miscellaneous/Layout/Grid',
  component: Grid,
  argTypes:  {
    gap:         { control: { type: 'number' } },
    rowGap:      { control: { type: 'number' } },
    columnGap:   { control: { type: 'number' } },
    columnCount: { control: { type: 'number' } },
    fullWidth:   { control: { type: 'boolean' } },
    fullHeight:  { control: { type: 'boolean' } },
  },
  args: {
    gap:         10,
    columnCount: 3,
  },
};

type GridStory = StoryObj<typeof Grid>;

export const Default: GridStory = { render: props => (
  <Box style={{ width: 600 }}>
    <Grid {...props}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Grid>
  </Box>
) };

export default meta;

function Item() {
  return (
    <Box
      fullWidth
      style={{
        height:       150,
        background:   colorVars.surface.raised,
        borderRadius: radiusVars.default,
      }}
    />
  );
}
