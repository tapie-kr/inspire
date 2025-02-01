import { colorVars } from '@/lib/style/contract/color.css';

import { spacingVars } from '@/lib/style/contract/component.css';

import { Button } from '@/components/atoms/Button';

import { Table } from '@/components/foundations/Table';

import { Typo } from '@/components/foundations/Typography';

import { HStack } from '@/components/miscellaneous/layout/HStack';

import { ButtonSize, ButtonVariant } from '@/components/atoms/Button/shared';

import { Weight } from '@/components/foundations/Typography/shared';

import { type ActionIcon, type Column } from './shared';

type DataTableProps<T extends object> = {
  columns:    Array<Column<T, keyof T>>;
  data:       Array<T>;
  actions?:   Array<ActionIcon>;
  showIndex?: boolean;
};

export function DataTable<T extends object>(props: DataTableProps<T>) {
  const shouldShowActions = props.actions && props.actions.length > 0;

  return (
    <Table>
      <Table.Head>
        {props.showIndex && <Table.Head.Cell width={40}>#</Table.Head.Cell>}

        {props.columns.map(c => (
          <Table.Head.Cell
            key={c.key.toString()}
            width={c.width}
            isSortable={c.isSortable}
          >
            {c.label}
          </Table.Head.Cell>
        ))}

        {shouldShowActions && <Table.Head.Cell width={100}>액션</Table.Head.Cell>}
      </Table.Head>

      <Table.Body>
        {props.data.map((d, i) => (
          <Table.Body.Row key={i}>
            {props.showIndex && (
              <Table.Body.Cell>
                <Typo.Petite
                  weight={Weight.MEDIUM}
                  color={colorVars.content.muted}
                >
                  {i + 1}
                </Typo.Petite>
              </Table.Body.Cell>
            )}

            {props.columns.map(c => (
              <Table.Body.Cell key={c.key.toString()}>
                {c.cell
                  ? c.cell(d[c.key], i + 1, d)
                  : <Typo.Base weight={Weight.MEDIUM}>{String(d[c.key])}</Typo.Base>}
              </Table.Body.Cell>
            ))}

            {shouldShowActions && (
              <Table.Body.Cell>
                <HStack spacing={spacingVars.base}>
                  {props.actions?.map((a, i) => {
                    const handleClick = () => a.onClick(i + 1);

                    return (
                      <Button.Icon
                        key={i}
                        variant={ButtonVariant.SECONDARY}
                        size={ButtonSize.MEDIUM}
                        icon={a.icon}
                        color={colorVars.content.default}
                        onClick={handleClick}
                      />
                    );
                  })}
                </HStack>
              </Table.Body.Cell>
            )}
          </Table.Body.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
