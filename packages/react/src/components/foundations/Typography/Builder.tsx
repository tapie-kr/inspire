import { monospacedTypographyStyle } from './styles.css'

import { TypographyProps, Tag, Weight, TypographyWeightClass } from './shared'
import cn from 'classnames'
import { createElement } from 'react'

type TypographyBuilderProps = {
  tag: Tag
  className?: string
  props: TypographyProps
}

export default function TypographyBuilder(props: TypographyBuilderProps) {
  const { tag: defaultTag, className: defaultClassName, props: baseProps } = props
  const {
    tag, className, monospaced, nowrap,
    weight, color, style,
    children,
    ...restProps
  } = baseProps

  const classes = [
    defaultClassName,
    className,
    monospaced ?
      monospacedTypographyStyle :
      TypographyWeightClass[weight || Weight.Regular],
  ]

  return createElement(
    tag || defaultTag || Tag.P,
    {
      ...restProps,
      className: cn(classes),
      style: {
        color,
        whiteSpace: nowrap ? 'nowrap' : undefined,
        ...style,
      },
    },
    children,
  )
}
