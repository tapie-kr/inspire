import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import { type Meta, type StoryObj } from '@storybook/react';

import { Filter } from '.';

const meta: Meta = {
  title:     'Molecules/Filter',
  component: Filter,
};

type FilterStory = StoryObj<typeof Filter>;

export const Default: FilterStory = {
  render: () => (
    <Filter
      filters={[
        {
          label:   '상태',
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
          label:   '타입1234',
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
            {
              label: '타입2',
              value: GlyphIcon.CLOSE,
            },
            {
              label: '타입2',
              value: GlyphIcon.CLOSE,
            },
          ],
        },
      ]}
    />
  ),
};

export default meta;
