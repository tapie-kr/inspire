import { Table } from '@/components/foundations/Table';

import { type AcceptableData, type Column } from './shared';

type DataTableProps<T extends AcceptableData> = {
  columns: Array<Column<T, keyof T>>;
  data: Array<T>;
};

export function DataTable<T extends AcceptableData>(props: DataTableProps<T>) {
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
              <Table.Body.Cell key={c.key.toString()}>{String(d[c.key])}</Table.Body.Cell>
            ))}
          </Table.Body.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
