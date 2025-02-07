import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { Meta, StoryObj } from '@storybook/react';
import { StackDirection } from '@/lib/layout/types';
import { getEnumArgType } from '@/lib/storybook/enum';
import { Box } from '../Box';
import { DStack } from '.';

const meta: Meta = {
  title:     'Miscellaneous/Layout/DStack',
  component: DStack,
  argTypes:  {
    defaultDirection: getEnumArgType(StackDirection), breakpoint: { control: 'number' },
  },
  args: {
    defaultDirection: StackDirection.ROW, breakpoint: 768,
  },
};

type DStackStory = StoryObj<typeof DStack>;

export const Default: DStackStory = { render: props => (
  <DStack
    {...props}
    spacing={spacingVars.base}
  >
    <Item />
    <Item />
    <Item />
  </DStack>
) };

export default meta;

function Item() {
  return (
    <Box
      style={{
        width:        150,
        height:       150,
        background:   colorVars.surface.raised,
        borderRadius: radiusVars.default,
      }}
    />
  );
}
