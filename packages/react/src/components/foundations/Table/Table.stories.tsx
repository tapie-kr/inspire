import { type Meta, type StoryObj } from '@storybook/react';
import { Table } from '.';

const meta: Meta = {
  title: 'Foundations/Table',
  component: Table,
};

type TableStory = StoryObj<typeof Table>;

export const Default: TableStory = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.Head.Cell isSortable>Header 1</Table.Head.Cell>
        <Table.Head.Cell isSortable>Header 2</Table.Head.Cell>
        <Table.Head.Cell isSortable>Header 3</Table.Head.Cell>
        <Table.Head.Cell isSortable>Header 4</Table.Head.Cell>
      </Table.Head>
      <Table.Body>
        <Table.Body.Row>
          <Table.Body.Cell>Row 1, Cell 1</Table.Body.Cell>
          <Table.Body.Cell>Row 1, Cell 2</Table.Body.Cell>
          <Table.Body.Cell>Row 1, Cell 3</Table.Body.Cell>
          <Table.Body.Cell>Row 1, Cell 4</Table.Body.Cell>
        </Table.Body.Row>
        <Table.Body.Row>
          <Table.Body.Cell>Row 2, Cell 1</Table.Body.Cell>
          <Table.Body.Cell>Row 2, Cell 2</Table.Body.Cell>
          <Table.Body.Cell>Row 2, Cell 3</Table.Body.Cell>
          <Table.Body.Cell>Row 2, Cell 4</Table.Body.Cell>
        </Table.Body.Row>
      </Table.Body>
    </Table>
  ),
};

export default meta;
