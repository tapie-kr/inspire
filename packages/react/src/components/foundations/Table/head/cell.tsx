import { cell, cellContent } from '../styles/head.css';

import { HStack } from '@/components/miscellaneous/layout/HStack';

import { StackAlign, StackJustify } from '@/lib/layout/types';

import { Icon } from '../../Icon';

import { GlyphIcon } from '../../Icon/icon-set';

import { Typo } from '../../Typography';

import { Weight } from '../../Typography/shared';

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
