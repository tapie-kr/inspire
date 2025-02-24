import { GlyphIcon } from '@/components/foundations/Icon/icon-set';

import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';
import { SelectSize } from './shared';

const meta = {
  title:      'Atoms/Select',
  component:  Select,
  parameters: { layout: 'centered' },
  tags:       ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: props => (
    <div style={{ width: 250 }}>
      <Select
        leadingIcon={GlyphIcon.BADGE}
        placeholder='Placeholder'
        size={SelectSize.MEDIUM}
        {...props}
      >
        <Select.Item
          value='1'
          label='Option 1'
        />
        <Select.Item
          value='2'
          label='Option 2'
        />
        <Select.Item
          value='3'
          label='Option 3'
        />
      </Select>
    </div>
  ),
  args: {
    leadingIcon: GlyphIcon.BADGE,
    placeholder: 'Placeholder',
    children:    (
      <>
        <Select.Item
          value='1'
          label='Option 1'
        />
        <Select.Item
          value='2'
          label='Option 2'
        />
        <Select.Item
          value='3'
          label='Option 3'
        />
      </>
    ),
  },
};
