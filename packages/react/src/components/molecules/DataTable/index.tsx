import { Table } from '@/components/foundations/Table';

import { type Column } from './shared';

type DataTableProps<T extends object> = {
  columns: Array<Column<T, keyof T>>;
  data: Array<T>;
};

export function DataTable<T extends object>(props: DataTableProps<T>) {
  return (
    <Table>
      <Table.Head>
        {props.columns.map(c => (
          <Table.Head.Cell
            key={c.key.toString()}
            width={c.width}
            isSortable={c.isSortable}
          >
            {c.label}
          </Table.Head.Cell>
        ))}
      </Table.Head>
      <Table.Body>
        {props.data.map((d, i) => (
          <Table.Body.Row key={i}>
            {props.columns.map(c => (
              <Table.Body.Cell key={c.key.toString()}>
                {c.cell ? c.cell(d[c.key]) : String(d[c.key])}
              </Table.Body.Cell>
            ))}
          </Table.Body.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
