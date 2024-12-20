import { monospacedTypographyStyle } from './style.css'

import { TypographyProps, TypographyTag } from './shared'
import cn from 'classnames'
import { createElement } from 'react'

type TypographyBuilderProps = {
  tag: TypographyTag
  styleClassName?: string
  props: TypographyProps
}

export default function TypographyBuilder(props: TypographyBuilderProps) {
  const { tag, props: baseProps } = props
  const {
    className: defaultClassName, monospaced,
    children,
    ...restProps
  } = baseProps

  const classes = [defaultClassName, monospaced && monospacedTypographyStyle]

  return createElement(
    tag || TypographyTag.P,
    {
      className: cn(classes),
      ...restProps,
    },
    children,
  )
}
