import { body } from '../styles/body.css';

import { type ReactNode } from 'react';
import { TableBodyCell } from './cell';
import { TableBodyRow } from './row';

type TableBodyProps = {
  children?: ReactNode;
};

export function TableBody(props: TableBodyProps) {
  return <tbody className={body}>{props.children}</tbody>;
}

TableBody.Row = TableBodyRow;

TableBody.Cell = TableBodyCell;
