import { monospacedTypographyStyle } from './styles/glyph.css'
import * as weightStyles from './styles/weight.css'

import { TypographyProps, TypographyTag, TypographyWeight } from './shared'
import cn from 'classnames'
import { createElement } from 'react'

type TypographyBuilderProps = {
  tag: TypographyTag
  styleClassName?: string
  props: TypographyProps
}

export default function TypographyBuilder(props: TypographyBuilderProps) {
  const { tag, styleClassName, props: baseProps } = props
  const {
    className: defaultClassName, monospaced,
    weight, children,
    ...restProps
  } = baseProps

  const classes = [
    defaultClassName,
    styleClassName,,
    monospaced ?
      monospacedTypographyStyle :
      weightStyles[weight || TypographyWeight.Regular],
  ]

  return createElement(
    tag || TypographyTag.P,
    {
      className: cn(classes),
      ...restProps,
    },
    children,
  )
}
