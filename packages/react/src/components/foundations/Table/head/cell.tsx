import { cell, cellContent } from '../styles/head.css';

import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Typo } from '@/components/foundations/Typography';
import { HStack } from '@/components/miscellaneous/layout/HStack';

import { Weight } from '@/components/foundations/Typography/shared';
import { StackAlign, StackJustify } from '@/lib/layout/types';

type TableHeadCellProps = {
  width?:      number | string;
  isSortable?: boolean;
  children?:   string;
};

export function TableHeadCell(props: TableHeadCellProps) {
  return (
    <th
      className={cell}
      style={{ width: props.width }}
    >
      <HStack
        fullWidth
        className={cellContent}
        align={StackAlign.CENTER}
        justify={StackJustify.BETWEEN}
      >
        <Typo.Petite weight={Weight.MEDIUM}>{props.children}</Typo.Petite>
        <Icon
          name={props.isSortable && GlyphIcon.EXPAND_ALL}
          size={14}
        />
      </HStack>
    </th>
  );
}
