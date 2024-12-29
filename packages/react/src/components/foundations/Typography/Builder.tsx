import { monospacedTypographyStyle } from './styles.css'

import { TypographyProps, TypographyTag, TypographyWeight, TypographyWeightClass } from './shared'
import cn from 'classnames'
import { createElement } from 'react'

type TypographyBuilderProps = {
  tag: TypographyTag
  className?: string
  props: TypographyProps
}

export default function TypographyBuilder(props: TypographyBuilderProps) {
  const { tag: defaultTag, className: defaultClassName, props: baseProps } = props
  const {
    tag, className, monospaced,
    weight, children,
    ...restProps
  } = baseProps

  const classes = [
    defaultClassName,
    className,
    monospaced ?
      monospacedTypographyStyle :
      TypographyWeightClass[weight || TypographyWeight.Regular],
  ]

  console.log(props)

  return createElement(
    tag || defaultTag || TypographyTag.P,
    {
      className: cn(classes),
      ...restProps,
    },
    children,
  )
}
