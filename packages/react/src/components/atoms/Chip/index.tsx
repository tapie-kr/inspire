import * as s from './styles.css';

import { HStack } from '@cottons-kr/react-foundation';
import { IconName } from '@/components/foundations/Icon/shared';
import { Icon } from '@/components/foundations/Icon';
import { Typo } from '@/components/foundations/Typography';
import { Spacing } from '@/constants';
import { Weight } from '@/components/foundations/Typography/shared';
import cn from 'classnames';

type ChipProps = {
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  active?: boolean;
  children?: string;
};

export function Chip(props: ChipProps) {
  const { leadingIcon, trailingIcon, active = false } = props;

  return (
    <>
      <button className={cn(s.base, active && s.active)}>
        <HStack fitContent align="center" justify="center" gap={Spacing.Tiny}>
          {leadingIcon && <Icon name={leadingIcon} size={20} />}
          <Typo.Base weight={Weight.MEDIUM}>{props.children}</Typo.Base>
          {trailingIcon && <Icon name={trailingIcon} size={20} />}
        </HStack>
      </button>
    </>
  );
}
