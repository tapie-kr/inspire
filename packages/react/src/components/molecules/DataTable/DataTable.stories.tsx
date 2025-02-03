import { spacingVars } from '@/lib/style/contract/component.css';

import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { VStack } from '@/components/miscellaneous/layout/VStack';

import { type Meta, type StoryObj } from '@storybook/react';
import { StackAlign } from '@/lib/layout/types';
import { Filter } from '../Filter';
import { Pagination } from '../Pagination';
import { DataTable } from '.';

const meta: Meta = {
  title:     'Molecules/DataTable',
  component: DataTable,
};

type DataTableStory = StoryObj<typeof DataTable>;

enum Job {
  SOFTWARE_ENGINEER = 'Software Engineer',
  DESIGNER = 'Designer',
  PRODUCT_MANAGER = 'Product Manager',
}

type ExampleData = {
  name: string;
  age:  number;
  job:  Job;
};

const exampleData: Array<ExampleData> = [
  {
    name: 'John Doe',
    age:  32,
    job:  Job.SOFTWARE_ENGINEER,
  },
  {
    name: 'Jane Doe',
    age:  31,
    job:  Job.DESIGNER,
  },
  {
    name: 'James Doe',
    age:  30,
    job:  Job.PRODUCT_MANAGER,
  },
];

function ExampleTable() {
  return (
    <DataTable
      showIndex
      data={exampleData}
      actions={[
        {
          icon:    GlyphIcon.EDIT,
          onClick: () => {
          },
        },
        {
          icon:    GlyphIcon.DELETE,
          onClick: () => {
          },
        },
      ]}
      columns={[
        {
          key:        'name',
          label:      'Name',
          width:      200,
          isSortable: true,
        },
        {
          key:        'age',
          label:      'Age',
          width:      100,
          isSortable: true,
          cell:       age => `${age} years old`,
        },
        {
          key:   'job',
          label: 'Job',
          width: 300,
          cell:  job => job,
        },
      ]}
    />
  );
}

export const Default: DataTableStory = { render: ExampleTable };

export const FullExample: DataTableStory = {
  render: () => (
    <VStack
      fullWidth
      spacing={spacingVars.medium}
    >
      <VStack
        fullWidth
        spacing={spacingVars.petite}
        align={StackAlign.START}
      >
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
              ],
            },
          ]}
        />

        <ExampleTable />
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
