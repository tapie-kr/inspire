import { active, segment } from './styles.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { Icon } from '@/components/foundations/Icon';
import { Typo } from '@/components/foundations/Typography';
import { HStack } from '@/components/miscellaneous/layout/HStack';

import cn from 'classnames';
import { type IconName } from '@/components/foundations/Icon/shared';
import { Weight } from '@/components/foundations/Typography/shared';

type SegmentProps = {
  leadingIcon?: IconName;
  label: string;
  isActive?: boolean;
};

export function Segment(props: SegmentProps) {
  return (
    <HStack
      className={cn(segment, {
        [active]: props.isActive,
      })}
      spacing={spacingVars.mini}
    >
      <Icon
        name={props.leadingIcon}
        size={20}
      />
      <Typo.Petite weight={props.isActive ? Weight.SEMIBOLD : Weight.MEDIUM}>
        {props.label}
      </Typo.Petite>
    </HStack>
  );
}
