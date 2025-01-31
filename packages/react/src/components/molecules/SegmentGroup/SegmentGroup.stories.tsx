import { Segment } from '@/components/atoms/Segment';

import { type Meta, type StoryObj } from '@storybook/react';

import { SegmentGroup } from '.';

const meta: Meta<typeof SegmentGroup> = {
  title:     'Molecules/SegmentGroup',
  component: SegmentGroup,
};

type SegmentGroupStory = StoryObj<typeof SegmentGroup>;

enum SegmentValue {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
}

export const Default: SegmentGroupStory = {
  render: () => (
    <SegmentGroup defaultValue={SegmentValue.FIRST}>
      <Segment
        label='첫번째'
        value={SegmentValue.FIRST}
      />

      <Segment
        label='두번째'
        value={SegmentValue.SECOND}
      />

      <Segment
        label='세번째'
        value={SegmentValue.THIRD}
      />
    </SegmentGroup>
  ),
};

export default meta;
