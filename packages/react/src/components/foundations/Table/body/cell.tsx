import { cellContent } from '../styles/base.css';
import { cell } from '../styles/body.css';

import { Box } from '@/components/miscellaneous/layout/Box';

import { type ReactNode } from 'react';

type TableBodyCellProps = { children?: ReactNode };

export function TableBodyCell(props: TableBodyCellProps) {
  return (
    <td className={cell}>
      <Box className={cellContent}>{props.children}</Box>
    </td>
  );
}
