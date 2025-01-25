import { type Meta, type StoryObj } from '@storybook/react';
import { DataTable } from '.';

const meta: Meta = {
  title: 'Molecules/DataTable',
  component: DataTable,
};

type DataTableStory = StoryObj<typeof DataTable>;

export const Default: DataTableStory = {
  render: () => (
    <DataTable
      columns={[
        {
          key: 'name',
          label: 'Name',
          width: 200,
          isSortable: true,
        },
        {
          key: 'age',
          label: 'Age',
          width: 100,
          isSortable: true,
        },
        {
          key: 'job',
          label: 'Job',
          width: 300,
        },
      ]}
      data={[
        {
          name: 'John Doe',
          age: 32,
          job: 'Software Engineer',
        },
        {
          name: 'Jane Doe',
          age: 31,
          job: 'Designer',
        },
        {
          name: 'James Doe',
          age: 30,
          job: 'Product Manager',
        },
      ]}
    />
  ),
};

export default meta;
