import { Typo } from '@/components/foundations/Typography';

import { type SelectItemProps } from './shared';

export default function SelectItem(props: SelectItemProps) {
  const { label, value } = props;

  return (
    <li value={value}>
      <Typo.Base>{label}</Typo.Base>
    </li>
  );
}
