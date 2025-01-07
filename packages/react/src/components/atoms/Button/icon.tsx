import { IconName } from '@/components/foundations/Icon/shared'
import { Icon } from '@/components/foundations/Icon'

type ButtonIconProps = {
  name?: IconName
  size: number
}

export function ButtonIcon(props: ButtonIconProps) {
  if (!props.name) return null

  return <>
    <Icon name={props.name} size={props.size} />
  </>
}
