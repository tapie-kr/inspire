import { spacingVars } from '@/lib/style/contract/component.css';

import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { VStack } from '@/components/miscellaneous/layout/VStack';

import { type Meta, type StoryObj } from '@storybook/react';
import { Filter } from '../Filter';
import { Pagination } from '../Pagination';
import { DataTable } from '.';

const meta: Meta = {
  title: 'Molecules/DataTable',
  component: DataTable,
};

type DataTableStory = StoryObj<typeof DataTable>;

const exampleData = [
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
];

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
          cell: age => `${age} years old`,
        },
        {
          key: 'job',
          label: 'Job',
          width: 300,
        },
      ]}
      data={exampleData}
    />
  ),
};

export const FullExample: DataTableStory = {
  render: () => (
    <VStack
      fullWidth
      spacing={spacingVars.medium}
    >
      <VStack
        fullWidth
        spacing={spacingVars.petite}
      >
        <Filter
          filters={[
            {
              label: '상태',
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
              label: '타입1234',
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
              ],
            },
          ]}
        />
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
              cell: age => `${age} years old`,
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
      </VStack>
      <Pagination
        min={1}
        max={20}
        visiblePages={10}
        defaultPage={1}
      />
    </VStack>
  ),
};

export default meta;
