import { head } from '../styles/head.css';

import { type ReactNode } from 'react';

import { TableHeadCell } from './cell';

type TableHeadProps = { children?: ReactNode };

export function TableHead(props: TableHeadProps) {
  return (
    <thead className={head}>
      <tr>{props.children}</tr>
    </thead>
  );
}

TableHead.Cell = TableHeadCell;
