import { row } from '../styles/body.css';

import { ReactNode } from 'react';

type TableBodyRowProps = {
  children?: ReactNode;
};

export function TableBodyRow(props: TableBodyRowProps) {
  return <tr className={row}>{props.children}</tr>;
}
