import { base } from './styles/base.css';

import { ReactNode } from 'react';
import { TableBody } from './body';
import { TableHead } from './head';

type TableProps = {
  children?: ReactNode;
};

export function Table(props: TableProps) {
  return <table className={base}>{props.children}</table>;
}

Table.Head = TableHead;

Table.Body = TableBody;
