import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import { Meta, StoryObj } from '@storybook/react';
import { getIconArgType } from '@/lib/storybook/icon';
import { Segment } from '.';

const meta: Meta<typeof Segment> = {
  title:     'Atoms/Segment',
  component: Segment,
  argTypes:  {
    leadingIcon: getIconArgType(),
    label:       { control: 'text' },
    value:       { control: 'text' },
  },
  args: {
    leadingIcon: GlyphIcon.DEFAULT,
    label:       'Segment',
    value:       'segment',
  },
};

type SegmentStory = StoryObj<typeof Segment>;

export const Default: SegmentStory = { render: props => <Segment {...props} /> };
export default meta;
