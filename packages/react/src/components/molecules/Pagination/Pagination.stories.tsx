import { type Meta, type StoryObj } from '@storybook/react';

import { Pagination } from '.';

const meta: Meta = {
  title:     'Molecules/Pagination',
  component: Pagination,
  argTypes:  {
    min:          { control: 'number' },
    max:          { control: 'number' },
    visiblePages: { control: 'number' },
    defaultPage:  { control: 'number' },
  },
  args: {
    min:          1,
    max:          99,
    visiblePages: 10,
    defaultPage:  1,
    onPageChange: console.log,
  },
};

type PaginationStory = StoryObj<typeof Pagination>;

export const Default: PaginationStory = { render: props => <Pagination {...props} /> };

export default meta;
