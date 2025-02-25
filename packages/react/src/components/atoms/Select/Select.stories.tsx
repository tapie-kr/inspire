import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';
import { SelectSize } from './shared';

const meta: Meta = {
  title:     'Atoms/Select',
  component: Select,
};

type SelectStory = StoryObj<typeof meta>;

export const Default: SelectStory = {
  render: props => (
    <div style={{
      width: 250, display: 'flex', gap: 8, flexDirection: 'column',
    }}
    >
      <Select
        leadingIcon={GlyphIcon.BADGE}
        placeholder='Placeholder'
        size={SelectSize.MEDIUM}
        options={[
          {
            value: '1',
            label: 'Option 1',
          },
          {
            value: '2',
            label: 'Option 2',
          },
          {
            value: '3',
            label: 'Option 3',
          },
        ]}
        {...props}
      />
      <Select
        leadingIcon={GlyphIcon.BADGE}
        placeholder='Placeholder'
        size={SelectSize.MEDIUM}
        options={[
          {
            value: '1',
            label: 'Option 1',
          },
          {
            value: '2',
            label: 'Option 2',
          },
          {
            value: '3',
            label: 'Option 3',
          },
        ]}
        {...props}
      />
    </div>
  ),
  args: {
    leadingIcon: GlyphIcon.BADGE,
    placeholder: 'Placeholder',
  },
};

export default meta;
